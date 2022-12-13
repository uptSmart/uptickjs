// source: cosmos/crypto/keyring/v1/record.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var gogoproto_gogo_pb = require('../../../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var cosmos_crypto_hd_v1_hd_pb = require('../../../../cosmos/crypto/hd/v1/hd_pb.js');
goog.object.extend(proto, cosmos_crypto_hd_v1_hd_pb);
goog.exportSymbol('proto.cosmos.crypto.keyring.v1.Record', null, global);
goog.exportSymbol('proto.cosmos.crypto.keyring.v1.Record.ItemCase', null, global);
goog.exportSymbol('proto.cosmos.crypto.keyring.v1.Record.Ledger', null, global);
goog.exportSymbol('proto.cosmos.crypto.keyring.v1.Record.Local', null, global);
goog.exportSymbol('proto.cosmos.crypto.keyring.v1.Record.Multi', null, global);
goog.exportSymbol('proto.cosmos.crypto.keyring.v1.Record.Offline', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.crypto.keyring.v1.Record = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.cosmos.crypto.keyring.v1.Record.oneofGroups_);
};
goog.inherits(proto.cosmos.crypto.keyring.v1.Record, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crypto.keyring.v1.Record.displayName = 'proto.cosmos.crypto.keyring.v1.Record';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.crypto.keyring.v1.Record.Local = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.crypto.keyring.v1.Record.Local, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crypto.keyring.v1.Record.Local.displayName = 'proto.cosmos.crypto.keyring.v1.Record.Local';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.crypto.keyring.v1.Record.Ledger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crypto.keyring.v1.Record.Ledger.displayName = 'proto.cosmos.crypto.keyring.v1.Record.Ledger';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.crypto.keyring.v1.Record.Multi = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.crypto.keyring.v1.Record.Multi, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crypto.keyring.v1.Record.Multi.displayName = 'proto.cosmos.crypto.keyring.v1.Record.Multi';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.cosmos.crypto.keyring.v1.Record.Offline = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.crypto.keyring.v1.Record.Offline, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.crypto.keyring.v1.Record.Offline.displayName = 'proto.cosmos.crypto.keyring.v1.Record.Offline';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.cosmos.crypto.keyring.v1.Record.oneofGroups_ = [[3,4,5,6]];

/**
 * @enum {number}
 */
proto.cosmos.crypto.keyring.v1.Record.ItemCase = {
  ITEM_NOT_SET: 0,
  LOCAL: 3,
  LEDGER: 4,
  MULTI: 5,
  OFFLINE: 6
};

/**
 * @return {proto.cosmos.crypto.keyring.v1.Record.ItemCase}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.getItemCase = function() {
  return /** @type {proto.cosmos.crypto.keyring.v1.Record.ItemCase} */(jspb.Message.computeOneofCase(this, proto.cosmos.crypto.keyring.v1.Record.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crypto.keyring.v1.Record.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crypto.keyring.v1.Record} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pubKey: (f = msg.getPubKey()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    local: (f = msg.getLocal()) && proto.cosmos.crypto.keyring.v1.Record.Local.toObject(includeInstance, f),
    ledger: (f = msg.getLedger()) && proto.cosmos.crypto.keyring.v1.Record.Ledger.toObject(includeInstance, f),
    multi: (f = msg.getMulti()) && proto.cosmos.crypto.keyring.v1.Record.Multi.toObject(includeInstance, f),
    offline: (f = msg.getOffline()) && proto.cosmos.crypto.keyring.v1.Record.Offline.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.crypto.keyring.v1.Record}
 */
proto.cosmos.crypto.keyring.v1.Record.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crypto.keyring.v1.Record;
  return proto.cosmos.crypto.keyring.v1.Record.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crypto.keyring.v1.Record} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crypto.keyring.v1.Record}
 */
