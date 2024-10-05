// block scope

//  if we use let and const keyword and { } outside the curly braces it cannot be accessed 

//  if we use var keyword and { } outside the curly braces it can be accessed.

// let a = 10;
// if ( a > 5){
//     console.log (" a is greater than 5");
//     let b = 30;
// }
// console.log("in" +b);


var x = 10;
if ( x > 5){
    console.log (" x is greater than 5");
    var y = 30;
}
console.log("in" +y);