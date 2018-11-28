import { Injectable } from "@angular/core";
import { protos } from "../../proto/bundle";
import { UserProvider } from "../user/user";

@Injectable()
export class SettingsProvider {
  private contacts: protos.IUserModel[];
  private blockedUsers: protos.IUserModel[];
  private friendRequests: protos.IFriendRequest[];
  private newMessages: protos.IMessage[];
  private mappedMessages: { [k: string]: protos.IMessage[] } = {};
  private hasRecoveryKey: boolean = false;

  constructor(private userProvider: UserProvider) {}

  /**
   * Stores all the data received in a handshake for further use.
   *
   * @param {protos.AccountHandshake} data the data that the server sends on a successfully completed handshake
   */
  public initDataFromServer(data: protos.AccountHandshake) {
    this.contacts = data.contacts || [];
    this.friendRequests = data.friendRequests || [];
    this.newMessages = data.newMessages || [];
    this.blockedUsers = data.blockedUsers || [];
    this.hasRecoveryKey = data.hasRecoveryKey;

    for (const m of data.newMessages) {
      const k = m.from === this.userProvider.username ? m.to : m.from;
      if (!this.mappedMessages[k]) {
        this.mappedMessages[k] = [];
      }
      this.mappedMessages[k].push(m);
    }
  }

  /**
   * removes an user from the contact list
   * @param un the user's username
   */
  public removeContact(un: string) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].username === un) {
        const c = this.contacts[i];
        this.contacts.splice(i, 1);
        return c;
      }
    }
  }

  /**
   * returns a user model from the blocked list
   * @param un
   */
  public getBlockerModel(un: string) {
    for (const bl of this.blockedUsers) {
      if (bl.username === un) {
        return bl;
      }
    }
    return undefined;
  }

  /**
   * Adds a contact to the blocked list
   */
  public addBlocked(um: protos.IUserModel) {
    this.blockedUsers.push(um);
  }

  /**
   * Removes a contact from the blocked list
   * @param un the user's username
   */
  public removeBlocked(un: string) {
    for (let i = 0; i < this.blockedUsers.length; i++) {
      if (this.blockedUsers[i].username === un) {
        this.blockedUsers.splice(i, 1);
        return;
      }
    }
  }

  /**
   * Returns true if an user was previously blocked and is in the blocked list
   * @param un
   */
  public isUserBlocked(un: string) {
    for (const b of this.blockedUsers) {
      if (b.username === un) return true;
    }
    return false;
  }

  /**
   * returns all the messages with a specified user
   */
  public getMessagesFromUser(user: string): protos.IMessage[] {
    return this.mappedMessages[user] || [];
  }

  /**
   * returns the number of conversations that have new messages
   */
  public getNumberOfUnopenedConversations(): number {
    let n = 0;
    for (const u of Object.keys(this.mappedMessages)) {
      if (this.mappedMessages[u].length > 0 && this.userIsContact(u)) {
        n++;
      }
    }
    return n;
  }

  /**
   * returns all the user's contacts
   */
  public getContacts(): protos.IUserModel[] {
    return this.contacts;
  }

  /**
   * returns all the blocked contacts from the current user
   */
  public getBlockedUsers(): protos.IUserModel[] {
    return this.blockedUsers;
  }

  /**
   * returns the public key from an user in contacts
   *
   * @param user
   */
  public getContactPublicK(user: string): string {
    for (const c of this.contacts) {
      if (c.username === user) {
        return c.pubK;
      }
    }

    return undefined;
  }

  /**
   * removes the messages from de dictionary. Use this whe the user reads the messages from any user
   * @param from the user that sent the messages
   */
  public removeMessages(from: string) {
    this.mappedMessages[from] = [];
  }

  /**
   * returns all the user's friend requests
   */
  public getFriendRequests() {
    return this.friendRequests;
  }

  /**
   * Returns true if the user has a recovery key
   */
  public hasRecKey() {
    return this.hasRecoveryKey;
  }

  public setRecoveryKeyTrue() {
    this.hasRecoveryKey = true;
  }

  /**
   * Removes the friend request entry
   * @param from
   */
  public removeFriendRequest(from: string): protos.IFriendRequest {
    for (let i = 0; i < this.friendRequests.length; i++) {
      if (this.friendRequests[i].username === from) {
        const t = this.friendRequests[i];
        this.friendRequests.splice(i, 1);
        return t;
      }
    }
  }

  /**
   * checks if an username belongs to the contact list
   */
  public userIsContact(un: string) {
    for (const c of this.contacts) {
      if (c.username === un) return true;
    }
    return false;
  }

  /**
   * Adds a contact that has been accepted by a friend request
   */
  public addContact(fr: protos.IFriendRequest) {
    this.contacts.push({
      username: fr.username,
      pubK: fr.pubK
    });
  }
}
