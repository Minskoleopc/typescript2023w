// program 1

// function identity(arg: any): any {
//     return arg
// }

// function identity2(a: number): number {
//     return a
// }

// // program 1 

// function identityGenerics<T>(arg: T): T {
//     return arg
// }
// let a11 = identityGenerics<number>(124)
// let b11 = identityGenerics<string>('123')

// program 2
// class Box<T>{
//     private content:T
//     constructor(x:T){
//         this.content = x
//     }

//     getContent():T{
//         return  this.content
//     }

// }
// let numberBox = new Box<number>(123)
// let stringBox = new Box<string>("hello")
// let q = numberBox.getContent()
// let q2 = stringBox.getContent()



// program 3
// class Box<T,U>{
//     private content: T
//     private content2:U
//     constructor(x: T,y:U) {
//         this.content = x
//         this.content2 = y
//     }

//     getContent(): T {
//         return this.content
//     }

//     getContent2(): U {
//         return this.content2
//     }


// }
// let numberStringBox = new Box<number,string>(123,"hello")
// let numberStringBoxE = new Box<number,number>(123,235)
// let numberStringBoxE2 = new Box<string,string>("hello","hello")

// let q = numberStringBox.getContent()
// let q2 = numberStringBox.getContent2()
