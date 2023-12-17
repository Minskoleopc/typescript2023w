// enum

// // program 1
// //numeric
// enum Direction {
//     Up,
//     Down , 
//     Left,
//     Right
// }
// let movement:Direction = Direction.Down
// console.log(movement)

// // program 2
// enum Color 
// {
//     Red = "RED",
//     Green = "GREEN",
//     Blue = "BLUE"
// }

// let myFv:Color = Color.Red
// console.log(myFv)

// //let x = 10
// //const x = 10

// // program 3
// enum Status {
//     Active = 1,
//     Inavtive = 0,
//     Pending = 2
// }
// let currentStatus:Status = Status.Active
// console.log(currentStatus)

// program 

enum WeekDay {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// retrive the value b index
//let a:WeekDay= WeekDay[new Date().getDay()]

// program 7 
enum Shape2 {
    Circle,
    Square,
    Traingle
}
function draw(shape:Shape2){
    if(shape == 0){
        console.log("calculate circle")
    }
    if(shape == 1){
        console.log("calculate sqaure")
    }
    if(shape == 2){
        console.log("calculate Triangle")
    }
}
draw(Shape.Circle)
draw(Shape.Square)
draw(Shape.Traingle)