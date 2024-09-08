let arr = [1, 5, 4, 6, 5, 45, 78, 5, "6"];
let res = arr.some((val) => typeof (val) === "string");
console.log(res);

let res2 = arr.every((val) => typeof (val) === 'number');
console.log(res2);


let obj = {
    "id": 102,
    "name": "John Doe",
    "age": 29,
    "city": "New York",
    "isActive": true,
    "hobbies": ["reading", "gaming", "hiking"]
}



for(let key in obj){
    console.log( `key: ${key}, value : `, obj[key]);

};


let obj_arr = Object.keys(obj).map((key) => key);
let obj_arr_values = Object.values(obj).map((value) => value);
console.log("obj_arr ===>" ,obj_arr)
console.log("obj_arr_values ===>" ,obj_arr_values);


for(let [key , value] of Object.entries(obj)){
    console.log(key , " : " , value)
}


let new_arr = [2,6,86,4,8,9,5,4,52,5,5,5,2,66,5];

let set = new Set(new_arr);
console.log('set ===>',  [...set]);
let sum = [...set].reduce((acc, next) => acc + next, 0);
console.log(sum);


const nestedObject = {
    name: 'Alice',
    age: 25,
    address: {
      street: '123 Main St',
      city: 'New York',
      postal: {
        zip: 10001,
        country: 'USA'
      }
    },
    hobbies: ['reading', 'cycling'],
    education: {
      degree: 'Bachelor',
      university: {
        name: 'XYZ University',
        location: 'Boston'
      }
    }
  };


  function printObj(objData){

    for(let [key, value] of Object.entries(objData)){
        if(typeof objData[key] === 'object' && typeof objData[key] !== null){
            printObj(objData[key])
        }else{
            console.log("key: ", key, " value: " , value)
        }
    }

  }

  printObj(nestedObject)


