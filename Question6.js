// Write a JavaScript function called curry that takes a function as an argument and returns a curried
// version of that function. The curried function should accept arguments one at a time and return a new
// function until all arguments are provided. Then, it should execute the original function with all arguments.
// Test the curry function with a function that adds two numbers.


function curry(fn) {
    return function curried(a) {
        return function(b) {
            return fn(a, b);
        };
    };
}

// Example function to add two numbers
const add = (a, b) => a + b;

// Create curried version of the add function
const curriedAdd = curry(add);

// Test the curried function
const result = curriedAdd(5)(3); // Output: 8
console.log(result);
