// Generated by CoffeeScript 1.10.0
var AttributeSetter, Plan,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

AttributeSetter = require('./attribute_setter').AttributeSetter;

Plan = (function(superClass) {
  extend(Plan, superClass);

  function Plan() {
    return Plan.__super__.constructor.apply(this, arguments);
  }

  return Plan;

})(AttributeSetter);

exports.Plan = Plan;

//# sourceMappingURL=plan.js.map