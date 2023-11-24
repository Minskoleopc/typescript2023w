// enum 

enum Color {
    Red ,
    Green ,
    Blue
}

if(Color.Blue){
    console.log("blue color")
}
else if(Color.Green){
    console.log("green color")
}
else if(Color.Blue){
    console.log("blue color")
}

// any 
let numberA:number = 10;
let numberB:any = [22,33,44];

// void 
function additionCE():any{
    console.log("hello")
    return true
}

// null 
let apiReponse:null = null;
// undefined
let firstNameNew:undefined = undefined

// writing functions with typescript 



// function declaration 

function additionJ(x:number,y:number){
    console.log(x+y)
    return x + y
}
let sum  = additionJ(13,45)

// function expression 
let additionK = function(x:number,y:number){
    return x + y
}
let sum2 = additionK(24,45)

// optional parmeter
function greet(name:string , greeting?:string){
    // greeting ----> undefined
    if(greeting){
        console.log("greeting value was  passed")
    }
    else {
        console.log("greeting value was not passed")
    }
}
greet("hello","bye")
greet("bye")








// arrow function 





