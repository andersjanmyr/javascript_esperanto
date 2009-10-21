
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
		},
				
		// mixin: function(mixee, mixin) {}		
		mixin: function(mixee, mixin) {
			for (var name in mixin) {
			    if (name.charAt(0) != '_') 
			    	(mixee[name] = mixin[name]); 
			}
		},
		
		// convert: function(conversionFunction) {}
		convert: function(conversionFunction) {
			var newArr = [];
			for (var i=0; i < this.length; i++) {
				newArr.push(conversionFunction(this[i]));
			};
			return newArr;
		}
		
	}
	
}()


//Array.prototype.remove = function(item) {}
Array.prototype.remove = function(item) {
    for (i = 0; i < this.length; i++) {
        if (item == this[i])  this.splice(i, 1);
    }
	return this;
}


//Function.prototype.kurry = function() {}
Function.prototype.kurry = function() {
	var slice = Array.prototype.slice;
    var fn = this;
    var args = slice.apply(arguments);
    return function() {
        return fn.apply(null, args.concat(slice.apply(arguments)));
    };
}
