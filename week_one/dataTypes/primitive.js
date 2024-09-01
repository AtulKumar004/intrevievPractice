/**
 we have broad type of data types which devided into two part. 
 one is premitive data type and other is noo primitive data type 
 
 Q: what is primitive and non primitive data type ,I mean why
  Number and String lie in Primitive and array in non primitive
 
 
*? Primitive Data type are immutuable , mean it can not be changed 
 *? once it has created,
 
 */
let a = 10;
a = 20;
console.log(a);
/*
In above example it seem that 'a' value is update but let is Primitive 
data type that should not soppose to change , atleast as per deffination
yes, it seem to changed but , in BE it create a new memory which 
store '20' and leave old memory as it is which has value store '10'
!Characteristics of Primitive Data Types:
1. Immutable: The value itself cannot be altered after it's created.
2. Stored by value: When you assign a primitive value to a variable,
 the value is stored directly in the memory allocated for that variable.
3. Independent of each other: Changing one primitive variable does not 
affect any other variables, even if they were initially assigned
 the same value.
 */

//  ! Example of Primitive Data types 
/*
1. Number: Any number wheter an intiger or float
*/

let int = 5;
let float = 5.5;
console.log(typeof (int), typeof (float)); // Both are numbers

// 2. String: Represents text, a sequence of characters.

let str = "dkjdklhdkjashdias";
console.log(typeof (str)) // type string 
// 3. Boolean : Represents true or false values.
let bool = true;
console.log(typeof (bool)) // type boolean
// 4. Undefined: Represents a variable that has been declared but not yet assigned a value.
let und;
console.log(typeof (und)) // type undefined
//5. Null: Represents the intentional absence of any object value
let null_val = null;
console.log(typeof(null_val)) ;
// 6. Symbol: Represents a unique identifier.
let symbol_key = Symbol('uniqe');
console.log( symbol_key,  "type => ", typeof(symbol_key)) ;

let obj ={
    id :symbol_key,
    value: "fhkjd"
}
console.log( obj ) ;

// 7. BigInt: Represents very large integers
let big_int_a = 1234567890123456789012345678901234567890n;
let big_int_b = BigInt(546578)
console.log( big_int_a,  "type => ", typeof(big_int_a)) ;
console.log( big_int_b,  "type => ", typeof(big_int_b)) ;





