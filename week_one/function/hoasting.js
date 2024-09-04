/*
What is hoasting ? 

Hoisting is a JavaScript mechanism where variables and function declarations
 are moved to the top of their containing scope during the compilation phase.
  This means that you can use variables and functions before they 
  are actually declared in the code.

  Variable Hoisting
In JavaScript, variable declarations (using var) are hoisted
to the top of their function or global scope. However, only 
the declaration is hoisted, not the initialization.


Function Hoisting
Function declarations are fully hoisted, meaning
 both the function name and the body are moved to the top of their scope.
*/
hoistedFunction(); // Output: "I am a hoisted function"

function hoistedFunction() {
    console.log("I am a hoisted function");
}


/*

Function Expressions and Hoisting
Function expressions, whether named or anonymous, are not
 hoisted in the same way. Only the variable declaration is
  hoisted, not the function assignment.

*/
console.log(hoistedFunctionExpression); // Output: undefined
var hoistedFunctionExpression = function() {
    console.log("I am not hoisted like a function declaration");
};
hoistedFunctionExpression(); // Output: "I am not hoisted like a function declaration"
