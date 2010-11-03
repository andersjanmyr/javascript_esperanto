$(function(){

  module("Setup");

  test("A sample test, should be green!", function() {
    same(Esperanto.Lab.example(), "example", "Initial setup working");
  });

  module("Lab");

  // 1. Add the method remove to the Array.prototype. Use slice, or splice!
  // Hint: this.splice(i, 1) removes element at i.
  test("Array.prototype.remove", function() {
    same(["b", "c", "d"], ["a", "b", "c", "d"].remove("a"), "First element removed");
    same(["a", "b", "d"], ["a", "b", "c", "d"].remove("c"), "Middle element removed");
    same(["a", "b", "c"], ["a", "b", "c", "d"].remove("d"), "Last element removed");
  });


  // 2. Add the method mixin to the Esperanto.Lab object.
  // The method should add all properties of the mixin to the
  // mixee object, EXCEPT the ones starting with _.
  // Hint: for (var key in mixin)
  test("Esperanto.Lab.mixin", function() {
    var mixee = {};
    Esperanto.Lab.mixin(mixee, Esperanto.Lab);
    ok(mixee.example, "Property 'example' of mixee should have a value");
    equals(typeof mixee.example, 'function', "'example' of mixee is a function");
    equals(mixee.example(), "example", "The returned value should be 'example'");
    equals(mixee._example, undefined, "_example should not be defined");
  });


  // 3. Add the function map to the Array.prototype object
  // Map applies a function to every element of an array
  // and returns the results as a new array.
  // The function is then mixed into array prototype.
  test('Array.prototype.map', function() {
    ok(Array.prototype.map, "map should be defined");
    equals(typeof Array.prototype.map, 'function', "map should be a function");
    var toUpperCase = function(s) {return s.toUpperCase()};
    same(["one", "two", "three"].map(toUpperCase), ["ONE", "TWO", "THREE"], "Map should apply the function toUpperCase to each element and return the result");
    var length = function(s) {return s.length};
    same(["one", "two", "three"].map(length), [3, 3, 5], "Map should apply the function length to each element and return the result");
  });

  // Add the method curry to the Function.prototype
  // Curry is the same as partial application.
  // If not all elements of the function are given a new function is returned.
  // The new function can then be called again with additional arguments
  // while the first argument are already set.
  test("Function.prototype.curry", function() {
    ok(Function.prototype.curry, "curry should be defined");
    equals(typeof Function.prototype.curry, 'function', "curry should be a function");
    function sum(){
      for(var s = 0, i = arguments.length; i > 0;s += arguments[--i]);
      return s;
    };
    var addThree = sum.curry(3);
    equals(typeof addThree, 'function', "addThree should be a function");
    equals(addThree(4), 7, 'curried function should add properly');
    equals(addThree(8), 11, 'curried function should add properly');

    var addSeven = addThree.curry(4);
    equals(typeof addSeven, 'function', "addSeven should be a function");
    equals(addSeven(-7), 0, 'doubly curried function should add properly');
  });



});

