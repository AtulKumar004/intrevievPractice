// Functional scope and block scope

/*
Functional scope :Functional scope refers to the visibility of a variable  whithin a function .
In languages like JavaScript, variables declared with var are 
function-scoped. This means that a variable declared inside a function 
is only accessible within that function.

*/

function funcScope() {
    var val = 0;
    console.log(val); // This works
}
funcScope();

// console.log(val); /// This will throw an error

/*
Advantages: 
Encapsulation: Variables are contained within the function, preventing unintended 
interference from other parts of the code.

2. Memory Management: Variable are destroyed once the function execution is complete ,
freeing up memory.
Disadvantages: 
Limited Reusability: Variables cannot be accessed outside the function,
 which might require passing data through function parameters.
Potential for Hoisting Issues: Variables declared with var are 
hoisted to the top of their function scope, which can lead to unexpected behavior.

 
 */


// ! -------------------------------------------- Block scope ----------------------


/*
Block scope refers to the visibility of variables within a block of code, typically defined by curly braces {}. In languages like JavaScript,
 variables declared with let and const are block-scoped.

*/
{
    let blockScopedVar = "I'm only accessible within this block";
    console.log(blockScopedVar); // This works
}
// console.log(blockScopedVar); // This will throw an error

/*
Advantages:
Better Control: Variables are only accessible within the block they 
are declared in, reducing the risk of accidental modifications.
No Hoisting Issues: Variables declared with let and const are not 
hoisted, leading to more predictable behavior.

Disadvantages:
Potential Overhead: More frequent variable declarations 
can lead to slightly increased memory usage.
Complexity: Managing multiple block-scoped variables 
can make the code harder to read and maintain.
*/