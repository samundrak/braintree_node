// Generated by CoffeeScript 1.10.0
var AttributeSetter, CreditCard, CreditCardVerification,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AttributeSetter = require('./attribute_setter').AttributeSetter;

CreditCardVerification = require('./credit_card_verification').CreditCardVerification;

CreditCard = (function(superClass) {
  extend(CreditCard, superClass);

  CreditCard.CardType = {
    AmEx: "American Express",
    CarteBlanche: "Carte Blanche",
    ChinaUnionPay: "China UnionPay",
    DinersClubInternational: "Diners Club",
    Discover: "Discover",
    JCB: "JCB",
    Laser: "Laser",
    Maestro: "Maestro",
    MasterCard: "MasterCard",
    Solo: "Solo",
    Switch: "Switch",
    Visa: "Visa",
    Unknown: "Unknown",
    All: function() {
      var all, key, value;
      all = [];
      for (key in this) {
        value = this[key];
        if (key !== 'All') {
          all.push(value);
        }
      }
      return all;
    }
  };

  CreditCard.CustomerLocation = {
    International: 'international',
    US: 'us'
  };

  CreditCard.CardTypeIndicator = {
    Yes: "Yes",
    No: "No",
    Unknown: "Unknown"
  };

  CreditCard.Prepaid = CreditCard.Commercial = CreditCard.Payroll = CreditCard.Healthcare = CreditCard.DurbinRegulated = CreditCard.Debit = CreditCard.CountryOfIssuance = CreditCard.IssuingBank = CreditCard.CardTypeIndicator;

  function CreditCard(attributes) {
    var sorted_verifications;
    CreditCard.__super__.constructor.call(this, attributes);
    this.maskedNumber = this.bin + "******" + this.last4;
    this.expirationDate = this.expirationMonth + "/" + this.expirationYear;
    if (attributes) {
      sorted_verifications = (attributes.verifications || []).sort(function(a, b) {
        return b.created_at - a.created_at;
      });
      if (sorted_verifications[0]) {
        this.verification = new CreditCardVerification(sorted_verifications[0]);
      }
    }
  }

  return CreditCard;

})(AttributeSetter);

exports.CreditCard = CreditCard;

//# sourceMappingURL=credit_card.js.map