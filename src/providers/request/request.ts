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
  | "deleteAccount";
export type Method = "get" | "post" | "delete";
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
    url: "/user/handshake"
  },
  qUser: {
    method: "get",
    url: "/user/q/"
  },
  deleteAccount: {
    method: "delete",
    url: "/user"
  }
};

@Injectable()
export class RequestProvider {
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
        request = await this.delete(endpoint, dt);
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
  public async get(endpoint: Endpoint, data?: any, appendToURL?: string) {
    const endP = _endpoints[endpoint].url + (appendToURL || "");
    return this._axiosInstance.get(endP + (data ? qs.stringify(data) : ""));
  }

  /**
   * Performs a POST request on the back-end API with the given data, if any.
   */
  public async post(endpoint: Endpoint, data?: any, appendToURL?: string) {
    const endP = _endpoints[endpoint].url + (appendToURL || "");
    return this._axiosInstance.post(endP, data);
  }

  /**
   * Performs a DELETE request on the back-end API with the given data, if any.
   */
  public async delete(endpoint: Endpoint, data?: any) {
    const endP = _endpoints[endpoint].url;
    return this._axiosInstance.delete(endP + "?d=" + data || "");
  }
}
