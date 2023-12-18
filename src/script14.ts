
// program 1
function greet(par: any): any {
    return par
}
let o = greet(1)
let p = greet(true)
let q = greet("chinmay")

function greet2(nme: string) {
    return nme
}
let r = greet2("hello")

// program 2

function greet3<T>(arg: T): T {
    return arg
}
let q1 = greet3<string>("hello")
let q2 = greet3<number>(2)

// program 3
function addEE<T>(p1: T, p: T){
    if (typeof p1 == 'number' && typeof p == 'number') {
        console.log(p+p1)
        return p + p1
    }
    else if(typeof p1 == 'string' && typeof p == 'string'){
        return p + p1
    }
}
let q11e = addEE<number>(2, 4)
let q11e1 = addEE<string>("hello", "world")


//let q11f = addEE<string>("hello","world")

// program  3
class Box<T>{
    private content:T;
    constructor(co:T){
        this.content = co
    }
    getConten():T{
        return this.content
    }
}
let boxNumber = new Box<number>(42)
let boxString = new Box<string>("hello")

