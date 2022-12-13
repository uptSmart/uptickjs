// source: cosmos/group/v1beta1/genesis.proto
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

var cosmos_group_v1beta1_types_pb = require('../../../cosmos/group/v1beta1/types_pb.js');
goog.object.extend(proto, cosmos_group_v1beta1_types_pb);
goog.exportSymbol('proto.cosmos.group.v1beta1.GenesisState', null, global);
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
proto.cosmos.group.v1beta1.GenesisState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cosmos.group.v1beta1.GenesisState.repeatedFields_, null);
};
goog.inherits(proto.cosmos.group.v1beta1.GenesisState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.group.v1beta1.GenesisState.displayName = 'proto.cosmos.group.v1beta1.GenesisState';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cosmos.group.v1beta1.GenesisState.repeatedFields_ = [2,3,5,7,8];



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
proto.cosmos.group.v1beta1.GenesisState.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.group.v1beta1.GenesisState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.group.v1beta1.GenesisState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.group.v1beta1.GenesisState.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupSeq: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupsList: jspb.Message.toObjectList(msg.getGroupsList(),
    cosmos_group_v1beta1_types_pb.GroupInfo.toObject, includeInstance),
    groupMembersList: jspb.Message.toObjectList(msg.getGroupMembersList(),
    cosmos_group_v1beta1_types_pb.GroupMember.toObject, includeInstance),
    groupPolicySeq: jspb.Message.getFieldWithDefault(msg, 4, 0),
    groupPoliciesList: jspb.Message.toObjectList(msg.getGroupPoliciesList(),
    cosmos_group_v1beta1_types_pb.GroupPolicyInfo.toObject, includeInstance),
    proposalSeq: jspb.Message.getFieldWithDefault(msg, 6, 0),
    proposalsList: jspb.Message.toObjectList(msg.getProposalsList(),
    cosmos_group_v1beta1_types_pb.Proposal.toObject, includeInstance),
    votesList: jspb.Message.toObjectList(msg.getVotesList(),
    cosmos_group_v1beta1_types_pb.Vote.toObject, includeInstance)
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
 * @return {!proto.cosmos.group.v1beta1.GenesisState}
 */
proto.cosmos.group.v1beta1.GenesisState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.group.v1beta1.GenesisState;
  return proto.cosmos.group.v1beta1.GenesisState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.group.v1beta1.GenesisState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.group.v1beta1.GenesisState}
 */
proto.cosmos.group.v1beta1.GenesisState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupSeq(value);
      break;
    case 2:
      var value = new cosmos_group_v1beta1_types_pb.GroupInfo;
      reader.readMessage(value,cosmos_group_v1beta1_types_pb.GroupInfo.deserializeBinaryFromReader);
      msg.addGroups(value);
      break;
    case 3:
      var value = new cosmos_group_v1beta1_types_pb.GroupMember;
      reader.readMessage(value,cosmos_group_v1beta1_types_pb.GroupMember.deserializeBinaryFromReader);
      msg.addGroupMembers(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGroupPolicySeq(value);
      break;
    case 5:
      var value = new cosmos_group_v1beta1_types_pb.GroupPolicyInfo;
      reader.readMessage(value,cosmos_group_v1beta1_types_pb.GroupPolicyInfo.deserializeBinaryFromReader);
      msg.addGroupPolicies(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setProposalSeq(value);
      break;
    case 7:
      var value = new cosmos_group_v1beta1_types_pb.Proposal;
      reader.readMessage(value,cosmos_group_v1beta1_types_pb.Proposal.deserializeBinaryFromReader);
      msg.addProposals(value);
      break;
    case 8:
      var value = new cosmos_group_v1beta1_types_pb.Vote;
      reader.readMessage(value,cosmos_group_v1beta1_types_pb.Vote.deserializeBinaryFromReader);
      msg.addVotes(value);
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
proto.cosmos.group.v1beta1.GenesisState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.group.v1beta1.GenesisState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.group.v1beta1.GenesisState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.group.v1beta1.GenesisState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupSeq();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      cosmos_group_v1beta1_types_pb.GroupInfo.serializeBinaryToWriter
    );
  }
  f = message.getGroupMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      cosmos_group_v1beta1_types_pb.GroupMember.serializeBinaryToWriter
    );
  }
  f = message.getGroupPolicySeq();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getGroupPoliciesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      cosmos_group_v1beta1_types_pb.GroupPolicyInfo.serializeBinaryToWriter
    );
  }
  f = message.getProposalSeq();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getProposalsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      cosmos_group_v1beta1_types_pb.Proposal.serializeBinaryToWriter
    );
  }
  f = message.getVotesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      cosmos_group_v1beta1_types_pb.Vote.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 group_seq = 1;
 * @return {number}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.getGroupSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.setGroupSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated GroupInfo groups = 2;
 * @return {!Array<!proto.cosmos.group.v1beta1.GroupInfo>}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.getGroupsList = function() {
  return /** @type{!Array<!proto.cosmos.group.v1beta1.GroupInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_group_v1beta1_types_pb.GroupInfo, 2));
};


/**
 * @param {!Array<!proto.cosmos.group.v1beta1.GroupInfo>} value
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
*/
proto.cosmos.group.v1beta1.GenesisState.prototype.setGroupsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.cosmos.group.v1beta1.GroupInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.group.v1beta1.GroupInfo}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.addGroups = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.cosmos.group.v1beta1.GroupInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.clearGroupsList = function() {
  return this.setGroupsList([]);
};


