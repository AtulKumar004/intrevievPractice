/*
JavaScript provides three ways to declare
 variables: var, let, and const. Each has its
characteristics, advantages, and disadvantages, and they are used in different
 contexts depending on the specific needs of the code

*/
// ! 1. var: var is the oldest way of declaring variables in JavaScript, dating back to the early versions of the language.+

// ? Characteristics:
/* 
Function-Scoped: Variables declared with var are scoped to the function
 in which they are declared. If declared outside any function, they are global-scoped.
Hoisting: Variables declared with var are hoisted to the top of their scope.
 This means they are accessible even before the declaration line, but 
 they are initialized with undefined.
Re-declaration: Variables declared with var can be re-declared
 within the same scope without causing an error.
*/

var a = 10;
var a = 25; // redclare withoue error
console.log(a)

// ! Let: let is part of the ES6 (ECMAScript 2015) standard and is intended to be a replacement for var

/*

? Characteristics:

Block-Scoped: Variables declared with let are scoped to the
 block in which they are declared (e.g., inside a loop or an if
  statement). This is a key difference from var.

No Hoisting (In the same sense as var): Variables declared with 
let are also hoisted but are not initialized, meaning accessing
 them before their declaration results in a ReferenceError.
 
No Re-declaration: You cannot re-declare a variable with let in the same scope, reducing the risk of accidental overwrites.

*/

if (true) {
    let b = 10;
    // let b= 20; // through an refreance errro

}

let b = 30; // this b is not in same block as above b; 

/*
? Advantages:

Block Scoping: Prevents variables from leaking out of their intended
scope, reducing potential bugs and making the code easier to understand
 and maintain.

More Predictable Behavior: let does not have the same hoisting
issues as var, making its behavior more predictable, especially
in complex code.

When to Use:

Modern JavaScript Development: Use let when you need a variable
that may change and is limited to a specific block of code.
It is ideal for loops, conditional statements,
 and other block-scoped environments.
*/


// ! 3. const : const is also part of the ES6 standard and is used for declaring variables that should not change after being initialized.


/*
? Characteristics:

Block-Scoped: Like let, const is block-scoped.

No Reassignment: Variables declared with const cannot 
be reassigned a new value after their initial declaration.
 However, this does not mean the value itself is immutable 
 if it’s an object or array—only the reference to it is constant.

Hoisting: const is also hoisted but not initialized,
 similar to let, leading to a ReferenceError if accessed
  before declaration.

*/

const c = 10;
// c=  5; // through an  refarance error 
console.log(c);

/*
Advantages:

Immutable References: Prevents accidental reassignment, which can help
 avoid certain types of bugs.
Readability and Maintainability: Clearly signals to other developers
 that the value of the variable should not change, making the code 
 easier to understand.


 Disadvantages:

Immutability Confusion: While const prevents reassignment, it does 
not make objects or arrays immutable. Developers might mistakenly 
assume the entire data structure is immutable.

Browser Support: Similar to let, const might not be supported in very old browsers.

 */
