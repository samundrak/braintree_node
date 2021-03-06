// Generated by CoffeeScript 1.10.0
var AttributeSetter, TransactionDetails,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AttributeSetter = require('./attribute_setter').AttributeSetter;

TransactionDetails = (function(superClass) {
  extend(TransactionDetails, superClass);

  function TransactionDetails(attributes) {
    TransactionDetails.__super__.constructor.call(this, attributes);
  }

  return TransactionDetails;

})(AttributeSetter);

exports.TransactionDetails = TransactionDetails;

//# sourceMappingURL=transaction_details.js.map
