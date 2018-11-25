import { Injectable } from "@angular/core";
import {
  SecureStorage,
  SecureStorageObject
} from "@ionic-native/secure-storage";
import * as nacl from "tweetnacl";
import * as naclString from "tweetnacl-util";
import { Platform } from "ionic-angular";
import { RequestProvider } from "../request/request";
import { protos } from "../../proto/bundle";
import * as niceware from "niceware";

/*
  Generated class for the CryptoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CryptoProvider {
  private static readonly SECURE_STORAGE_KEY = "apate.keystore";
  private static readonly PRIVATE_KEY_ALIAS = "apate.keystore.priv";

  private storageObject: SecureStorageObject;
  private keyPair: nacl.BoxKeyPair;
  private initialized = false;
  private serverPubK: Uint8Array;

  constructor(
    private _secureStorage: SecureStorage,
    private _platform: Platform,
    private _req: RequestProvider
  ) {}

  public async init() {
    if (this.initialized) {
      return;
    }
    await this._platform.ready();
    // initialize an instance of secure storage to hold te crypto keys
    await this._secureStorage
      .create(CryptoProvider.SECURE_STORAGE_KEY)
      .then(async obj => {
        this.storageObject = obj;

        this.keyPair = await this.loadKeyPair();

        if (!this.keyPair) {
          this.keyPair = this.genKeyPair();
          await this.storePrivateKey(this.keyPair.secretKey);
        }

        this.initialized = true;
      });

    await this.loadServerPublicKey();
  }

  /**
   * Use this with EXTREME caution, this function will delete the
   * private key from the secure storage!
   */
  public async wipe() {
    this.keyPair = undefined;
    await this.storageObject.remove(CryptoProvider.PRIVATE_KEY_ALIAS);
    this.storageObject = undefined;
    this.initialized = false;
  }

  /**
   * returns true if the keys could be correctly loaded, false otherwise
   */
  private async loadKeyPair(): Promise<nacl.BoxKeyPair> {
    let b64pk: string;

    try {
      b64pk = await this.storageObject.get(CryptoProvider.PRIVATE_KEY_ALIAS);
    } catch (err) {
      b64pk = undefined;
      console.warn(JSON.stringify(err));
    }

    if (!b64pk) {
      // TODO: check if there is a user. If there is, something really bad happened :(
      return undefined;
    }

    const bPrivKey = naclString.decodeBase64(b64pk);
    const keyPair = nacl.box.keyPair.fromSecretKey(bPrivKey);

    return keyPair;
  }

  /**
   * Generates a key pair that implements x25519-xsalsa20-poly1305
   */
  private genKeyPair() {
    return nacl.box.keyPair();
  }

  /**
   * Loads the server public key. Without the server pubK, further requests cannot be authenticated
   * and so, nothing will work
   */
  private async loadServerPublicKey() {
    const res = await this._req.get("serverpk");
    this.serverPubK = naclString.decodeBase64(res.data);
  }

  /**
   * Stores the generated secret key in the secure storage of the device
   */
  private async storePrivateKey(k: Uint8Array) {
    const b64pk = naclString.encodeBase64(k);
    await this.storageObject.set(CryptoProvider.PRIVATE_KEY_ALIAS, b64pk);
  }

  /**
   * Returns the public key encoded in Base64
   */
  public getB64PublicKey(): string {
    return naclString.encodeBase64(this.keyPair.publicKey);
  }

  /**
   * Generates a nonce that can be used to create a box seal
   * It'll return an array of 24 bytes
   */
  public genNonce(): Uint8Array {
    return nacl.randomBytes(24);
  }

  /**
   * Creates a box that can be sent to the server
   * The proto MUST be constructed first!
   * @param msg the message to be encrypted
   */
  public createServerBox(msg: Uint8Array, nonce: Uint8Array): Uint8Array {
    return nacl.box(msg, nonce, this.serverPubK, this.keyPair.secretKey);
  }

  /**
   * Generates a box that is already in proto format.
   * Can be sent to the RequestProvider as is.
   *
   * @param msg the message to be encrypted
   * @param username the device's username
   */
  public genBoxForServer(username: string, msg?: Uint8Array): Uint8Array {
    if (!msg) {
      msg = naclString.decodeBase64("b2s="); // "ok"
    }

    const nonce = this.genNonce();
    const encrypted = this.createServerBox(msg, nonce);
    const message = protos.DeviceRequest.create({
      nonce: naclString.encodeBase64(nonce),
      paylod: naclString.encodeBase64(encrypted),
      username
    });
    return protos.DeviceRequest.encode(message).finish();
  }

  /**
   * Generates a box that is ready to be sent to the server.
   * The box is first encrypted to the server and the payload is encrypted to the user.
   *
   * @param msg MUST be already encoded in base64!
   * @param from The current user
   * @param pubK Recipient's public key
   */
  public genBoxForUser(
    msg: Uint8Array,
    from: string,
    pubK: string,
    type: protos.MessageBody.Type
  ): Uint8Array {
    const nonce = this.genNonce();
    const encrypted = nacl.box(
      msg,
      nonce,
      naclString.decodeBase64(pubK),
      this.keyPair.secretKey
    );

    const userMessage = protos.MessageBody.create({
      body: naclString.encodeBase64(encrypted),
      nonce: naclString.encodeBase64(nonce),
      type
    });

    const bUserMessage = protos.MessageBody.encode(userMessage).finish();
    const serverBox = this.genBoxForServer(from, bUserMessage);

    return serverBox;
  }

  /**
   * Opens a user box (encrypted message)
   *
   * @param payload the message
   * @param nonce nonce
   * @param pubK user's public key
   */
  public openUserBox(payload: string, nonce: string, pubK: string): Uint8Array {
    return nacl.box.open(
      naclString.decodeBase64(payload),
      naclString.decodeBase64(nonce),
      naclString.decodeBase64(pubK),
      this.keyPair.secretKey
    );
  }

  public encryptPrivateKeyWithPassphrase(pass: string[]) {
    const buf: Buffer = niceware.passphraseToBytes(pass);
    const key = new Uint8Array(32);
    buf.copy(key, 0, 0, 8);
    const encrypted = nacl.secretbox(
      this.keyPair.secretKey,
      new Uint8Array(24),
      key
    );

    return encrypted;
  }
}
