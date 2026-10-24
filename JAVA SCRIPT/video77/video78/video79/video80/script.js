// let obj = {
//     a: 1,
//     b: "harry"
// }

// console.log(obj)

// let animal = {
//     eat: true 
// };

// let rabbit = {
//      jumps: true
// };

// rabbit._proto_ = animal;

class Animal{
    constructor(){
        this.name = name
        console.log("object is created...")
    }
    eats(){
        console.log("Kha raha hoon")
    }

     jumps(){
        console.log("Kood raha hoon")
    }
}


class Lion extends Animal{
    constructor(name){
        super(name)
        this.name = name
        console.log("Object is created and he is a lion...")
    }

}
eats(){
    super.eats()
    console.log("kha raha hoon roar")
}

let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)