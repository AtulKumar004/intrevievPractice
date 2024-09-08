/*
1. for...in loop
The for...in loop is used to iterate over the enumerable properties 
of an object. It returns the property keys (names) of the object.

Use:
Useful when you need to iterate over all property names of an object.
Can be used on both objects and arrays, but it’s primarily used for
 objects.

Advantages:
Simple syntax for looping through object properties.
Automatically loops through all enumerable properties of an object, 
including inherited properties.
*/
const person = { name: 'Alice', age: 25, city: 'New York' };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

/*
Disadvantages:
Iterates over inherited properties as well, which might not always be desired.
Not suitable for iterating over array elements (though it can be done).
*/

//! -------------------------------- Object.keys()-----------------------

/*
2. Object.keys()
The Object.keys() method returns an array of a given object's own enumerable property 
names, i.e., the keys.

Use:
Used when you only need to iterate over the keys of an object.

Advantages:
Ignores inherited properties, only returns the object's own properties.
Can be used with array methods like forEach(), map(), etc.


 */
const person2 = { name: 'Alice', age: 25, city: 'New York',c : {a: 1, b: 5} };

let val = Object.keys(person2).map(key => {
  console.log(key, person2[key]);
  return [key , person2[key]]
});
console.log(val)

/*
Disadvantages:
Only iterates over own properties and skips non-enumerable properties.
It returns an array, so for large objects, it may take more memory.
*/

// name Alice
// age 25
// city New York


//! -----------------------------------Object.values()-----------------------------------------

/*
The Object.values() method returns an array of the given object's own 
enumerable property values. 


Use:
Useful when you only care about the values of an object’s properties.
Advantages:
Provides an easy way to get values without needing to reference keys.
Can be combined with array methods for efficient data manipulation.
*/
const person3 = { name: 'Alice', age: 25, city: 'New York' };

Object.values(person3).forEach(value => {
  console.log(value);
});
// Output:
// Alice
// 25
// New York


/*

Disadvantages:
Similar to Object.keys(), it only works with own enumerable properties.
Does not provide keys, only values.
 */




//!--------------------------------------------- Object.entries() --------------------------

/*

The Object.entries() method returns an array of the object's own enumerable property 
[key, value] pairs.

Use:
Useful for iterating over both keys and values simultaneously.
Advantages:
Combines the functionality of Object.keys() and Object.values(),
 making it ideal for iterating over both keys and values in one go.
Can be destructured for better readability.

 */

const person4 = { name: 'Alice', age: 25, city: 'New York' };

Object.entries(person4).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


// Destructuring the key and value directly in the loop
for (const [key, value] of Object.entries(person4)) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Alice
// age: 25
// city: New York

// Output:
// name: Alice
// age: 25
// city: New York

/**
 Disadvantages:
The result is an array of arrays, which might be an overhead if you only need keys or values.
 */

