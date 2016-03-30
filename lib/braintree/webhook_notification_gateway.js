// Generated by CoffeeScript 1.10.0
var Digest, Gateway, InvalidChallengeError, InvalidSignatureError, Util, WebhookNotification, WebhookNotificationGateway, _, xml2js,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

xml2js = require('xml2js');

_ = require('underscore');

Digest = require('./digest').Digest;

Gateway = require('./gateway').Gateway;

InvalidSignatureError = require('./exceptions').InvalidSignatureError;

InvalidChallengeError = require('./exceptions').InvalidChallengeError;

Util = require('./util').Util;

WebhookNotification = require('./webhook_notification').WebhookNotification;

WebhookNotificationGateway = (function(superClass) {
  extend(WebhookNotificationGateway, superClass);

  function WebhookNotificationGateway(gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
    this.parser = new xml2js.Parser({
      explicitRoot: true
    });
  }

  WebhookNotificationGateway.prototype.parse = function(signature, payload, callback) {
    var err, xmlPayload;
    if (payload.match(/[^A-Za-z0-9+=\/\n]/)) {
      callback(InvalidSignatureError("payload contains illegal characters"), null);
      return;
    }
    err = this.validateSignature(signature, payload);
    if (err) {
      return callback(err, null);
    }
    xmlPayload = new Buffer(payload, "base64").toString("utf8");
    return this.parser.parseString(xmlPayload, (function(_this) {
      return function(err, result) {
        var attributes, handler;
        attributes = Util.convertNodeToObject(result);
        handler = _this.createResponseHandler("notification", WebhookNotification, function(err, result) {
          return callback(null, result.notification);
        });
        return handler(null, attributes);
      };
    })(this));
  };

  WebhookNotificationGateway.prototype.validateSignature = function(signatureString, payload) {
    var matches, pair, self, signature, signaturePairs;
    signaturePairs = (function() {
      var i, len, ref, results;
      ref = signatureString.split("&");
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        pair = ref[i];
        if (pair.indexOf("|") !== -1) {
          results.push(pair.split("|"));
        }
      }
      return results;
    })();
    signature = this.matchingSignature(signaturePairs);
    if (!signature) {
      return InvalidSignatureError("no matching public key");
    }
    self = this;
    matches = _.some([payload, payload + '\n'], function(payload) {
      return Digest.secureCompare(signature, Digest.Sha1hexdigest(self.gateway.config.privateKey, payload));
    });
    if (!matches) {
      return InvalidSignatureError("signature does not match payload - one has been modified");
    }
    return null;
  };

  WebhookNotificationGateway.prototype.verify = function(challenge, callback) {
    var digest;
    if (!challenge.match(/^[a-f0-9]{20,32}$/)) {
      if (callback != null) {
        callback(InvalidChallengeError("challenge contains non-hex characters"), null);
        return;
      } else {
        throw new InvalidChallengeError("challenge contains non-hex characters");
      }
    }
    digest = Digest.Sha1hexdigest(this.gateway.config.privateKey, challenge);
    return this.gateway.config.publicKey + "|" + digest;
  };

  WebhookNotificationGateway.prototype.matchingSignature = function(signaturePairs) {
    var i, len, publicKey, ref, signature;
    for (i = 0, len = signaturePairs.length; i < len; i++) {
      ref = signaturePairs[i], publicKey = ref[0], signature = ref[1];
      if (this.gateway.config.publicKey === publicKey) {
        return signature;
      }
    }
    return null;
  };

  return WebhookNotificationGateway;

})(Gateway);

exports.WebhookNotificationGateway = WebhookNotificationGateway;

//# sourceMappingURL=webhook_notification_gateway.js.map