/**
 * repeated GroupMember group_members = 3;
 * @return {!Array<!proto.cosmos.group.v1beta1.GroupMember>}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.getGroupMembersList = function() {
  return /** @type{!Array<!proto.cosmos.group.v1beta1.GroupMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_group_v1beta1_types_pb.GroupMember, 3));
};


/**
 * @param {!Array<!proto.cosmos.group.v1beta1.GroupMember>} value
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
*/
proto.cosmos.group.v1beta1.GenesisState.prototype.setGroupMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.cosmos.group.v1beta1.GroupMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.group.v1beta1.GroupMember}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.addGroupMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.cosmos.group.v1beta1.GroupMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.clearGroupMembersList = function() {
  return this.setGroupMembersList([]);
};


/**
 * optional uint64 group_policy_seq = 4;
 * @return {number}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.getGroupPolicySeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.setGroupPolicySeq = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated GroupPolicyInfo group_policies = 5;
 * @return {!Array<!proto.cosmos.group.v1beta1.GroupPolicyInfo>}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.getGroupPoliciesList = function() {
  return /** @type{!Array<!proto.cosmos.group.v1beta1.GroupPolicyInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_group_v1beta1_types_pb.GroupPolicyInfo, 5));
};


/**
 * @param {!Array<!proto.cosmos.group.v1beta1.GroupPolicyInfo>} value
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
*/
proto.cosmos.group.v1beta1.GenesisState.prototype.setGroupPoliciesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.cosmos.group.v1beta1.GroupPolicyInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.group.v1beta1.GroupPolicyInfo}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.addGroupPolicies = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.cosmos.group.v1beta1.GroupPolicyInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.clearGroupPoliciesList = function() {
  return this.setGroupPoliciesList([]);
};


/**
 * optional uint64 proposal_seq = 6;
 * @return {number}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.getProposalSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.setProposalSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * repeated Proposal proposals = 7;
 * @return {!Array<!proto.cosmos.group.v1beta1.Proposal>}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.getProposalsList = function() {
  return /** @type{!Array<!proto.cosmos.group.v1beta1.Proposal>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_group_v1beta1_types_pb.Proposal, 7));
};


/**
 * @param {!Array<!proto.cosmos.group.v1beta1.Proposal>} value
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
*/
proto.cosmos.group.v1beta1.GenesisState.prototype.setProposalsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.cosmos.group.v1beta1.Proposal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.group.v1beta1.Proposal}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.addProposals = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.cosmos.group.v1beta1.Proposal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.clearProposalsList = function() {
  return this.setProposalsList([]);
};


/**
 * repeated Vote votes = 8;
 * @return {!Array<!proto.cosmos.group.v1beta1.Vote>}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.getVotesList = function() {
  return /** @type{!Array<!proto.cosmos.group.v1beta1.Vote>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_group_v1beta1_types_pb.Vote, 8));
};


/**
 * @param {!Array<!proto.cosmos.group.v1beta1.Vote>} value
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
*/
proto.cosmos.group.v1beta1.GenesisState.prototype.setVotesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.cosmos.group.v1beta1.Vote=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.group.v1beta1.Vote}
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.addVotes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.cosmos.group.v1beta1.Vote, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cosmos.group.v1beta1.GenesisState} returns this
 */
proto.cosmos.group.v1beta1.GenesisState.prototype.clearVotesList = function() {
  return this.setVotesList([]);
};


goog.object.extend(exports, proto.cosmos.group.v1beta1);
