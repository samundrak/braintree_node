// Generated by CoffeeScript 1.10.0
var AttributeSetter, PaymentMethodNonce, ThreeDSecureInfo,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AttributeSetter = require('./attribute_setter').AttributeSetter;

ThreeDSecureInfo = require('./three_d_secure_info').ThreeDSecureInfo;

PaymentMethodNonce = (function(superClass) {
  extend(PaymentMethodNonce, superClass);

  function PaymentMethodNonce(attributes) {
    PaymentMethodNonce.__super__.constructor.call(this, attributes);
    if (attributes.threeDSecureInfo) {
      this.threeDSecureInfo = new ThreeDSecureInfo(attributes.threeDSecureInfo);
    }
  }

  return PaymentMethodNonce;

})(AttributeSetter);

exports.PaymentMethodNonce = PaymentMethodNonce;

//# sourceMappingURL=payment_method_nonce.js.map