// Data Iteration Methods 
// 1. ForEach
/*
Porpose: Executes a function for each array elem , but does not return anything.

Use Case: When you want to perform an action on each array element but don’t 
need a new array returned.

*/

let arr = [1, 2, 5, 6, 85, 8, 7, 8, 52, 3, 5, 48, 8, 7, 4, 2,]
let val = arr.forEach((num, idx, arr) => {
    if (num === 2) return; // will not work this line
    num = num * 2;
    arr[idx] = num;
});
console.log(arr)

/*

Advantages:
Simple to use for side effects like logging or modifying external variables.


Disadvantages:
Does not return a new array (no chaining possible).
Cannot break out of the loop early (no return or break).
*/

// !-------------------------------- Map-----------------------------------------

/*
Purpose: Creates a new array with the results of applying a function to every 
element in the original arr.

Use Case: When you need to transform each element in the array and return a new array.

*/

let double = arr.map((num) => num * 3);
console.log(double);

/*
Advantages:
Returns a new array.
Ideal for transforming data.
Disadvantages:
It processes all elements, even if you don't need all of them (no short-circuiting).
Less efficient than forEach() for simple actions.
*/

//! -------------------------------filter -----------------------

/*
Purpose: Creates a new array with elements that pass the condition in a provided function.
Use Case: When you want to extract a subset of elements that match a condition.

*/
let num_arr = [4, 8, 65, 9, 87, 5, 9, 89, , 54, 8, 8, 8, 98, 988]
let arr_mod = num_arr.filter((val) => val % 2 !== 0);
console.log(" filter ===>", arr_mod);
/*
Advantages:
Filters out elements that don’t meet a condition.
Returns a new array with filtered values.

Disadvantages:
Processes all elements even after finding all necessary matches.
Inefficient for large datasets if many elements are irrelevant.

*/


//! -------------------------------------- reduce ------------------------------/

/*
Purpose: Reduces an array to a single value by applying a function to each element, 
along with an accumulator.

Use Case: When you need to aggregate data (e.g., summing, product, finding max/min).

*/
let reduce_arr = [3, 4, 87, 996, 5, 7, 546, 87];
let reduce_val = reduce_arr.reduce((prev, next) => prev * next)
console.log(reduce_val);

// reduce method example

// 1. Find Maximum Value;
let max_val = reduce_arr.reduce((prev, next) => (prev > next ? prev : next), reduce_arr[0])
console.log("max_val ===>", max_val);

//2. Flatten an Array :You can flatten a nested array:

const nestedArray = [[1, 2], [3, 4], [5], [45, [54]]];

let flatArray = nestedArray.reduce((prev, next) => prev.concat(next), []);
let flatArray2 = flatArray.reduce((prev, next) => prev.concat(next), []);
console.log("flatArray ==>", flatArray2);


//3  Count Occurrences : You can count the occurrences of each element in an array:

let fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana'];
// simple method 
let obj = {};
fruits.forEach((val) => {
    if (obj[val]) {
        obj[val] = obj[val] + 1;
    } else {
        obj[val] = 1;
    }
})

console.log(obj);

// with reduce

let new_obj = fruits.reduce((prev, fruit) => {
    prev[fruit] = (prev[fruit] || 0) + 1;
    return prev
}, {});
console.log(new_obj);


//4: Group Objects by Property , Group an array of objects by a specific property:

const people = [
    { name: 'John', age: 21 },
    { name: 'Jane', age: 22 },
    { name: 'Jane', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Jane', age: 30 },
    { name: 'Jane', age: 35 },
    { name: 'Jim', age: 21 },
    { name: 'Jim', age: 28 },
];


const groupedByAge = people.reduce((acc, person) => {
    acc[person.age] = acc[person.age] || [];
    acc[person.age].push(person);
    return acc;
}, {})

console.log(groupedByAge);


let grouped_people_obj = {};
people.forEach((obj) => {
    grouped_people_obj[obj.age] = grouped_people_obj[obj.age] || [];
    grouped_people_obj[obj.age].push(obj);
})

console.log(grouped_people_obj);

// 7: . Transform Array into Object: Convert an array into an object:

const transformArr = ['a', 'b', 'c'];
// simple method
let transformObj = {};
transformArr.forEach((val, idx) => transformObj[idx] = val);
console.log("transformRes ===>", transformObj);

// by reduce

let transformObjNew = transformArr.reduce((acc, next, idx) => {
    acc[idx] = next;
    return acc;
}, {});

console.log("transformObjNew ==>", transformObjNew);

// 8 Find Average of Array Elements, Calculate the average of all elements:
const numbers = [10, 20, 30, 40];
let numbers_sum = numbers.reduce((acc, item) => acc + item);
let average = numbers_sum / numbers.length;
console.log(average)


//! ------------------------------------------------ Find --------------------------

/*
Purpose: Returns the first element in the array that satisfies a provided condition.

 */
const findNumbers = [1, 2, 3, 4, 5];
const firstEven = findNumbers.find((num) => num % 2 === 0);
console.log(firstEven);  // Output: 2

/**
 *
 Advantages:
Stops iteration after finding the first match (more efficient than filter()).
Useful for searching.
Disadvantages:
Returns only the first match, not multiple matches.
Returns undefined if no match is found.
 */




//! ---------------------------------------------- some -----------------------------

/**
 Purpose: Checks if at least one element in the array passes a provided condition (returns a boolean).
Use Case: When you need to check if any element meets a condition.

 */

const someNumbers = [1, 2, 3, 4, 5];
const hasEven = someNumbers.some((num) => num % 2 === 0);
console.log(hasEven);  // Output: true

/*
Advantages:
Stops after the first match is found (efficient).
Returns true/false based on the presence of matches.
Disadvantages:
Doesn’t return the matching elements, only a boolean.
May require an additional method to get the actual matching element.
 */


// ! --------------------------------------------------------------- 
/*
Purpose: Checks if all elements in the array pass a provided condition (returns a boolean).
Use Case: When you need to verify if every element meets a condition.
*/
const Everynumbers = [2, 4, 6, 8];
const allEven = Everynumbers.every((num) => num % 2 === 0);
console.log(allEven);  // Output: true

/*
Advantages:
Stops if it finds a single element that fails the condition.
Efficient for validating all elements.

Disadvantages:
Returns only a boolean, not the actual elements.
May not be useful when only part of the array meets the condition.
*/






