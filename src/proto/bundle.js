/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.protos = (function() {

    /**
     * Namespace protos.
     * @exports protos
     * @namespace
     */
    var protos = {};

    protos.AccountSignUp = (function() {

        /**
         * Properties of an AccountSignUp.
         * @memberof protos
         * @interface IAccountSignUp
         * @property {string|null} [username] AccountSignUp username
         * @property {string|null} [pubK] AccountSignUp pubK
         * @property {string|null} [fcmToken] AccountSignUp fcmToken
         */

        /**
         * Constructs a new AccountSignUp.
         * @memberof protos
         * @classdesc Represents an AccountSignUp.
         * @implements IAccountSignUp
         * @constructor
         * @param {protos.IAccountSignUp=} [properties] Properties to set
         */
        function AccountSignUp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountSignUp username.
         * @member {string} username
         * @memberof protos.AccountSignUp
         * @instance
         */
        AccountSignUp.prototype.username = "";

        /**
         * AccountSignUp pubK.
         * @member {string} pubK
         * @memberof protos.AccountSignUp
         * @instance
         */
        AccountSignUp.prototype.pubK = "";

        /**
         * AccountSignUp fcmToken.
         * @member {string} fcmToken
         * @memberof protos.AccountSignUp
         * @instance
         */
        AccountSignUp.prototype.fcmToken = "";

        /**
         * Creates a new AccountSignUp instance using the specified properties.
         * @function create
         * @memberof protos.AccountSignUp
         * @static
         * @param {protos.IAccountSignUp=} [properties] Properties to set
         * @returns {protos.AccountSignUp} AccountSignUp instance
         */
        AccountSignUp.create = function create(properties) {
            return new AccountSignUp(properties);
        };

        /**
         * Encodes the specified AccountSignUp message. Does not implicitly {@link protos.AccountSignUp.verify|verify} messages.
         * @function encode
         * @memberof protos.AccountSignUp
         * @static
         * @param {protos.IAccountSignUp} message AccountSignUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountSignUp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.pubK != null && message.hasOwnProperty("pubK"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pubK);
            if (message.fcmToken != null && message.hasOwnProperty("fcmToken"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.fcmToken);
            return writer;
        };

        /**
         * Encodes the specified AccountSignUp message, length delimited. Does not implicitly {@link protos.AccountSignUp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.AccountSignUp
         * @static
         * @param {protos.IAccountSignUp} message AccountSignUp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountSignUp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountSignUp message from the specified reader or buffer.
         * @function decode
         * @memberof protos.AccountSignUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.AccountSignUp} AccountSignUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountSignUp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.AccountSignUp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.pubK = reader.string();
                    break;
                case 3:
                    message.fcmToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountSignUp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.AccountSignUp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.AccountSignUp} AccountSignUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountSignUp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountSignUp message.
         * @function verify
         * @memberof protos.AccountSignUp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountSignUp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.pubK != null && message.hasOwnProperty("pubK"))
                if (!$util.isString(message.pubK))
                    return "pubK: string expected";
            if (message.fcmToken != null && message.hasOwnProperty("fcmToken"))
                if (!$util.isString(message.fcmToken))
                    return "fcmToken: string expected";
            return null;
        };

        /**
         * Creates an AccountSignUp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.AccountSignUp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.AccountSignUp} AccountSignUp
         */
        AccountSignUp.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.AccountSignUp)
                return object;
            var message = new $root.protos.AccountSignUp();
            if (object.username != null)
                message.username = String(object.username);
            if (object.pubK != null)
                message.pubK = String(object.pubK);
            if (object.fcmToken != null)
                message.fcmToken = String(object.fcmToken);
            return message;
        };

        /**
         * Creates a plain object from an AccountSignUp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.AccountSignUp
         * @static
         * @param {protos.AccountSignUp} message AccountSignUp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountSignUp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.pubK = "";
                object.fcmToken = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.pubK != null && message.hasOwnProperty("pubK"))
                object.pubK = message.pubK;
            if (message.fcmToken != null && message.hasOwnProperty("fcmToken"))
                object.fcmToken = message.fcmToken;
            return object;
        };

        /**
         * Converts this AccountSignUp to JSON.
         * @function toJSON
         * @memberof protos.AccountSignUp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountSignUp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountSignUp;
    })();

    protos.UserModel = (function() {

        /**
         * Properties of a UserModel.
         * @memberof protos
         * @interface IUserModel
         * @property {string|null} [username] UserModel username
         * @property {string|null} [pubK] UserModel pubK
         */

        /**
         * Constructs a new UserModel.
         * @memberof protos
         * @classdesc Represents a UserModel.
         * @implements IUserModel
         * @constructor
         * @param {protos.IUserModel=} [properties] Properties to set
         */
        function UserModel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserModel username.
         * @member {string} username
         * @memberof protos.UserModel
         * @instance
         */
        UserModel.prototype.username = "";

        /**
         * UserModel pubK.
         * @member {string} pubK
         * @memberof protos.UserModel
         * @instance
         */
        UserModel.prototype.pubK = "";

        /**
         * Creates a new UserModel instance using the specified properties.
         * @function create
         * @memberof protos.UserModel
         * @static
         * @param {protos.IUserModel=} [properties] Properties to set
         * @returns {protos.UserModel} UserModel instance
         */
        UserModel.create = function create(properties) {
            return new UserModel(properties);
        };

        /**
         * Encodes the specified UserModel message. Does not implicitly {@link protos.UserModel.verify|verify} messages.
         * @function encode
         * @memberof protos.UserModel
         * @static
         * @param {protos.IUserModel} message UserModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserModel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.pubK != null && message.hasOwnProperty("pubK"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pubK);
            return writer;
        };

        /**
         * Encodes the specified UserModel message, length delimited. Does not implicitly {@link protos.UserModel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.UserModel
         * @static
         * @param {protos.IUserModel} message UserModel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserModel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserModel message from the specified reader or buffer.
         * @function decode
         * @memberof protos.UserModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.UserModel} UserModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserModel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.UserModel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.pubK = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserModel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.UserModel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.UserModel} UserModel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserModel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserModel message.
         * @function verify
         * @memberof protos.UserModel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserModel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.pubK != null && message.hasOwnProperty("pubK"))
                if (!$util.isString(message.pubK))
                    return "pubK: string expected";
            return null;
        };

        /**
         * Creates a UserModel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.UserModel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.UserModel} UserModel
         */
        UserModel.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.UserModel)
                return object;
            var message = new $root.protos.UserModel();
            if (object.username != null)
                message.username = String(object.username);
            if (object.pubK != null)
                message.pubK = String(object.pubK);
            return message;
        };

        /**
         * Creates a plain object from a UserModel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.UserModel
         * @static
         * @param {protos.UserModel} message UserModel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserModel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.pubK = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.pubK != null && message.hasOwnProperty("pubK"))
                object.pubK = message.pubK;
            return object;
        };

        /**
         * Converts this UserModel to JSON.
         * @function toJSON
         * @memberof protos.UserModel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserModel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserModel;
    })();

    protos.FriendRequest = (function() {

        /**
         * Properties of a FriendRequest.
         * @memberof protos
         * @interface IFriendRequest
         * @property {string|null} [username] FriendRequest username
         * @property {string|null} [pubK] FriendRequest pubK
         * @property {number|Long|null} [timestamp] FriendRequest timestamp
         */

        /**
         * Constructs a new FriendRequest.
         * @memberof protos
         * @classdesc Represents a FriendRequest.
         * @implements IFriendRequest
         * @constructor
         * @param {protos.IFriendRequest=} [properties] Properties to set
         */
        function FriendRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FriendRequest username.
         * @member {string} username
         * @memberof protos.FriendRequest
         * @instance
         */
        FriendRequest.prototype.username = "";

        /**
         * FriendRequest pubK.
         * @member {string} pubK
         * @memberof protos.FriendRequest
         * @instance
         */
        FriendRequest.prototype.pubK = "";

        /**
         * FriendRequest timestamp.
         * @member {number|Long} timestamp
         * @memberof protos.FriendRequest
         * @instance
         */
        FriendRequest.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new FriendRequest instance using the specified properties.
         * @function create
         * @memberof protos.FriendRequest
         * @static
         * @param {protos.IFriendRequest=} [properties] Properties to set
         * @returns {protos.FriendRequest} FriendRequest instance
         */
        FriendRequest.create = function create(properties) {
            return new FriendRequest(properties);
        };

        /**
         * Encodes the specified FriendRequest message. Does not implicitly {@link protos.FriendRequest.verify|verify} messages.
         * @function encode
         * @memberof protos.FriendRequest
         * @static
         * @param {protos.IFriendRequest} message FriendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.pubK != null && message.hasOwnProperty("pubK"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.pubK);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified FriendRequest message, length delimited. Does not implicitly {@link protos.FriendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.FriendRequest
         * @static
         * @param {protos.IFriendRequest} message FriendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FriendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FriendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protos.FriendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.FriendRequest} FriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.FriendRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.pubK = reader.string();
                    break;
                case 3:
                    message.timestamp = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FriendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.FriendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.FriendRequest} FriendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FriendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FriendRequest message.
         * @function verify
         * @memberof protos.FriendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FriendRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.pubK != null && message.hasOwnProperty("pubK"))
                if (!$util.isString(message.pubK))
                    return "pubK: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a FriendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.FriendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.FriendRequest} FriendRequest
         */
        FriendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.FriendRequest)
                return object;
            var message = new $root.protos.FriendRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.pubK != null)
                message.pubK = String(object.pubK);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a FriendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.FriendRequest
         * @static
         * @param {protos.FriendRequest} message FriendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FriendRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.pubK = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.pubK != null && message.hasOwnProperty("pubK"))
                object.pubK = message.pubK;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this FriendRequest to JSON.
         * @function toJSON
         * @memberof protos.FriendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FriendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FriendRequest;
    })();

    protos.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof protos
         * @interface IMessage
         * @property {number|Long|null} [messageId] Message messageId
         * @property {string|null} [from] Message from
         * @property {string|null} [to] Message to
         * @property {number|Long|null} [timestamp] Message timestamp
         * @property {boolean|null} [deletable] Message deletable
         */

        /**
         * Constructs a new Message.
         * @memberof protos
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {protos.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message messageId.
         * @member {number|Long} messageId
         * @memberof protos.Message
         * @instance
         */
        Message.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message from.
         * @member {string} from
         * @memberof protos.Message
         * @instance
         */
        Message.prototype.from = "";

        /**
         * Message to.
         * @member {string} to
         * @memberof protos.Message
         * @instance
         */
        Message.prototype.to = "";

        /**
         * Message timestamp.
         * @member {number|Long} timestamp
         * @memberof protos.Message
         * @instance
         */
        Message.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Message deletable.
         * @member {boolean} deletable
         * @memberof protos.Message
         * @instance
         */
        Message.prototype.deletable = false;

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof protos.Message
         * @static
         * @param {protos.IMessage=} [properties] Properties to set
         * @returns {protos.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link protos.Message.verify|verify} messages.
         * @function encode
         * @memberof protos.Message
         * @static
         * @param {protos.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.messageId);
            if (message.from != null && message.hasOwnProperty("from"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.from);
            if (message.to != null && message.hasOwnProperty("to"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.to);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.timestamp);
            if (message.deletable != null && message.hasOwnProperty("deletable"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.deletable);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link protos.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.Message
         * @static
         * @param {protos.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof protos.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageId = reader.int64();
                    break;
                case 2:
                    message.from = reader.string();
                    break;
                case 3:
                    message.to = reader.string();
                    break;
                case 4:
                    message.timestamp = reader.int64();
                    break;
                case 5:
                    message.deletable = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof protos.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isInteger(message.messageId) && !(message.messageId && $util.isInteger(message.messageId.low) && $util.isInteger(message.messageId.high)))
                    return "messageId: integer|Long expected";
            if (message.from != null && message.hasOwnProperty("from"))
                if (!$util.isString(message.from))
                    return "from: string expected";
            if (message.to != null && message.hasOwnProperty("to"))
                if (!$util.isString(message.to))
                    return "to: string expected";
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.deletable != null && message.hasOwnProperty("deletable"))
                if (typeof message.deletable !== "boolean")
                    return "deletable: boolean expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.Message)
                return object;
            var message = new $root.protos.Message();
            if (object.messageId != null)
                if ($util.Long)
                    (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = false;
                else if (typeof object.messageId === "string")
                    message.messageId = parseInt(object.messageId, 10);
                else if (typeof object.messageId === "number")
                    message.messageId = object.messageId;
                else if (typeof object.messageId === "object")
                    message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber();
            if (object.from != null)
                message.from = String(object.from);
            if (object.to != null)
                message.to = String(object.to);
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.deletable != null)
                message.deletable = Boolean(object.deletable);
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.Message
         * @static
         * @param {protos.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.messageId = options.longs === String ? "0" : 0;
                object.from = "";
                object.to = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                object.deletable = false;
            }
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (typeof message.messageId === "number")
                    object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                else
                    object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber() : message.messageId;
            if (message.from != null && message.hasOwnProperty("from"))
                object.from = message.from;
            if (message.to != null && message.hasOwnProperty("to"))
                object.to = message.to;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            if (message.deletable != null && message.hasOwnProperty("deletable"))
                object.deletable = message.deletable;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof protos.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    protos.MessageBody = (function() {

        /**
         * Properties of a MessageBody.
         * @memberof protos
         * @interface IMessageBody
         * @property {number|Long|null} [messageId] MessageBody messageId
         * @property {string|null} [body] MessageBody body
         * @property {string|null} [nonce] MessageBody nonce
         * @property {protos.MessageBody.Type|null} [type] MessageBody type
         */

        /**
         * Constructs a new MessageBody.
         * @memberof protos
         * @classdesc Represents a MessageBody.
         * @implements IMessageBody
         * @constructor
         * @param {protos.IMessageBody=} [properties] Properties to set
         */
        function MessageBody(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageBody messageId.
         * @member {number|Long} messageId
         * @memberof protos.MessageBody
         * @instance
         */
        MessageBody.prototype.messageId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MessageBody body.
         * @member {string} body
         * @memberof protos.MessageBody
         * @instance
         */
        MessageBody.prototype.body = "";

        /**
         * MessageBody nonce.
         * @member {string} nonce
         * @memberof protos.MessageBody
         * @instance
         */
        MessageBody.prototype.nonce = "";

        /**
         * MessageBody type.
         * @member {protos.MessageBody.Type} type
         * @memberof protos.MessageBody
         * @instance
         */
        MessageBody.prototype.type = 0;

        /**
         * Creates a new MessageBody instance using the specified properties.
         * @function create
         * @memberof protos.MessageBody
         * @static
         * @param {protos.IMessageBody=} [properties] Properties to set
         * @returns {protos.MessageBody} MessageBody instance
         */
        MessageBody.create = function create(properties) {
            return new MessageBody(properties);
        };

        /**
         * Encodes the specified MessageBody message. Does not implicitly {@link protos.MessageBody.verify|verify} messages.
         * @function encode
         * @memberof protos.MessageBody
         * @static
         * @param {protos.IMessageBody} message MessageBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageBody.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.messageId);
            if (message.body != null && message.hasOwnProperty("body"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.body);
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nonce);
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.type);
            return writer;
        };

        /**
         * Encodes the specified MessageBody message, length delimited. Does not implicitly {@link protos.MessageBody.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.MessageBody
         * @static
         * @param {protos.IMessageBody} message MessageBody message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageBody.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageBody message from the specified reader or buffer.
         * @function decode
         * @memberof protos.MessageBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.MessageBody} MessageBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageBody.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.MessageBody();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageId = reader.int64();
                    break;
                case 2:
                    message.body = reader.string();
                    break;
                case 3:
                    message.nonce = reader.string();
                    break;
                case 4:
                    message.type = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageBody message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.MessageBody
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.MessageBody} MessageBody
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageBody.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageBody message.
         * @function verify
         * @memberof protos.MessageBody
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageBody.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (!$util.isInteger(message.messageId) && !(message.messageId && $util.isInteger(message.messageId.low) && $util.isInteger(message.messageId.high)))
                    return "messageId: integer|Long expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!$util.isString(message.body))
                    return "body: string expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isString(message.nonce))
                    return "nonce: string expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a MessageBody message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.MessageBody
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.MessageBody} MessageBody
         */
        MessageBody.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.MessageBody)
                return object;
            var message = new $root.protos.MessageBody();
            if (object.messageId != null)
                if ($util.Long)
                    (message.messageId = $util.Long.fromValue(object.messageId)).unsigned = false;
                else if (typeof object.messageId === "string")
                    message.messageId = parseInt(object.messageId, 10);
                else if (typeof object.messageId === "number")
                    message.messageId = object.messageId;
                else if (typeof object.messageId === "object")
                    message.messageId = new $util.LongBits(object.messageId.low >>> 0, object.messageId.high >>> 0).toNumber();
            if (object.body != null)
                message.body = String(object.body);
            if (object.nonce != null)
                message.nonce = String(object.nonce);
            switch (object.type) {
            case "Text":
            case 0:
                message.type = 0;
                break;
            case "Image":
            case 1:
                message.type = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageBody message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.MessageBody
         * @static
         * @param {protos.MessageBody} message MessageBody
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageBody.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.messageId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.messageId = options.longs === String ? "0" : 0;
                object.body = "";
                object.nonce = "";
                object.type = options.enums === String ? "Text" : 0;
            }
            if (message.messageId != null && message.hasOwnProperty("messageId"))
                if (typeof message.messageId === "number")
                    object.messageId = options.longs === String ? String(message.messageId) : message.messageId;
                else
                    object.messageId = options.longs === String ? $util.Long.prototype.toString.call(message.messageId) : options.longs === Number ? new $util.LongBits(message.messageId.low >>> 0, message.messageId.high >>> 0).toNumber() : message.messageId;
            if (message.body != null && message.hasOwnProperty("body"))
                object.body = message.body;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.protos.MessageBody.Type[message.type] : message.type;
            return object;
        };

        /**
         * Converts this MessageBody to JSON.
         * @function toJSON
         * @memberof protos.MessageBody
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageBody.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name protos.MessageBody.Type
         * @enum {string}
         * @property {number} Text=0 Text value
         * @property {number} Image=1 Image value
         */
        MessageBody.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Text"] = 0;
            values[valuesById[1] = "Image"] = 1;
            return values;
        })();

        return MessageBody;
    })();

    protos.MessagesContainer = (function() {

        /**
         * Properties of a MessagesContainer.
         * @memberof protos
         * @interface IMessagesContainer
         * @property {Array.<protos.IMessageBody>|null} [messages] MessagesContainer messages
         */

        /**
         * Constructs a new MessagesContainer.
         * @memberof protos
         * @classdesc Represents a MessagesContainer.
         * @implements IMessagesContainer
         * @constructor
         * @param {protos.IMessagesContainer=} [properties] Properties to set
         */
        function MessagesContainer(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessagesContainer messages.
         * @member {Array.<protos.IMessageBody>} messages
         * @memberof protos.MessagesContainer
         * @instance
         */
        MessagesContainer.prototype.messages = $util.emptyArray;

        /**
         * Creates a new MessagesContainer instance using the specified properties.
         * @function create
         * @memberof protos.MessagesContainer
         * @static
         * @param {protos.IMessagesContainer=} [properties] Properties to set
         * @returns {protos.MessagesContainer} MessagesContainer instance
         */
        MessagesContainer.create = function create(properties) {
            return new MessagesContainer(properties);
        };

        /**
         * Encodes the specified MessagesContainer message. Does not implicitly {@link protos.MessagesContainer.verify|verify} messages.
         * @function encode
         * @memberof protos.MessagesContainer
         * @static
         * @param {protos.IMessagesContainer} message MessagesContainer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessagesContainer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.protos.MessageBody.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MessagesContainer message, length delimited. Does not implicitly {@link protos.MessagesContainer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.MessagesContainer
         * @static
         * @param {protos.IMessagesContainer} message MessagesContainer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessagesContainer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessagesContainer message from the specified reader or buffer.
         * @function decode
         * @memberof protos.MessagesContainer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.MessagesContainer} MessagesContainer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessagesContainer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.MessagesContainer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.protos.MessageBody.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessagesContainer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.MessagesContainer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.MessagesContainer} MessagesContainer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessagesContainer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessagesContainer message.
         * @function verify
         * @memberof protos.MessagesContainer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessagesContainer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.protos.MessageBody.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MessagesContainer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.MessagesContainer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.MessagesContainer} MessagesContainer
         */
        MessagesContainer.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.MessagesContainer)
                return object;
            var message = new $root.protos.MessagesContainer();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".protos.MessagesContainer.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".protos.MessagesContainer.messages: object expected");
                    message.messages[i] = $root.protos.MessageBody.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MessagesContainer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.MessagesContainer
         * @static
         * @param {protos.MessagesContainer} message MessagesContainer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessagesContainer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.protos.MessageBody.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this MessagesContainer to JSON.
         * @function toJSON
         * @memberof protos.MessagesContainer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessagesContainer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessagesContainer;
    })();

    protos.MessageRefresh = (function() {

        /**
         * Properties of a MessageRefresh.
         * @memberof protos
         * @interface IMessageRefresh
         * @property {Array.<protos.IMessage>|null} [messages] MessageRefresh messages
         */

        /**
         * Constructs a new MessageRefresh.
         * @memberof protos
         * @classdesc Represents a MessageRefresh.
         * @implements IMessageRefresh
         * @constructor
         * @param {protos.IMessageRefresh=} [properties] Properties to set
         */
        function MessageRefresh(properties) {
            this.messages = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageRefresh messages.
         * @member {Array.<protos.IMessage>} messages
         * @memberof protos.MessageRefresh
         * @instance
         */
        MessageRefresh.prototype.messages = $util.emptyArray;

        /**
         * Creates a new MessageRefresh instance using the specified properties.
         * @function create
         * @memberof protos.MessageRefresh
         * @static
         * @param {protos.IMessageRefresh=} [properties] Properties to set
         * @returns {protos.MessageRefresh} MessageRefresh instance
         */
        MessageRefresh.create = function create(properties) {
            return new MessageRefresh(properties);
        };

        /**
         * Encodes the specified MessageRefresh message. Does not implicitly {@link protos.MessageRefresh.verify|verify} messages.
         * @function encode
         * @memberof protos.MessageRefresh
         * @static
         * @param {protos.IMessageRefresh} message MessageRefresh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRefresh.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messages != null && message.messages.length)
                for (var i = 0; i < message.messages.length; ++i)
                    $root.protos.Message.encode(message.messages[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MessageRefresh message, length delimited. Does not implicitly {@link protos.MessageRefresh.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.MessageRefresh
         * @static
         * @param {protos.IMessageRefresh} message MessageRefresh message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageRefresh.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageRefresh message from the specified reader or buffer.
         * @function decode
         * @memberof protos.MessageRefresh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.MessageRefresh} MessageRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRefresh.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.MessageRefresh();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.messages && message.messages.length))
                        message.messages = [];
                    message.messages.push($root.protos.Message.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageRefresh message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.MessageRefresh
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.MessageRefresh} MessageRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageRefresh.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageRefresh message.
         * @function verify
         * @memberof protos.MessageRefresh
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageRefresh.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.messages != null && message.hasOwnProperty("messages")) {
                if (!Array.isArray(message.messages))
                    return "messages: array expected";
                for (var i = 0; i < message.messages.length; ++i) {
                    var error = $root.protos.Message.verify(message.messages[i]);
                    if (error)
                        return "messages." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MessageRefresh message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.MessageRefresh
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.MessageRefresh} MessageRefresh
         */
        MessageRefresh.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.MessageRefresh)
                return object;
            var message = new $root.protos.MessageRefresh();
            if (object.messages) {
                if (!Array.isArray(object.messages))
                    throw TypeError(".protos.MessageRefresh.messages: array expected");
                message.messages = [];
                for (var i = 0; i < object.messages.length; ++i) {
                    if (typeof object.messages[i] !== "object")
                        throw TypeError(".protos.MessageRefresh.messages: object expected");
                    message.messages[i] = $root.protos.Message.fromObject(object.messages[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MessageRefresh message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.MessageRefresh
         * @static
         * @param {protos.MessageRefresh} message MessageRefresh
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageRefresh.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.messages = [];
            if (message.messages && message.messages.length) {
                object.messages = [];
                for (var j = 0; j < message.messages.length; ++j)
                    object.messages[j] = $root.protos.Message.toObject(message.messages[j], options);
            }
            return object;
        };

        /**
         * Converts this MessageRefresh to JSON.
         * @function toJSON
         * @memberof protos.MessageRefresh
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageRefresh.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MessageRefresh;
    })();

    protos.AccountHandshake = (function() {

        /**
         * Properties of an AccountHandshake.
         * @memberof protos
         * @interface IAccountHandshake
         * @property {Array.<protos.IUserModel>|null} [contacts] AccountHandshake contacts
         * @property {Array.<protos.IFriendRequest>|null} [friendRequests] AccountHandshake friendRequests
         * @property {Array.<protos.IMessage>|null} [newMessages] AccountHandshake newMessages
         * @property {Array.<protos.IUserModel>|null} [blockedUsers] AccountHandshake blockedUsers
         * @property {boolean|null} [hasRecoveryKey] AccountHandshake hasRecoveryKey
         */

        /**
         * Constructs a new AccountHandshake.
         * @memberof protos
         * @classdesc Represents an AccountHandshake.
         * @implements IAccountHandshake
         * @constructor
         * @param {protos.IAccountHandshake=} [properties] Properties to set
         */
        function AccountHandshake(properties) {
            this.contacts = [];
            this.friendRequests = [];
            this.newMessages = [];
            this.blockedUsers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AccountHandshake contacts.
         * @member {Array.<protos.IUserModel>} contacts
         * @memberof protos.AccountHandshake
         * @instance
         */
        AccountHandshake.prototype.contacts = $util.emptyArray;

        /**
         * AccountHandshake friendRequests.
         * @member {Array.<protos.IFriendRequest>} friendRequests
         * @memberof protos.AccountHandshake
         * @instance
         */
        AccountHandshake.prototype.friendRequests = $util.emptyArray;

        /**
         * AccountHandshake newMessages.
         * @member {Array.<protos.IMessage>} newMessages
         * @memberof protos.AccountHandshake
         * @instance
         */
        AccountHandshake.prototype.newMessages = $util.emptyArray;

        /**
         * AccountHandshake blockedUsers.
         * @member {Array.<protos.IUserModel>} blockedUsers
         * @memberof protos.AccountHandshake
         * @instance
         */
        AccountHandshake.prototype.blockedUsers = $util.emptyArray;

        /**
         * AccountHandshake hasRecoveryKey.
         * @member {boolean} hasRecoveryKey
         * @memberof protos.AccountHandshake
         * @instance
         */
        AccountHandshake.prototype.hasRecoveryKey = false;

        /**
         * Creates a new AccountHandshake instance using the specified properties.
         * @function create
         * @memberof protos.AccountHandshake
         * @static
         * @param {protos.IAccountHandshake=} [properties] Properties to set
         * @returns {protos.AccountHandshake} AccountHandshake instance
         */
        AccountHandshake.create = function create(properties) {
            return new AccountHandshake(properties);
        };

        /**
         * Encodes the specified AccountHandshake message. Does not implicitly {@link protos.AccountHandshake.verify|verify} messages.
         * @function encode
         * @memberof protos.AccountHandshake
         * @static
         * @param {protos.IAccountHandshake} message AccountHandshake message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountHandshake.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.contacts != null && message.contacts.length)
                for (var i = 0; i < message.contacts.length; ++i)
                    $root.protos.UserModel.encode(message.contacts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.friendRequests != null && message.friendRequests.length)
                for (var i = 0; i < message.friendRequests.length; ++i)
                    $root.protos.FriendRequest.encode(message.friendRequests[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.newMessages != null && message.newMessages.length)
                for (var i = 0; i < message.newMessages.length; ++i)
                    $root.protos.Message.encode(message.newMessages[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.blockedUsers != null && message.blockedUsers.length)
                for (var i = 0; i < message.blockedUsers.length; ++i)
                    $root.protos.UserModel.encode(message.blockedUsers[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.hasRecoveryKey != null && message.hasOwnProperty("hasRecoveryKey"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.hasRecoveryKey);
            return writer;
        };

        /**
         * Encodes the specified AccountHandshake message, length delimited. Does not implicitly {@link protos.AccountHandshake.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.AccountHandshake
         * @static
         * @param {protos.IAccountHandshake} message AccountHandshake message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AccountHandshake.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AccountHandshake message from the specified reader or buffer.
         * @function decode
         * @memberof protos.AccountHandshake
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.AccountHandshake} AccountHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountHandshake.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.AccountHandshake();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.contacts && message.contacts.length))
                        message.contacts = [];
                    message.contacts.push($root.protos.UserModel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.friendRequests && message.friendRequests.length))
                        message.friendRequests = [];
                    message.friendRequests.push($root.protos.FriendRequest.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.newMessages && message.newMessages.length))
                        message.newMessages = [];
                    message.newMessages.push($root.protos.Message.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.blockedUsers && message.blockedUsers.length))
                        message.blockedUsers = [];
                    message.blockedUsers.push($root.protos.UserModel.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.hasRecoveryKey = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AccountHandshake message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.AccountHandshake
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.AccountHandshake} AccountHandshake
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AccountHandshake.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AccountHandshake message.
         * @function verify
         * @memberof protos.AccountHandshake
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AccountHandshake.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.contacts != null && message.hasOwnProperty("contacts")) {
                if (!Array.isArray(message.contacts))
                    return "contacts: array expected";
                for (var i = 0; i < message.contacts.length; ++i) {
                    var error = $root.protos.UserModel.verify(message.contacts[i]);
                    if (error)
                        return "contacts." + error;
                }
            }
            if (message.friendRequests != null && message.hasOwnProperty("friendRequests")) {
                if (!Array.isArray(message.friendRequests))
                    return "friendRequests: array expected";
                for (var i = 0; i < message.friendRequests.length; ++i) {
                    var error = $root.protos.FriendRequest.verify(message.friendRequests[i]);
                    if (error)
                        return "friendRequests." + error;
                }
            }
            if (message.newMessages != null && message.hasOwnProperty("newMessages")) {
                if (!Array.isArray(message.newMessages))
                    return "newMessages: array expected";
                for (var i = 0; i < message.newMessages.length; ++i) {
                    var error = $root.protos.Message.verify(message.newMessages[i]);
                    if (error)
                        return "newMessages." + error;
                }
            }
            if (message.blockedUsers != null && message.hasOwnProperty("blockedUsers")) {
                if (!Array.isArray(message.blockedUsers))
                    return "blockedUsers: array expected";
                for (var i = 0; i < message.blockedUsers.length; ++i) {
                    var error = $root.protos.UserModel.verify(message.blockedUsers[i]);
                    if (error)
                        return "blockedUsers." + error;
                }
            }
            if (message.hasRecoveryKey != null && message.hasOwnProperty("hasRecoveryKey"))
                if (typeof message.hasRecoveryKey !== "boolean")
                    return "hasRecoveryKey: boolean expected";
            return null;
        };

        /**
         * Creates an AccountHandshake message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.AccountHandshake
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.AccountHandshake} AccountHandshake
         */
        AccountHandshake.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.AccountHandshake)
                return object;
            var message = new $root.protos.AccountHandshake();
            if (object.contacts) {
                if (!Array.isArray(object.contacts))
                    throw TypeError(".protos.AccountHandshake.contacts: array expected");
                message.contacts = [];
                for (var i = 0; i < object.contacts.length; ++i) {
                    if (typeof object.contacts[i] !== "object")
                        throw TypeError(".protos.AccountHandshake.contacts: object expected");
                    message.contacts[i] = $root.protos.UserModel.fromObject(object.contacts[i]);
                }
            }
            if (object.friendRequests) {
                if (!Array.isArray(object.friendRequests))
                    throw TypeError(".protos.AccountHandshake.friendRequests: array expected");
                message.friendRequests = [];
                for (var i = 0; i < object.friendRequests.length; ++i) {
                    if (typeof object.friendRequests[i] !== "object")
                        throw TypeError(".protos.AccountHandshake.friendRequests: object expected");
                    message.friendRequests[i] = $root.protos.FriendRequest.fromObject(object.friendRequests[i]);
                }
            }
            if (object.newMessages) {
                if (!Array.isArray(object.newMessages))
                    throw TypeError(".protos.AccountHandshake.newMessages: array expected");
                message.newMessages = [];
                for (var i = 0; i < object.newMessages.length; ++i) {
                    if (typeof object.newMessages[i] !== "object")
                        throw TypeError(".protos.AccountHandshake.newMessages: object expected");
                    message.newMessages[i] = $root.protos.Message.fromObject(object.newMessages[i]);
                }
            }
            if (object.blockedUsers) {
                if (!Array.isArray(object.blockedUsers))
                    throw TypeError(".protos.AccountHandshake.blockedUsers: array expected");
                message.blockedUsers = [];
                for (var i = 0; i < object.blockedUsers.length; ++i) {
                    if (typeof object.blockedUsers[i] !== "object")
                        throw TypeError(".protos.AccountHandshake.blockedUsers: object expected");
                    message.blockedUsers[i] = $root.protos.UserModel.fromObject(object.blockedUsers[i]);
                }
            }
            if (object.hasRecoveryKey != null)
                message.hasRecoveryKey = Boolean(object.hasRecoveryKey);
            return message;
        };

        /**
         * Creates a plain object from an AccountHandshake message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.AccountHandshake
         * @static
         * @param {protos.AccountHandshake} message AccountHandshake
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AccountHandshake.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.contacts = [];
                object.friendRequests = [];
                object.newMessages = [];
                object.blockedUsers = [];
            }
            if (options.defaults)
                object.hasRecoveryKey = false;
            if (message.contacts && message.contacts.length) {
                object.contacts = [];
                for (var j = 0; j < message.contacts.length; ++j)
                    object.contacts[j] = $root.protos.UserModel.toObject(message.contacts[j], options);
            }
            if (message.friendRequests && message.friendRequests.length) {
                object.friendRequests = [];
                for (var j = 0; j < message.friendRequests.length; ++j)
                    object.friendRequests[j] = $root.protos.FriendRequest.toObject(message.friendRequests[j], options);
            }
            if (message.newMessages && message.newMessages.length) {
                object.newMessages = [];
                for (var j = 0; j < message.newMessages.length; ++j)
                    object.newMessages[j] = $root.protos.Message.toObject(message.newMessages[j], options);
            }
            if (message.blockedUsers && message.blockedUsers.length) {
                object.blockedUsers = [];
                for (var j = 0; j < message.blockedUsers.length; ++j)
                    object.blockedUsers[j] = $root.protos.UserModel.toObject(message.blockedUsers[j], options);
            }
            if (message.hasRecoveryKey != null && message.hasOwnProperty("hasRecoveryKey"))
                object.hasRecoveryKey = message.hasRecoveryKey;
            return object;
        };

        /**
         * Converts this AccountHandshake to JSON.
         * @function toJSON
         * @memberof protos.AccountHandshake
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AccountHandshake.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AccountHandshake;
    })();

    protos.ServerResponse = (function() {

        /**
         * Properties of a ServerResponse.
         * @memberof protos
         * @interface IServerResponse
         * @property {protos.ServerResponse.Status|null} [status] ServerResponse status
         * @property {number|null} [statusCode] ServerResponse statusCode
         * @property {string|null} [message] ServerResponse message
         */

        /**
         * Constructs a new ServerResponse.
         * @memberof protos
         * @classdesc Represents a ServerResponse.
         * @implements IServerResponse
         * @constructor
         * @param {protos.IServerResponse=} [properties] Properties to set
         */
        function ServerResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerResponse status.
         * @member {protos.ServerResponse.Status} status
         * @memberof protos.ServerResponse
         * @instance
         */
        ServerResponse.prototype.status = 0;

        /**
         * ServerResponse statusCode.
         * @member {number} statusCode
         * @memberof protos.ServerResponse
         * @instance
         */
        ServerResponse.prototype.statusCode = 0;

        /**
         * ServerResponse message.
         * @member {string} message
         * @memberof protos.ServerResponse
         * @instance
         */
        ServerResponse.prototype.message = "";

        /**
         * Creates a new ServerResponse instance using the specified properties.
         * @function create
         * @memberof protos.ServerResponse
         * @static
         * @param {protos.IServerResponse=} [properties] Properties to set
         * @returns {protos.ServerResponse} ServerResponse instance
         */
        ServerResponse.create = function create(properties) {
            return new ServerResponse(properties);
        };

        /**
         * Encodes the specified ServerResponse message. Does not implicitly {@link protos.ServerResponse.verify|verify} messages.
         * @function encode
         * @memberof protos.ServerResponse
         * @static
         * @param {protos.IServerResponse} message ServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.statusCode);
            if (message.message != null && message.hasOwnProperty("message"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified ServerResponse message, length delimited. Does not implicitly {@link protos.ServerResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.ServerResponse
         * @static
         * @param {protos.IServerResponse} message ServerResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerResponse message from the specified reader or buffer.
         * @function decode
         * @memberof protos.ServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.ServerResponse} ServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.ServerResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.statusCode = reader.int32();
                    break;
                case 3:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.ServerResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.ServerResponse} ServerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerResponse message.
         * @function verify
         * @memberof protos.ServerResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                if (!$util.isInteger(message.statusCode))
                    return "statusCode: integer expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a ServerResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.ServerResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.ServerResponse} ServerResponse
         */
        ServerResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.ServerResponse)
                return object;
            var message = new $root.protos.ServerResponse();
            switch (object.status) {
            case "Ok":
            case 0:
                message.status = 0;
                break;
            case "ERROR":
            case 1:
                message.status = 1;
                break;
            }
            if (object.statusCode != null)
                message.statusCode = object.statusCode | 0;
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a ServerResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.ServerResponse
         * @static
         * @param {protos.ServerResponse} message ServerResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "Ok" : 0;
                object.statusCode = 0;
                object.message = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.protos.ServerResponse.Status[message.status] : message.status;
            if (message.statusCode != null && message.hasOwnProperty("statusCode"))
                object.statusCode = message.statusCode;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this ServerResponse to JSON.
         * @function toJSON
         * @memberof protos.ServerResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Status enum.
         * @name protos.ServerResponse.Status
         * @enum {string}
         * @property {number} Ok=0 Ok value
         * @property {number} ERROR=1 ERROR value
         */
        ServerResponse.Status = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Ok"] = 0;
            values[valuesById[1] = "ERROR"] = 1;
            return values;
        })();

        return ServerResponse;
    })();

    protos.DeviceRequest = (function() {

        /**
         * Properties of a DeviceRequest.
         * @memberof protos
         * @interface IDeviceRequest
         * @property {protos.DeviceRequest.Type|null} [type] DeviceRequest type
         * @property {string|null} [username] DeviceRequest username
         * @property {string|null} [paylod] DeviceRequest paylod
         * @property {string|null} [nonce] DeviceRequest nonce
         */

        /**
         * Constructs a new DeviceRequest.
         * @memberof protos
         * @classdesc Represents a DeviceRequest.
         * @implements IDeviceRequest
         * @constructor
         * @param {protos.IDeviceRequest=} [properties] Properties to set
         */
        function DeviceRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceRequest type.
         * @member {protos.DeviceRequest.Type} type
         * @memberof protos.DeviceRequest
         * @instance
         */
        DeviceRequest.prototype.type = 0;

        /**
         * DeviceRequest username.
         * @member {string} username
         * @memberof protos.DeviceRequest
         * @instance
         */
        DeviceRequest.prototype.username = "";

        /**
         * DeviceRequest paylod.
         * @member {string} paylod
         * @memberof protos.DeviceRequest
         * @instance
         */
        DeviceRequest.prototype.paylod = "";

        /**
         * DeviceRequest nonce.
         * @member {string} nonce
         * @memberof protos.DeviceRequest
         * @instance
         */
        DeviceRequest.prototype.nonce = "";

        /**
         * Creates a new DeviceRequest instance using the specified properties.
         * @function create
         * @memberof protos.DeviceRequest
         * @static
         * @param {protos.IDeviceRequest=} [properties] Properties to set
         * @returns {protos.DeviceRequest} DeviceRequest instance
         */
        DeviceRequest.create = function create(properties) {
            return new DeviceRequest(properties);
        };

        /**
         * Encodes the specified DeviceRequest message. Does not implicitly {@link protos.DeviceRequest.verify|verify} messages.
         * @function encode
         * @memberof protos.DeviceRequest
         * @static
         * @param {protos.IDeviceRequest} message DeviceRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            if (message.paylod != null && message.hasOwnProperty("paylod"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.paylod);
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.nonce);
            return writer;
        };

        /**
         * Encodes the specified DeviceRequest message, length delimited. Does not implicitly {@link protos.DeviceRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof protos.DeviceRequest
         * @static
         * @param {protos.IDeviceRequest} message DeviceRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceRequest message from the specified reader or buffer.
         * @function decode
         * @memberof protos.DeviceRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {protos.DeviceRequest} DeviceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.protos.DeviceRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                case 3:
                    message.paylod = reader.string();
                    break;
                case 4:
                    message.nonce = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DeviceRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof protos.DeviceRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {protos.DeviceRequest} DeviceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceRequest message.
         * @function verify
         * @memberof protos.DeviceRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                    break;
                }
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.paylod != null && message.hasOwnProperty("paylod"))
                if (!$util.isString(message.paylod))
                    return "paylod: string expected";
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                if (!$util.isString(message.nonce))
                    return "nonce: string expected";
            return null;
        };

        /**
         * Creates a DeviceRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof protos.DeviceRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {protos.DeviceRequest} DeviceRequest
         */
        DeviceRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.protos.DeviceRequest)
                return object;
            var message = new $root.protos.DeviceRequest();
            switch (object.type) {
            case "Handshake":
            case 0:
                message.type = 0;
                break;
            }
            if (object.username != null)
                message.username = String(object.username);
            if (object.paylod != null)
                message.paylod = String(object.paylod);
            if (object.nonce != null)
                message.nonce = String(object.nonce);
            return message;
        };

        /**
         * Creates a plain object from a DeviceRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof protos.DeviceRequest
         * @static
         * @param {protos.DeviceRequest} message DeviceRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = options.enums === String ? "Handshake" : 0;
                object.username = "";
                object.paylod = "";
                object.nonce = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? $root.protos.DeviceRequest.Type[message.type] : message.type;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.paylod != null && message.hasOwnProperty("paylod"))
                object.paylod = message.paylod;
            if (message.nonce != null && message.hasOwnProperty("nonce"))
                object.nonce = message.nonce;
            return object;
        };

        /**
         * Converts this DeviceRequest to JSON.
         * @function toJSON
         * @memberof protos.DeviceRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Type enum.
         * @name protos.DeviceRequest.Type
         * @enum {string}
         * @property {number} Handshake=0 Handshake value
         */
        DeviceRequest.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "Handshake"] = 0;
            return values;
        })();

        return DeviceRequest;
    })();

    return protos;
})();

module.exports = $root;
