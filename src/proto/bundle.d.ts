import * as $protobuf from "protobufjs";
/** Namespace protos. */
export namespace protos {

    /** Properties of an AccountSignUp. */
    interface IAccountSignUp {

        /** AccountSignUp username */
        username?: (string|null);

        /** AccountSignUp pubK */
        pubK?: (string|null);

        /** AccountSignUp fcmToken */
        fcmToken?: (string|null);
    }

    /** Represents an AccountSignUp. */
    class AccountSignUp implements IAccountSignUp {

        /**
         * Constructs a new AccountSignUp.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IAccountSignUp);

        /** AccountSignUp username. */
        public username: string;

        /** AccountSignUp pubK. */
        public pubK: string;

        /** AccountSignUp fcmToken. */
        public fcmToken: string;

        /**
         * Creates a new AccountSignUp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountSignUp instance
         */
        public static create(properties?: protos.IAccountSignUp): protos.AccountSignUp;

        /**
         * Encodes the specified AccountSignUp message. Does not implicitly {@link protos.AccountSignUp.verify|verify} messages.
         * @param message AccountSignUp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IAccountSignUp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountSignUp message, length delimited. Does not implicitly {@link protos.AccountSignUp.verify|verify} messages.
         * @param message AccountSignUp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IAccountSignUp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountSignUp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountSignUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.AccountSignUp;

        /**
         * Decodes an AccountSignUp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountSignUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.AccountSignUp;

        /**
         * Verifies an AccountSignUp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountSignUp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountSignUp
         */
        public static fromObject(object: { [k: string]: any }): protos.AccountSignUp;

        /**
         * Creates a plain object from an AccountSignUp message. Also converts values to other types if specified.
         * @param message AccountSignUp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.AccountSignUp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountSignUp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerResponse. */
    interface IServerResponse {

        /** ServerResponse status */
        status?: (protos.ServerResponse.Status|null);

        /** ServerResponse statusCode */
        statusCode?: (number|null);

        /** ServerResponse message */
        message?: (string|null);
    }

    /** Represents a ServerResponse. */
    class ServerResponse implements IServerResponse {

        /**
         * Constructs a new ServerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IServerResponse);

        /** ServerResponse status. */
        public status: protos.ServerResponse.Status;

        /** ServerResponse statusCode. */
        public statusCode: number;

        /** ServerResponse message. */
        public message: string;

        /**
         * Creates a new ServerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerResponse instance
         */
        public static create(properties?: protos.IServerResponse): protos.ServerResponse;

        /**
         * Encodes the specified ServerResponse message. Does not implicitly {@link protos.ServerResponse.verify|verify} messages.
         * @param message ServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerResponse message, length delimited. Does not implicitly {@link protos.ServerResponse.verify|verify} messages.
         * @param message ServerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IServerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.ServerResponse;

        /**
         * Decodes a ServerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.ServerResponse;

        /**
         * Verifies a ServerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerResponse
         */
        public static fromObject(object: { [k: string]: any }): protos.ServerResponse;

        /**
         * Creates a plain object from a ServerResponse message. Also converts values to other types if specified.
         * @param message ServerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.ServerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ServerResponse {

        /** Status enum. */
        enum Status {
            Ok = 0,
            ERROR = 1
        }
    }

    /** Properties of a DeviceRequest. */
    interface IDeviceRequest {

        /** DeviceRequest type */
        type?: (protos.DeviceRequest.Type|null);

        /** DeviceRequest username */
        username?: (string|null);

        /** DeviceRequest paylod */
        paylod?: (string|null);

        /** DeviceRequest nonce */
        nonce?: (string|null);
    }

    /** Represents a DeviceRequest. */
    class DeviceRequest implements IDeviceRequest {

        /**
         * Constructs a new DeviceRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IDeviceRequest);

        /** DeviceRequest type. */
        public type: protos.DeviceRequest.Type;

        /** DeviceRequest username. */
        public username: string;

        /** DeviceRequest paylod. */
        public paylod: string;

        /** DeviceRequest nonce. */
        public nonce: string;

        /**
         * Creates a new DeviceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeviceRequest instance
         */
        public static create(properties?: protos.IDeviceRequest): protos.DeviceRequest;

        /**
         * Encodes the specified DeviceRequest message. Does not implicitly {@link protos.DeviceRequest.verify|verify} messages.
         * @param message DeviceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeviceRequest message, length delimited. Does not implicitly {@link protos.DeviceRequest.verify|verify} messages.
         * @param message DeviceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IDeviceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeviceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeviceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.DeviceRequest;

        /**
         * Decodes a DeviceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeviceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.DeviceRequest;

        /**
         * Verifies a DeviceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeviceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeviceRequest
         */
        public static fromObject(object: { [k: string]: any }): protos.DeviceRequest;

        /**
         * Creates a plain object from a DeviceRequest message. Also converts values to other types if specified.
         * @param message DeviceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.DeviceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeviceRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace DeviceRequest {

        /** Type enum. */
        enum Type {
            Handshake = 0
        }
    }
}
