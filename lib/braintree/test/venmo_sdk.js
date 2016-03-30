// Generated by CoffeeScript 1.10.0
var VenmoSdk, generate;

generate = function(number) {
  return "stub-" + number;
};

VenmoSdk = {
  generateTestPaymentMethodCode: generate,
  VisaPaymentMethodCode: generate("4111111111111111"),
  InvalidPaymentMethodCode: "stub-invalid-payment-method-code",
  Session: "stub-session",
  InvalidSession: "stub-invalid-session"
};

exports.VenmoSdk = VenmoSdk;

//# sourceMappingURL=venmo_sdk.js.map