// Generated by CoffeeScript 1.10.0
var AttributeSetter, UnknownPaymentMethod,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AttributeSetter = require('./attribute_setter').AttributeSetter;

UnknownPaymentMethod = (function(superClass) {
  extend(UnknownPaymentMethod, superClass);

  function UnknownPaymentMethod(attributes) {
    var keys, name;
    name = ((function() {
      var results;
      results = [];
      for (keys in attributes) {
        if (!hasProp.call(attributes, keys)) continue;
        results.push(keys);
      }
      return results;
    })())[0];
    attributes[name].imageUrl = "https://assets.braintreegateway.com/payment_method_logo/unknown.png";
    UnknownPaymentMethod.__super__.constructor.call(this, attributes[name]);
  }

  return UnknownPaymentMethod;

})(AttributeSetter);

exports.UnknownPaymentMethod = UnknownPaymentMethod;

//# sourceMappingURL=unknown_payment_method.js.map