proto.cosmos.crypto.keyring.v1.Record.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setPubKey(value);
      break;
    case 3:
      var value = new proto.cosmos.crypto.keyring.v1.Record.Local;
      reader.readMessage(value,proto.cosmos.crypto.keyring.v1.Record.Local.deserializeBinaryFromReader);
      msg.setLocal(value);
      break;
    case 4:
      var value = new proto.cosmos.crypto.keyring.v1.Record.Ledger;
      reader.readMessage(value,proto.cosmos.crypto.keyring.v1.Record.Ledger.deserializeBinaryFromReader);
      msg.setLedger(value);
      break;
    case 5:
      var value = new proto.cosmos.crypto.keyring.v1.Record.Multi;
      reader.readMessage(value,proto.cosmos.crypto.keyring.v1.Record.Multi.deserializeBinaryFromReader);
      msg.setMulti(value);
      break;
    case 6:
      var value = new proto.cosmos.crypto.keyring.v1.Record.Offline;
      reader.readMessage(value,proto.cosmos.crypto.keyring.v1.Record.Offline.deserializeBinaryFromReader);
      msg.setOffline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crypto.keyring.v1.Record.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crypto.keyring.v1.Record} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPubKey();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getLocal();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.cosmos.crypto.keyring.v1.Record.Local.serializeBinaryToWriter
    );
  }
  f = message.getLedger();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.cosmos.crypto.keyring.v1.Record.Ledger.serializeBinaryToWriter
    );
  }
  f = message.getMulti();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.cosmos.crypto.keyring.v1.Record.Multi.serializeBinaryToWriter
    );
  }
  f = message.getOffline();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.cosmos.crypto.keyring.v1.Record.Offline.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.crypto.keyring.v1.Record.Local.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crypto.keyring.v1.Record.Local.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Local} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.Local.toObject = function(includeInstance, msg) {
  var f, obj = {
    privKey: (f = msg.getPrivKey()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    privKeyType: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Local}
 */
proto.cosmos.crypto.keyring.v1.Record.Local.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crypto.keyring.v1.Record.Local;
  return proto.cosmos.crypto.keyring.v1.Record.Local.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Local} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Local}
 */
proto.cosmos.crypto.keyring.v1.Record.Local.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setPrivKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrivKeyType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.crypto.keyring.v1.Record.Local.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crypto.keyring.v1.Record.Local.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Local} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.Local.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrivKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getPrivKeyType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Any priv_key = 1;
 * @return {?proto.google.protobuf.Any}
 */
proto.cosmos.crypto.keyring.v1.Record.Local.prototype.getPrivKey = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 1));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Local} returns this
*/
proto.cosmos.crypto.keyring.v1.Record.Local.prototype.setPrivKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Local} returns this
 */
proto.cosmos.crypto.keyring.v1.Record.Local.prototype.clearPrivKey = function() {
  return this.setPrivKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.crypto.keyring.v1.Record.Local.prototype.hasPrivKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string priv_key_type = 2;
 * @return {string}
 */
proto.cosmos.crypto.keyring.v1.Record.Local.prototype.getPrivKeyType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Local} returns this
 */
proto.cosmos.crypto.keyring.v1.Record.Local.prototype.setPrivKeyType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crypto.keyring.v1.Record.Ledger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Ledger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: (f = msg.getPath()) && cosmos_crypto_hd_v1_hd_pb.BIP44Params.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Ledger}
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crypto.keyring.v1.Record.Ledger;
  return proto.cosmos.crypto.keyring.v1.Record.Ledger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Ledger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Ledger}
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_crypto_hd_v1_hd_pb.BIP44Params;
      reader.readMessage(value,cosmos_crypto_hd_v1_hd_pb.BIP44Params.deserializeBinaryFromReader);
      msg.setPath(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crypto.keyring.v1.Record.Ledger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Ledger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_crypto_hd_v1_hd_pb.BIP44Params.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.crypto.hd.v1.BIP44Params path = 1;
 * @return {?proto.cosmos.crypto.hd.v1.BIP44Params}
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger.prototype.getPath = function() {
  return /** @type{?proto.cosmos.crypto.hd.v1.BIP44Params} */ (
    jspb.Message.getWrapperField(this, cosmos_crypto_hd_v1_hd_pb.BIP44Params, 1));
};


/**
 * @param {?proto.cosmos.crypto.hd.v1.BIP44Params|undefined} value
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Ledger} returns this
*/
proto.cosmos.crypto.keyring.v1.Record.Ledger.prototype.setPath = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Ledger} returns this
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger.prototype.clearPath = function() {
  return this.setPath(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.crypto.keyring.v1.Record.Ledger.prototype.hasPath = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.crypto.keyring.v1.Record.Multi.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crypto.keyring.v1.Record.Multi.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Multi} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.Multi.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Multi}
 */
