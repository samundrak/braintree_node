// Generated by CoffeeScript 1.10.0
var Buffer, Digest, Gateway, WebhookNotification, WebhookTestingGateway, dateFormat,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Buffer = require('buffer').Buffer;

Digest = require('./digest').Digest;

Gateway = require('./gateway').Gateway;

WebhookNotification = require('./webhook_notification').WebhookNotification;

dateFormat = require('dateformat');

WebhookTestingGateway = (function(superClass) {
  extend(WebhookTestingGateway, superClass);

  function WebhookTestingGateway(gateway) {
    this.gateway = gateway;
    this.config = this.gateway.config;
  }

  WebhookTestingGateway.prototype.sampleNotification = function(kind, id) {
    var payload, signature;
    payload = new Buffer(this.sampleXml(kind, id)).toString("base64") + '\n';
    signature = this.gateway.config.publicKey + "|" + (Digest.Sha1hexdigest(this.gateway.config.privateKey, payload));
    return {
      bt_signature: signature,
      bt_payload: payload
    };
  };

  WebhookTestingGateway.prototype.sampleXml = function(kind, id) {
    return "<notification>\n    <timestamp type=\"datetime\">" + (dateFormat(new Date(), dateFormat.masks.isoUtcDateTime, true)) + "</timestamp>\n    <kind>" + kind + "</kind>\n    <subject>" + (this.subjectXmlFor(kind, id)) + "</subject>\n</notification>";
  };

  WebhookTestingGateway.prototype.subjectXmlFor = function(kind, id) {
    switch (kind) {
      case WebhookNotification.Kind.AccountUpdaterDailyReport:
        return this.subjectXmlForAccountUpdaterDailyReport();
      case WebhookNotification.Kind.Check:
        return this.subjectXmlForCheck();
      case WebhookNotification.Kind.TransactionDisbursed:
        return this.subjectXmlForTransactionDisbursed(id);
      case WebhookNotification.Kind.DisbursementException:
        return this.subjectXmlForDisbursementException(id);
      case WebhookNotification.Kind.Disbursement:
        return this.subjectXmlForDisbursement(id);
      case WebhookNotification.Kind.DisputeOpened:
        return this.subjectXmlForDisputeOpened(id);
      case WebhookNotification.Kind.DisputeLost:
        return this.subjectXmlForDisputeLost(id);
      case WebhookNotification.Kind.DisputeWon:
        return this.subjectXmlForDisputeWon(id);
      case WebhookNotification.Kind.SubMerchantAccountApproved:
        return this.subjectXmlForSubMerchantAccountApproved(id);
      case WebhookNotification.Kind.SubMerchantAccountDeclined:
        return this.subjectXmlForSubMerchantAccountDeclined(id);
      case WebhookNotification.Kind.PartnerMerchantConnected:
        return this.subjectXmlForPartnerMerchantConnected();
      case WebhookNotification.Kind.PartnerMerchantDisconnected:
        return this.subjectXmlForPartnerMerchantDisconnected();
      case WebhookNotification.Kind.PartnerMerchantDeclined:
        return this.subjectXmlForPartnerMerchantDeclined();
      case WebhookNotification.Kind.SubscriptionChargedSuccessfully:
        return this.subjectXmlForSubscriptionChargedSuccessfully(id);
      default:
        return this.subjectXmlForSubscription(id);
    }
  };

  WebhookTestingGateway.prototype.subjectXmlForAccountUpdaterDailyReport = function() {
    return "<account-updater-daily-report>\n  <report-date type=\"date\">2016-01-14</report-date>\n  <report-url>link-to-csv-report</report-url>\n</account-updater-daily-report>";
  };

  WebhookTestingGateway.prototype.subjectXmlForCheck = function() {
    return "<check type=\"boolean\">true</check>";
  };

  WebhookTestingGateway.prototype.subjectXmlForTransactionDisbursed = function(id) {
    return "<transaction>\n  <id>" + id + "</id>\n  <amount>100</amount>\n  <disbursement-details>\n    <disbursement-date type=\"datetime\">2013-07-09T18:23:29Z</disbursement-date>\n  </disbursement-details>\n</transaction>";
  };

  WebhookTestingGateway.prototype.subjectXmlForDisputeOpened = function(id) {
    return "<dispute>\n  <amount>250.00</amount>\n  <currency-iso-code>USD</currency-iso-code>\n  <received-date type=\"date\">2014-03-01</received-date>\n  <reply-by-date type=\"date\">2014-03-21</reply-by-date>\n  <kind>chargeback</kind>\n  <status>open</status>\n  <reason>fraud</reason>\n  <id>" + id + "</id>\n  <transaction>\n    <id>" + id + "</id>\n    <amount>250.00</amount>\n  </transaction>\n  <date-opened type=\"date\">2014-03-28</date-opened>\n</dispute>";
  };

  WebhookTestingGateway.prototype.subjectXmlForDisputeLost = function(id) {
    return "<dispute>\n  <amount>250.00</amount>\n  <currency-iso-code>USD</currency-iso-code>\n  <received-date type=\"date\">2014-03-01</received-date>\n  <reply-by-date type=\"date\">2014-03-21</reply-by-date>\n  <kind>chargeback</kind>\n  <status>lost</status>\n  <reason>fraud</reason>\n  <id>" + id + "</id>\n  <transaction>\n    <id>" + id + "</id>\n    <amount>250.00</amount>\n  </transaction>\n  <date-opened type=\"date\">2014-03-28</date-opened>\n</dispute>";
  };

  WebhookTestingGateway.prototype.subjectXmlForDisputeWon = function(id) {
    return "<dispute>\n  <amount>250.00</amount>\n  <currency-iso-code>USD</currency-iso-code>\n  <received-date type=\"date\">2014-03-01</received-date>\n  <reply-by-date type=\"date\">2014-03-21</reply-by-date>\n  <kind>chargeback</kind>\n  <status>won</status>\n  <reason>fraud</reason>\n  <id>" + id + "</id>\n  <transaction>\n    <id>" + id + "</id>\n    <amount>250.00</amount>\n  </transaction>\n  <date-opened type=\"date\">2014-03-28</date-opened>\n  <date-won type=\"date\">2014-09-01</date-won>\n</dispute>";
  };

  WebhookTestingGateway.prototype.subjectXmlForDisbursementException = function(id) {
    return "<disbursement>\n  <id>" + id + "</id>\n  <transaction-ids type=\"array\">\n    <item>afv56j</item>\n    <item>kj8hjk</item>\n  </transaction-ids>\n  <success type=\"boolean\">false</success>\n  <retry type=\"boolean\">false</retry>\n  <merchant-account>\n    <id>merchant_account_token</id>\n    <currency-iso-code>USD</currency-iso-code>\n    <sub-merchant-account type=\"boolean\">false</sub-merchant-account>\n    <status>active</status>\n  </merchant-account>\n  <amount>100.00</amount>\n  <disbursement-date type=\"date\">2014-02-10</disbursement-date>\n  <exception-message>bank_rejected</exception-message>\n  <follow-up-action>update_funding_information</follow-up-action>\n</disbursement>";
  };

  WebhookTestingGateway.prototype.subjectXmlForDisbursement = function(id) {
    return "<disbursement>\n  <id>" + id + "</id>\n  <transaction-ids type=\"array\">\n    <item>afv56j</item>\n    <item>kj8hjk</item>\n  </transaction-ids>\n  <success type=\"boolean\">true</success>\n  <retry type=\"boolean\">false</retry>\n  <merchant-account>\n    <id>merchant_account_token</id>\n    <currency-iso-code>USD</currency-iso-code>\n    <sub-merchant-account type=\"boolean\">false</sub-merchant-account>\n    <status>active</status>\n  </merchant-account>\n  <amount>100.00</amount>\n  <disbursement-date type=\"date\">2014-02-10</disbursement-date>\n  <exception-message nil=\"true\"/>\n  <follow-up-action nil=\"true\"/>\n</disbursement>";
  };

  WebhookTestingGateway.prototype.subjectXmlForSubMerchantAccountApproved = function(id) {
    return "<merchant_account>\n  <id>" + id + "</id>\n</merchant_account>";
  };

  WebhookTestingGateway.prototype.errorSampleXml = function(error) {
    return "<error>\n  <code>82621</code>\n  <message>Credit score is too low</message>\n  <attribute type=\"symbol\">base</attribute>\n</error>";
  };

  WebhookTestingGateway.prototype.subjectXmlForSubMerchantAccountDeclined = function(id) {
    return "<api-error-response>\n  <message>Credit score is too low</message>\n  <errors>\n    <merchant-account>\n      <errors type=\"array\">\n        " + (this.errorSampleXml()) + "\n      </errors>\n    </merchant-account>\n  </errors>\n  " + (this.merchantAccountSampleXml(id)) + "\n</api-error-response>";
  };

  WebhookTestingGateway.prototype.merchantAccountSampleXml = function(id) {
    return "<merchant_account>\n  <id>" + id + "</id>\n  <master_merchant_account>\n    <id>master_ma_for_" + id + "</id>\n    <status>suspended</status>\n  </master_merchant_account>\n  <status>suspended</status>\n</merchant_account>";
  };

  WebhookTestingGateway.prototype.subjectXmlForSubscription = function(id) {
    return "<subscription>\n    <id>" + id + "</id>\n    <transactions type=\"array\"></transactions>\n    <add_ons type=\"array\"></add_ons>\n    <discounts type=\"array\"></discounts>\n</subscription>";
  };

  WebhookTestingGateway.prototype.subjectXmlForSubscriptionChargedSuccessfully = function(id) {
    return "<subscription>\n    <id>" + id + "</id>\n    <transactions type=\"array\">\n      <transaction>\n        <status>submitted_for_settlement</status>\n        <amount>49.99</amount>\n      </transaction>\n    </transactions>\n    <add_ons type=\"array\"></add_ons>\n    <discounts type=\"array\"></discounts>\n</subscription>";
  };

  WebhookTestingGateway.prototype.subjectXmlForPartnerMerchantConnected = function() {
    return "<partner-merchant>\n  <merchant-public-id>public_id</merchant-public-id>\n  <public-key>public_key</public-key>\n  <private-key>private_key</private-key>\n  <partner-merchant-id>abc123</partner-merchant-id>\n  <client-side-encryption-key>cse_key</client-side-encryption-key>\n</partner-merchant>";
  };

  WebhookTestingGateway.prototype.subjectXmlForPartnerMerchantDisconnected = function() {
    return "<partner-merchant>\n  <partner-merchant-id>abc123</partner-merchant-id>\n</partner-merchant>";
  };

  WebhookTestingGateway.prototype.subjectXmlForPartnerMerchantDeclined = function() {
    return "<partner-merchant>\n  <partner-merchant-id>abc123</partner-merchant-id>\n</partner-merchant>";
  };

  return WebhookTestingGateway;

})(Gateway);

exports.WebhookTestingGateway = WebhookTestingGateway;

//# sourceMappingURL=webhook_testing_gateway.js.map