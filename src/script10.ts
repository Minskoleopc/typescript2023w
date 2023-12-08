// // program 1

// class Myclass {
//     public myProperty:string;
//     constructor(){
//         this.myProperty ="hello" 
//     }
//  }
//  let r = new Myclass()
// console.log(r.myProperty)
// // program 2 
// // private 
// class myClass2 {
//     private myPrivateProperty:string;
//     constructor(){
//         this.myPrivateProperty = "hello form p"
//     }

//     // access the private field in public method

//     public getValue(){
//         return this.myPrivateProperty
//     }

// }
// let b  = new myClass2()
// //console.log(b.myPrivateProperty) // not accessible
// b.getValue()

// // program 3
// // protected 


// class myClass3 {
//     protected age:number;
//     constructor(ag:number){
//         this.age = ag
//     }
//     private displayBalance():number{
//         return 10000
//     }
//     public displayAge(){
//         this.displayBalance()
//         return this.age
//     }

// }
// class myClass4 extends myClass3{
//      public displayAge2(): number {
//         //private method and properties are not accessiblel outside class 
//         // protected methods and propeties are accessible within the inherited properties
//         return this.age 
//     }
// }


// // interface ---- complete abstraction
// // partially hide -- abstract class 
// abstract class worldBank {
//     // abstract method 
//     abstract loan():number
//     abstract save():number
//     displayCountryName(){
//         return "India"
//     }
// }

// class SBIeee extends  worldBank {
//     loan():number{
//         console.log('i am loan from SBI')
//         return  10
//     }
//     save():number{
//         console.log('i am loan from SBI')
//         return  20
//     }
//     branchName(){
//         return "nagpur"
//     }
// }

// // We cannot have instance of abstract class 
// let  sbiA = new SBIeee()
// sbiA.branchName()
// sbiA.loan()
// sbiA.save()
// sbiA.displayCountryName()