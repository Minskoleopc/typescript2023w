"use strict";
// program 1
class Dog {
    constructor(bd) {
        this.breed = bd;
    }
    bark() {
        console.log("woof");
    }
}
let gr = new Dog("GR");
console.log(gr.breed);
gr.bark();
// Program 2
// class Animal {
//     type:string;
//     constructor(ty:string){
//         this.type = ty
//     }
//     makeSound():void{
//         console.log("Make some sound..")
//     }
// }
// class DogA extends Animal{
// }
// let gr2 = new DogA("gr2")
// gr2.makeSound()
// console.log(gr2.type)
// program 3 
class Animal {
    constructor(ty) {
        this.type = ty;
    }
    makeSound() {
        console.log("Make some sound..");
    }
}
class DogA extends Animal {
    constructor(ty, lg) {
        super(ty);
        this.legs = lg;
    }
    makeSound2() {
        console.log("Bow Bow");
    }
    makeSound() {
        console.log("Make some sound..but from child");
    }
}
let gr2 = new DogA("gr2", 2);
gr2.makeSound();
console.log(gr2.type);
gr2.makeSound2();
console.log(gr2.type);
console.log(gr2.type);
// Program 3
// class BankAccount {
//     // Properties 
//     private balance: number = 0;
//     private accHolder:number;
//     protected accName:string;
//     public IFSCode:number
//     // constructor
//     constructor(accH:number,accN:string){
//         this.accHolder  = accH
//         this.accName = accN
//         this.IFSCode  = 123
//     }
// }
// let SBIee = new BankAccount(123,"chinmay")
// console.log(SBIee.balance)
// console.log(SBIee.accHolder)
// console.log(SBIee.accName)
// console.log(SBIee.IFSCode)
