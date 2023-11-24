"use strict";
// enum 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
if (Color.Blue) {
    console.log("blue color");
}
else if (Color.Green) {
    console.log("green color");
}
else if (Color.Blue) {
    console.log("blue color");
}
// any 
let numberA = 10;
let numberB = [22, 33, 44];
// void 
function additionCE() {
    console.log("hello");
    return true;
}
// null 
let apiReponse = null;
// undefined
let firstNameNew = undefined;
// writing functions with typescript 
// function declaration 
function additionJ(x, y) {
    console.log(x + y);
    return x + y;
}
let sum = additionJ(13, 45);
// function expression 
let additionK = function (x, y) {
    return x + y;
};
let sum2 = additionK(24, 45);
// optional parmeter
function greet(name, greeting) {
    // greeting ----> undefined
    if (greeting) {
        console.log("greeting value was  passed");
    }
    else {
        console.log("greeting value was not passed");
    }
}
greet("hello", "bye");
greet("bye");
// arrow function 
