// global scope

// we declare without let,var,const keywords then it is called global scope
// outside the function and inside the function


function fn (){
     a = 100;
    console.log(" inside function " + a);
}
fn();
console.log(" outside the function " +a);

b = 10;
function fnn(){

console.log(" inside the function " + b);

}
fnn();
console.log(" outside the function " + b);