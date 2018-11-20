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
