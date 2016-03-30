// Generated by CoffeeScript 1.10.0
var AttributeSetter, VenmoAccount,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AttributeSetter = require('./attribute_setter').AttributeSetter;

VenmoAccount = (function(superClass) {
  extend(VenmoAccount, superClass);

  function VenmoAccount(attributes) {
    VenmoAccount.__super__.constructor.call(this, attributes);
  }

  return VenmoAccount;

})(AttributeSetter);

exports.VenmoAccount = VenmoAccount;

//# sourceMappingURL=venmo_account.js.map