
new Test.Unit.Runner({	

	setup: function() {
		// Adds the method assertArrayEqual for asserting arrays.
		this.assertArrayEqual = function(expectedArray, actualArray) {
			this.assertEqual(expectedArray.length, actualArray.length, "Array length differs.");
			for (var i = 0; i < expectedArray.length; i++)
				this.assertEqual(expectedArray[i], actualArray[i], "Array element " + i + " differs.")
		}
	},
	
	// Example test, this should be green.
 	testExample: function() {
		this.assertEqual("example", Esperanto.Lab.example());
  	},

	// Add the method remove to the Array.prototype. Use splice!
	testArrayRemove: function() {
		this.assertArrayEqual(["a", "b", "d"], 
							  ["a", "b", "c", "d"].remove("c"));
	},
	
	// Add the method mixin to the Esperanto.Lab object. 
	// The method should add all properties of the mixin to the 
	// mixee object, EXCEPT the ones starting with _.
	testMixin: function() {
		var mixee = {};
		Esperanto.Lab.mixin(mixee, Esperanto.Lab);
		this.assertNotNull(mixee.example);
		this.assertEqual(typeof mixee.example, 'function');
		this.assertEqual("example", mixee.example());
		this.assertUndefined(mixee._example);
	},
	
	// Add the function convert to the Esperato.Lab object
	// Convert applies a function fo every element of an array 
	// and returns the results as a new array.
	testMixinConvertToArray: function() {
		Esperanto.Lab.mixin(Array.prototype, Esperanto.Lab);
		this.assertNotNull(Array.prototype.convert);
		this.assertEqual(typeof Array.prototype.convert, 'function');
		this.assertArrayEqual(["ONE", "TWO", "THREE"], ["one", "two", "three"].convert(String.toUpperCase));		
	},
	
	// Add the method kurry to the Function.prototype
	// Kurry applies the arguments given to the function
	// and returns a new function with these arguments preset.
	testKurry: function() {
		function add(a, b) { return a + b;}
		var addThree = add.kurry(3);
		this.assertEqual(7, addThree(4));
	}
	
	

});
