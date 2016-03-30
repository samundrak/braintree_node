// Generated by CoffeeScript 1.10.0
var AdvancedSearch, CustomerSearch,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AdvancedSearch = require('./advanced_search').AdvancedSearch;

CustomerSearch = (function(superClass) {
  extend(CustomerSearch, superClass);

  function CustomerSearch() {
    return CustomerSearch.__super__.constructor.apply(this, arguments);
  }

  CustomerSearch.textFields("addressCountryName", "addressExtendedAddress", "addressFirstName", "addressLastName", "addressLocality", "addressPostalCode", "addressRegion", "addressStreetAddress", "cardholderName", "company", "email", "fax", "firstName", "id", "lastName", "paymentMethodToken", "paypalAccountEmail", "phone", "website", "paymentMethodTokenWithDuplicates");

  CustomerSearch.equalityFields("creditCardExpirationDate");

  CustomerSearch.partialMatchFields("creditCardNumber");

  CustomerSearch.multipleValueField("ids");

  CustomerSearch.rangeFields("createdAt");

  return CustomerSearch;

})(AdvancedSearch);

exports.CustomerSearch = CustomerSearch;

//# sourceMappingURL=customer_search.js.map