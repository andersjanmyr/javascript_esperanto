
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
						
		// mixin: function(mixee, mixin) {}		
		
		// convert: function(conversionFunction) {}
		
	}
	
}()


//Array.prototype.remove = function(item) {}


//Function.prototype.kurry = function() {}

