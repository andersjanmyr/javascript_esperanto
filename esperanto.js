
var Esperanto = Esperanto || {};

Esperanto.Lab = function() {
  var privVar = "example";
  function privFunc() {
    return privVar;
  }

  return {
    example: function() {
      return privFunc();
    },

    _example: function() {
      return "_example";
    } // Add a comma after the brace when removing the comment below.

    // 2. mixin: function(mixee, mixin) {}

  }

}()

//1. Array.prototype.remove = function(item) {}


//3. Array.prototype.convert: function(conversionFunction) {}


//4. Function.prototype.curry = function() {}

