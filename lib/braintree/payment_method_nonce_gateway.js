// Generated by CoffeeScript 1.10.0
var Gateway, PaymentMethodNonce, PaymentMethodNonceGateway, exceptions,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Gateway = require('./gateway').Gateway;

PaymentMethodNonce = require('./payment_method_nonce').PaymentMethodNonce;

exceptions = require('./exceptions');

PaymentMethodNonceGateway = (function(superClass) {
  extend(PaymentMethodNonceGateway, superClass);

  function PaymentMethodNonceGateway(gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  PaymentMethodNonceGateway.prototype.responseHandler = function(callback) {
    return this.createResponseHandler("payment_method_nonce", PaymentMethodNonce, function(err, response) {
      if (!err) {
        response.paymentMethodNonce = new PaymentMethodNonce(response.paymentMethodNonce);
      }
      return callback(err, response);
    });
  };

  PaymentMethodNonceGateway.prototype.create = function(payment_method_token, callback) {
    return this.gateway.http.post((this.config.baseMerchantPath()) + "/payment_methods/" + payment_method_token + "/nonces", {}, this.responseHandler(callback));
  };

  PaymentMethodNonceGateway.prototype.find = function(payment_method_nonce, callback) {
    return this.gateway.http.get((this.config.baseMerchantPath()) + "/payment_method_nonces/" + payment_method_nonce, function(err, response) {
      if (err) {
        return callback(err, null);
      } else {
        return callback(null, new PaymentMethodNonce(response.paymentMethodNonce));
      }
    });
  };

  return PaymentMethodNonceGateway;

})(Gateway);

exports.PaymentMethodNonceGateway = PaymentMethodNonceGateway;

//# sourceMappingURL=payment_method_nonce_gateway.js.map