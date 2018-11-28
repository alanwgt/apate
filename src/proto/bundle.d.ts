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

    /** Properties of a UserModel. */
    interface IUserModel {

        /** UserModel username */
        username?: (string|null);

        /** UserModel pubK */
        pubK?: (string|null);
    }

    /** Represents a UserModel. */
    class UserModel implements IUserModel {

        /**
         * Constructs a new UserModel.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IUserModel);

        /** UserModel username. */
        public username: string;

        /** UserModel pubK. */
        public pubK: string;

        /**
         * Creates a new UserModel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserModel instance
         */
        public static create(properties?: protos.IUserModel): protos.UserModel;

        /**
         * Encodes the specified UserModel message. Does not implicitly {@link protos.UserModel.verify|verify} messages.
         * @param message UserModel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IUserModel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserModel message, length delimited. Does not implicitly {@link protos.UserModel.verify|verify} messages.
         * @param message UserModel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IUserModel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserModel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.UserModel;

        /**
         * Decodes a UserModel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.UserModel;

        /**
         * Verifies a UserModel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserModel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserModel
         */
        public static fromObject(object: { [k: string]: any }): protos.UserModel;

        /**
         * Creates a plain object from a UserModel message. Also converts values to other types if specified.
         * @param message UserModel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.UserModel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserModel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FriendRequest. */
    interface IFriendRequest {

        /** FriendRequest username */
        username?: (string|null);

        /** FriendRequest pubK */
        pubK?: (string|null);

        /** FriendRequest timestamp */
        timestamp?: (number|Long|null);
    }

    /** Represents a FriendRequest. */
    class FriendRequest implements IFriendRequest {

        /**
         * Constructs a new FriendRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IFriendRequest);

        /** FriendRequest username. */
        public username: string;

        /** FriendRequest pubK. */
        public pubK: string;

        /** FriendRequest timestamp. */
        public timestamp: (number|Long);

        /**
         * Creates a new FriendRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FriendRequest instance
         */
        public static create(properties?: protos.IFriendRequest): protos.FriendRequest;

        /**
         * Encodes the specified FriendRequest message. Does not implicitly {@link protos.FriendRequest.verify|verify} messages.
         * @param message FriendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IFriendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FriendRequest message, length delimited. Does not implicitly {@link protos.FriendRequest.verify|verify} messages.
         * @param message FriendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IFriendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.FriendRequest;

        /**
         * Decodes a FriendRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.FriendRequest;

        /**
         * Verifies a FriendRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FriendRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FriendRequest
         */
        public static fromObject(object: { [k: string]: any }): protos.FriendRequest;

        /**
         * Creates a plain object from a FriendRequest message. Also converts values to other types if specified.
         * @param message FriendRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.FriendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FriendRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message messageId */
        messageId?: (number|Long|null);

        /** Message from */
        from?: (string|null);

        /** Message to */
        to?: (string|null);

        /** Message timestamp */
        timestamp?: (number|Long|null);

        /** Message deletable */
        deletable?: (boolean|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IMessage);

        /** Message messageId. */
        public messageId: (number|Long);

        /** Message from. */
        public from: string;

        /** Message to. */
        public to: string;

        /** Message timestamp. */
        public timestamp: (number|Long);

        /** Message deletable. */
        public deletable: boolean;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: protos.IMessage): protos.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link protos.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protos.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): protos.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MessageBody. */
    interface IMessageBody {

        /** MessageBody messageId */
        messageId?: (number|Long|null);

        /** MessageBody body */
        body?: (string|null);

        /** MessageBody nonce */
        nonce?: (string|null);

        /** MessageBody type */
        type?: (protos.MessageBody.Type|null);
    }

    /** Represents a MessageBody. */
    class MessageBody implements IMessageBody {

        /**
         * Constructs a new MessageBody.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IMessageBody);

        /** MessageBody messageId. */
        public messageId: (number|Long);

        /** MessageBody body. */
        public body: string;

        /** MessageBody nonce. */
        public nonce: string;

        /** MessageBody type. */
        public type: protos.MessageBody.Type;

        /**
         * Creates a new MessageBody instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessageBody instance
         */
        public static create(properties?: protos.IMessageBody): protos.MessageBody;

        /**
         * Encodes the specified MessageBody message. Does not implicitly {@link protos.MessageBody.verify|verify} messages.
         * @param message MessageBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IMessageBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessageBody message, length delimited. Does not implicitly {@link protos.MessageBody.verify|verify} messages.
         * @param message MessageBody message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IMessageBody, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageBody message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessageBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.MessageBody;

        /**
         * Decodes a MessageBody message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessageBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.MessageBody;

        /**
         * Verifies a MessageBody message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessageBody message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessageBody
         */
        public static fromObject(object: { [k: string]: any }): protos.MessageBody;

        /**
         * Creates a plain object from a MessageBody message. Also converts values to other types if specified.
         * @param message MessageBody
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.MessageBody, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessageBody to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace MessageBody {

        /** Type enum. */
        enum Type {
            Text = 0,
            Image = 1
        }
    }

    /** Properties of a MessagesContainer. */
    interface IMessagesContainer {

        /** MessagesContainer messages */
        messages?: (protos.IMessageBody[]|null);
    }

    /** Represents a MessagesContainer. */
    class MessagesContainer implements IMessagesContainer {

        /**
         * Constructs a new MessagesContainer.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IMessagesContainer);

        /** MessagesContainer messages. */
        public messages: protos.IMessageBody[];

        /**
         * Creates a new MessagesContainer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MessagesContainer instance
         */
        public static create(properties?: protos.IMessagesContainer): protos.MessagesContainer;

        /**
         * Encodes the specified MessagesContainer message. Does not implicitly {@link protos.MessagesContainer.verify|verify} messages.
         * @param message MessagesContainer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IMessagesContainer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MessagesContainer message, length delimited. Does not implicitly {@link protos.MessagesContainer.verify|verify} messages.
         * @param message MessagesContainer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IMessagesContainer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessagesContainer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MessagesContainer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.MessagesContainer;

        /**
         * Decodes a MessagesContainer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MessagesContainer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.MessagesContainer;

        /**
         * Verifies a MessagesContainer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MessagesContainer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MessagesContainer
         */
        public static fromObject(object: { [k: string]: any }): protos.MessagesContainer;

        /**
         * Creates a plain object from a MessagesContainer message. Also converts values to other types if specified.
         * @param message MessagesContainer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.MessagesContainer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MessagesContainer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AccountHandshake. */
    interface IAccountHandshake {

        /** AccountHandshake contacts */
        contacts?: (protos.IUserModel[]|null);

        /** AccountHandshake friendRequests */
        friendRequests?: (protos.IFriendRequest[]|null);

        /** AccountHandshake newMessages */
        newMessages?: (protos.IMessage[]|null);

        /** AccountHandshake blockedUsers */
        blockedUsers?: (protos.IUserModel[]|null);

        /** AccountHandshake hasRecoveryKey */
        hasRecoveryKey?: (boolean|null);
    }

    /** Represents an AccountHandshake. */
    class AccountHandshake implements IAccountHandshake {

        /**
         * Constructs a new AccountHandshake.
         * @param [properties] Properties to set
         */
        constructor(properties?: protos.IAccountHandshake);

        /** AccountHandshake contacts. */
        public contacts: protos.IUserModel[];

        /** AccountHandshake friendRequests. */
        public friendRequests: protos.IFriendRequest[];

        /** AccountHandshake newMessages. */
        public newMessages: protos.IMessage[];

        /** AccountHandshake blockedUsers. */
        public blockedUsers: protos.IUserModel[];

        /** AccountHandshake hasRecoveryKey. */
        public hasRecoveryKey: boolean;

        /**
         * Creates a new AccountHandshake instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AccountHandshake instance
         */
        public static create(properties?: protos.IAccountHandshake): protos.AccountHandshake;

        /**
         * Encodes the specified AccountHandshake message. Does not implicitly {@link protos.AccountHandshake.verify|verify} messages.
         * @param message AccountHandshake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: protos.IAccountHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AccountHandshake message, length delimited. Does not implicitly {@link protos.AccountHandshake.verify|verify} messages.
         * @param message AccountHandshake message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: protos.IAccountHandshake, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AccountHandshake message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AccountHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.AccountHandshake;

        /**
         * Decodes an AccountHandshake message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AccountHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.AccountHandshake;

        /**
         * Verifies an AccountHandshake message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AccountHandshake message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AccountHandshake
         */
        public static fromObject(object: { [k: string]: any }): protos.AccountHandshake;

        /**
         * Creates a plain object from an AccountHandshake message. Also converts values to other types if specified.
         * @param message AccountHandshake
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: protos.AccountHandshake, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AccountHandshake to JSON.
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
