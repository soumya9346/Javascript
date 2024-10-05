
// local or functional scope

//  variables decalred only within the function 

function fn(){
    let a = 5;
    if ( a> 3){
        console.log("inside the function " +a);
    }
}
fn();


function my(){
    let x = 10;
    console.log(" 1st function " + x)
}
function fnn(){
    let y = 20;
    console.log(" 2nd function " + y);
}

my();
fnn();


