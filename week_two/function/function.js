/**
 
Functions: Fundamantel building block in JS, allow you to encapsulate code into
resuable blocks, making your code more modular and easier to maintain. Here’s a detailed overview:

//*Function Declaration
*/

function greet(name) {
    return `Hello ${name}`
}
console.log(greet('Atul '));



/*
//*Function Expression
A function expression can be anonymous or named. 
It is often used to assign a function to a variable.
 */

const greet_new = function (name) {
    return `Hello ${name}`
}
console.log(greet_new('Lucky '));

//! -------------------------------------------- Arrow Functions ------------------------
/*
Arrow functions provide a shorter syntax and lexically bind the this value.
 They are especially useful for writing concise functions.

*/


/*

Diffrance b/w Arrow function and normanl function:

1.Arrow functions have a concise syntax and are defined using the => operator.

Advantages :
1. Concise Syntax: Arrow functions are shorter and easier to read, especially for simple functions.
2. Lexical this Binding: Arrow functions do not have their own this
 context; they inherit this from the parent scope. This is useful in 
 situations where you want to maintain the context of this.

 3. No arguments Object: Arrow functions do not have their own arguments object, which can
  be beneficial when you want to avoid using it.


Disadvantages:

No this, arguments, super, or new.target Binding: 
Arrow functions do not have their own bindings to this, arguments, super,
 or new.target. This can be a limitation in some cases.

 const obj = {
    value: 42,
    getValue: () => this.value // `this` is not bound to `obj`
};

console.log(obj.getValue()); // undefined
2. Not Suitable for Methods: Arrow functions are not suitable for defining methods
 in objects because they do not have their own this.

 const obj = {
    value: 42,
    getValue() {
        return this.value; // Use a normal function for methods
    }
};

console.log(obj.getValue()); // 42

3.Cannot be Used as Constructors: Arrow functions cannot be used as constructors and will
 throw an error if used with the new keyword.

 const Person = (name) => {
    this.name = name;
};

const person = new Person('John'); // TypeError: Person is not a constructor




*/

// function Person(){
//     this.age = 0;
//     setInterval(() => {
//         this.age++;
//         console.log(this.age);
//     }, 1000)

// }

let obj = {
    value: 25,
    arrow_function: () => {
        console.log("arrow functionthis => ", this.value)
    }
}
let obj1 = {
    value: 42,
    normal_function: function () {
        console.log("normal function ==> ", this.value)
    }

}
obj.arrow_function();
obj1.normal_function();

/*
Arrow Functions: Inherit this from the outer scope. Useful when you want to maintain the context of this from the enclosing scope.
Normal Functions: Have their own this context, which is determined by how the function is called. Useful for methods in objects and classes.

*/


const greet_arrow = (name = "Sandeep") => {
    return `Hello ${name}`

}
console.log(greet_arrow());


function normalFunction() {
    console.log(arguments)
}

const arrowFunction = () => {
    // console.log(arguments) // will through referance error
}
arrowFunction(1, 2, 3, 6, 54, 7, 7, 5);
normalFunction(1, 2, 3, 6, 54, 7, 7, 5);


//!---------------------------  Normal function- ------------------------------ ----------------

/*
Syntax
Normal functions can be defined using the function keyword

function add(a, b) {
    return a + b;
}
Advantages:
1.Own this Context: Normal functions have their own this context,
 which is useful for defining methods in objects and classes.
 const obj = {
    value: 42,
    getValue: function() {
        return this.value; // `this` refers to `obj`
    }
};

console.log(obj.getValue()); // 42

 2. Can be Used as Constructors: Normal functions can be used as constructors with the new keyword

 function Person(name) {
    this.name = name;
}

const person = new Person('John');
console.log(person.name); // John
3. Access to arguments Object: Normal functions have access to the arguments object, 
which contains all the arguments passed to the function.

function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3)); // 6



Disadvantages: 
1.Verbose Syntax: Normal functions
 can be more verbose, especially for simple operations

 2. Dynamic this Binding: The value of this can change depending on how the function is called,
  which can lead to unexpected



*/


const obj_ner = {
    value: 42,
    getValue: function() {

        console.log()
        return this.value;
    }
};

const getValue = obj_ner.getValue;
console.log("getValue ===> " ,  getValue()); // undefined (because `this` is not bound to `obj`)
console.log("getValue ===> " ,  obj_ner.getValue()); // print value)


function sum(...rest){
return rest.reduce((prev , next) => prev  + next);
}

console.log("sum ==>" , sum(2,5,6,5,4,78,9,6,544,58))



// !-------- ------------------- clouser-------------------

/*
Closures
A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope

*/
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
