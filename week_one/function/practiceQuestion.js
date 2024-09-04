function outer(){
    let count = 0;
    return function (){
        count++;
        console.log(count);
    }
}


let counter = outer()
counter()


const add = (rest) => {
    return rest.reduce((prev , next) => prev + next);
}


let arr = [2,5,8,9,6,3,2,5,4,7,88,55,6,33,66,95,88,4,1,2,5,58];
console.log("add r =>",  add(arr))
function sortingArray(arr){

    setTimeout(() => {
        return arr.filter((val) => val % 2 === 0);

    }, 1000)


}

function HOC(num_arr , callback){
    return callback(num_arr);

}

console.log("HOC ===>" , HOC(arr , sortingArray));



function varHoast(){
    console.log(val) // will print undefined
    console.log(val_2) // will through refrence error, because let variable is in temporal dead zobe till this
    var val = 25;
    let val_2 = 52

}



function find_first_even(arr){
    return arr.find(val => val % 2 == 0);
}