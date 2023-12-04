// function addition(x,y){
//     console.log(x+y)
//     if(typeof x == "number" && typeof y == "number"){
//         console.log(x+y)
//     }
//     else {
//         console.log("incorrect input")
//     }
// }
// addition('10',10)


class Dog {

    breed
    constructor(bd){
        this.breed  = bd    
    }

    bark(){
        console.log("woof")
    }

}
let gr = new Dog("GR")
console.log(gr.breed)
gr.bark()