"use strict";
// Section - 1
// Varibales and types 
// Function and arrow functions 
// Section - 2
// Advances types 
// enums 
// unions  and intersection types
// type guards 
// type aliases
// generics 
// enum -- named const varibles 
// Numeric enum 
// program 1
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 5] = "Up";
    Direction[Direction["Down"] = 6] = "Down";
    Direction[Direction["Left"] = 7] = "Left";
    Direction[Direction["Right"] = 8] = "Right";
})(Direction || (Direction = {}));
let myDirection = Direction.Up;
console.log(myDirection);
console.log(Direction.Down); // 2
console.log(Direction.Left); // 3
console.log(Direction.Right); // 4
// program 2 
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
let myColor = Color.Blue;
console.log(Color.Red);
console.log(Color.Green);
console.log(Color.Blue);
// program 3 
// Hetrogeneous Enums 
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status["NotFound"] = "Not_Found";
    Status["Error"] = "Error";
})(Status || (Status = {}));
let myStatus = Status.Success;
console.log(Status.Success);
// program 4 
// enum with function
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["warning"] = 2] = "warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel || (LogLevel = {}));
function logMessage(message, a) {
    console.log(`${message} ${a}`); //1
    // console.log(LogLevel[a])
}
logMessage("this is info message", LogLevel.Info);
logMessage("this is info warning", LogLevel.warning);
logMessage("this is info message", LogLevel.Error);