proto.cosmos.crypto.keyring.v1.Record.Multi.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crypto.keyring.v1.Record.Multi;
  return proto.cosmos.crypto.keyring.v1.Record.Multi.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Multi} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Multi}
 */
proto.cosmos.crypto.keyring.v1.Record.Multi.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.crypto.keyring.v1.Record.Multi.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crypto.keyring.v1.Record.Multi.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Multi} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.Multi.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.cosmos.crypto.keyring.v1.Record.Offline.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.crypto.keyring.v1.Record.Offline.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Offline} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.Offline.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Offline}
 */
proto.cosmos.crypto.keyring.v1.Record.Offline.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.crypto.keyring.v1.Record.Offline;
  return proto.cosmos.crypto.keyring.v1.Record.Offline.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Offline} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.crypto.keyring.v1.Record.Offline}
 */
proto.cosmos.crypto.keyring.v1.Record.Offline.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.cosmos.crypto.keyring.v1.Record.Offline.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.crypto.keyring.v1.Record.Offline.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.crypto.keyring.v1.Record.Offline} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.crypto.keyring.v1.Record.Offline.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Any pub_key = 2;
 * @return {?proto.google.protobuf.Any}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.getPubKey = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 2));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
*/
proto.cosmos.crypto.keyring.v1.Record.prototype.setPubKey = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.clearPubKey = function() {
  return this.setPubKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.hasPubKey = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Local local = 3;
 * @return {?proto.cosmos.crypto.keyring.v1.Record.Local}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.getLocal = function() {
  return /** @type{?proto.cosmos.crypto.keyring.v1.Record.Local} */ (
    jspb.Message.getWrapperField(this, proto.cosmos.crypto.keyring.v1.Record.Local, 3));
};


/**
 * @param {?proto.cosmos.crypto.keyring.v1.Record.Local|undefined} value
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
*/
proto.cosmos.crypto.keyring.v1.Record.prototype.setLocal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.cosmos.crypto.keyring.v1.Record.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.clearLocal = function() {
  return this.setLocal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.hasLocal = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Ledger ledger = 4;
 * @return {?proto.cosmos.crypto.keyring.v1.Record.Ledger}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.getLedger = function() {
  return /** @type{?proto.cosmos.crypto.keyring.v1.Record.Ledger} */ (
    jspb.Message.getWrapperField(this, proto.cosmos.crypto.keyring.v1.Record.Ledger, 4));
};


/**
 * @param {?proto.cosmos.crypto.keyring.v1.Record.Ledger|undefined} value
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
*/
proto.cosmos.crypto.keyring.v1.Record.prototype.setLedger = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.cosmos.crypto.keyring.v1.Record.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.clearLedger = function() {
  return this.setLedger(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.hasLedger = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Multi multi = 5;
 * @return {?proto.cosmos.crypto.keyring.v1.Record.Multi}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.getMulti = function() {
  return /** @type{?proto.cosmos.crypto.keyring.v1.Record.Multi} */ (
    jspb.Message.getWrapperField(this, proto.cosmos.crypto.keyring.v1.Record.Multi, 5));
};


/**
 * @param {?proto.cosmos.crypto.keyring.v1.Record.Multi|undefined} value
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
*/
proto.cosmos.crypto.keyring.v1.Record.prototype.setMulti = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.cosmos.crypto.keyring.v1.Record.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.clearMulti = function() {
  return this.setMulti(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.hasMulti = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Offline offline = 6;
 * @return {?proto.cosmos.crypto.keyring.v1.Record.Offline}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.getOffline = function() {
  return /** @type{?proto.cosmos.crypto.keyring.v1.Record.Offline} */ (
    jspb.Message.getWrapperField(this, proto.cosmos.crypto.keyring.v1.Record.Offline, 6));
};


/**
 * @param {?proto.cosmos.crypto.keyring.v1.Record.Offline|undefined} value
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
*/
proto.cosmos.crypto.keyring.v1.Record.prototype.setOffline = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.cosmos.crypto.keyring.v1.Record.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.crypto.keyring.v1.Record} returns this
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.clearOffline = function() {
  return this.setOffline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.crypto.keyring.v1.Record.prototype.hasOffline = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.cosmos.crypto.keyring.v1);
