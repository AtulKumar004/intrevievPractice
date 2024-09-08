//!------------------------------------------------- Prototype chain ----------------------

function Animals(name) {
    this.name = name

}

Animals.prototype.speak = function(){
    console.log(this.name , " make a noise")
}


let dog = new Animals("dog");
dog.speak();
console.log("dog ====> " , dog);
