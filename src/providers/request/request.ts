import { Injectable } from "@angular/core";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { protos } from "../../proto/bundle";
import naclString from "tweetnacl-util";
import qs from "qs";

export type Endpoint =
  | "signup"
  | "serverpk"
  | "handshake"
  | "qUser"
  | "deleteAccount"
  | "addUser"
  | "loadMessage"
  | "deleteMessage"
  | "sendMessage"
  | "storeRecKey"
  | "acceptFriendRequest"
  | "denyFriendRequest"
  | "deleteUser"
  | "blockUser"
  | "unblockUser";
export type Method = "get" | "post" | "delete" | "put";
export interface RequestMethod {
  url: string;
  method: Method;
}

const _endpoints: { [k in Endpoint]: RequestMethod } = {
  signup: {
    method: "post",
    url: "/user"
  },
  serverpk: {
    method: "get",
    url: "/server/pubk"
  },
  handshake: {
    method: "post",
    url: "/handshake"
  },
  qUser: {
    method: "get",
    url: "/user/q/"
  },
  deleteAccount: {
    method: "delete",
    url: "/user"
  },
  addUser: {
    method: "post",
    url: "/user/"
  },
  deleteUser: {
    method: "delete",
    url: "/user/"
  },
  loadMessage: {
    method: "get",
    url: "/message/"
  },
  deleteMessage: {
    method: "delete",
    url: "/message/"
  },
  sendMessage: {
    method: "post",
    url: "/message/"
  },
  storeRecKey: {
    method: "post",
    url: "/recovery"
  },
  acceptFriendRequest: {
    method: "post",
    url: "/fr/"
  },
  denyFriendRequest: {
    method: "delete",
    url: "/fr/"
  },
  blockUser: {
    method: "post",
    url: "/block/"
  },
  unblockUser: {
    method: "delete",
    url: "/block/"
  }
};

@Injectable()
export class RequestProvider {
  // private static readonly BASE_URL = "http://192.168.0.154:8001/";
  private static readonly BASE_URL = "http://192.168.0.4:8001/";

  private _axiosInstance: AxiosInstance;

  constructor() {
    // defines the base url to the Apate API
    this._axiosInstance = axios.create({
      baseURL: RequestProvider.BASE_URL,
      timeout: 5000,
      headers: {
        "Content-Type": "text/plain"
        // "Content-Type": "application/x-protobuf"
      }
    });
  }

  /**
   * Performs a request on the back-end API with the given data, if any.
   */
  public async request(
    endpoint: Endpoint,
    data?: Uint8Array | string,
    appendToURL?: string
  ): Promise<AxiosResponse<protos.ServerResponse>> {
    let request: AxiosResponse<any>;
    let dt: string;

    if (data) {
      dt = typeof data === "string" ? data : naclString.encodeBase64(data);
    }

    try {
      if (_endpoints[endpoint].method === "get") {
        request = await this.get(endpoint, dt, appendToURL);
      } else if (_endpoints[endpoint].method === "post") {
        request = await this.post(endpoint, dt, appendToURL);
      } else if (_endpoints[endpoint].method === "delete") {
        request = await this.delete(endpoint, dt, appendToURL);
      } else if (_endpoints[endpoint].method === "put") {
        request = await this.put(endpoint, dt, appendToURL);
      }
      const decoded = naclString.decodeBase64(request.data);
      request.data = protos.ServerResponse.decode(decoded);
    } catch (err) {
      if (err.response.data) {
        const decoded = naclString.decodeBase64(err.response.data);
        err.response.data = protos.ServerResponse.decode(decoded);
        throw err;
      }
    }

    return request;
  }

  /**
   * Performs a GET request on the back-end API with the given data, if any.
   */
  public async get(
    endpoint: Endpoint,
    data?: string | Uint8Array,
    appendToURL?: string
  ) {
    if (data && typeof data !== "string") {
      data = naclString.encodeBase64(data);
    }
    const endP = _endpoints[endpoint].url + (appendToURL || "");
    return this._axiosInstance.get(endP + "?d=" + data || "");
  }

  /**
   * Performs a POST request on the back-end API with the given data, if any.
   */
  public async post(
    endpoint: Endpoint,
    data?: string | Uint8Array,
    appendToURL?: string
  ) {
    if (data && typeof data !== "string") {
      data = naclString.encodeBase64(data);
    }
    const endP = _endpoints[endpoint].url + (appendToURL || "");
    return this._axiosInstance.post(endP, data);
  }

  /**
   * Performs a DELETE request on the back-end API with the given data, if any.
   */
  public async delete(endpoint: Endpoint, data?: any, appendToURL?: string) {
    const endP = _endpoints[endpoint].url;
    return this._axiosInstance.delete(
      endP + (appendToURL || "") + ("?d=" + data || "")
    );
  }

  /**
   * Performs a PUT request on the back-end API with the given data, if any.
   */
  public async put(
    endpoint: Endpoint,
    data?: string | Uint8Array,
    appendToURL?: string
  ) {
    if (data && typeof data !== "string") {
      data = naclString.encodeBase64(data);
    }
    const endP = _endpoints[endpoint].url + (appendToURL || "");
    return this._axiosInstance.put(endP, data);
  }

  /**
   * Marshals an string into a proto
   *
   * @param p Base64 encoded proto
   * @param protoModel Proto model name to be marshalled
   */
  public openProto<T>(p: string, protoModel: string) {
    const decoded = naclString.decodeBase64(p);
    const m = protos[protoModel].decode(decoded);
    return <T>m;
  }

  /**
   * parses any error that can be sent by the server and returns an error message
   * @param err
   */
  public parseError(err: any): string {
    if (err.response && err.response.data && err.response.data.message) {
      return err.response.data.message;
    }
    if (err.response && err.response.data) {
      return JSON.stringify(err.response.data);
    }
    if (err.message) {
      return err.message;
    }
    if (typeof err === "string") {
      return err;
    }
    return err.toString();
  }
}
