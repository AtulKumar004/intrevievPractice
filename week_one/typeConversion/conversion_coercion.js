// ! Explicity type
/*
In javascript Cnversion and Coercion are both process of changing
value of one type to another. So the diffrence b/w them is , it is type of implicity
or explicity.

Explicitly or Conversion  : When a deveploer intentialy changing value of one type
to another through javascript built in function .
 */
// Converting a number to a string
let num = 42;
let str =  String(num);
console.log(typeof num ," , ",  typeof str);

// Converting a string  to a number
let strNum = "3.14"
let numFloat = Number(strNum);
console.log(typeof numFloat  ,  "   " , numFloat);
// Converting a boolean to a string
let bool = false;
let strBool = String(bool);
let numBool = Number(bool);
console.log(typeof strBool, " | ",typeof numBool );
console.log( strBool, " | ", numBool );
// Converting a number to a boolean

let boolNum = undefined;
let res = Boolean(boolNum)

console.log( boolNum, " | ", res );

/*
Above are the example of Explicitly type conversion 


*/
//  ! Implicity

/*
Type coercion: Javascript autometically convert one type to 
another type behind the scene to performe operation


*/
// **Implicit coercion in addition
let x=  "5"
let b = y = 10;
let result = x + y;
console.log(result)

// **Implicit coercion in comparison

let isEqual= x == 5; // will be false if x === 5
console.log(isEqual)
// **Implicit coercion in boolean context

let z = "47478"
if(z){
    console.log("This is true")
}
// **Implicit coercion in subtract
let l = 5;
let m = "55";
let c =  m - l;
console.log(c);






