// used to transfer control from one point to another point

// jump and continue statements

// jump -- used to terminate the loop

// continue -- used to skip over the execution part of the statement on certain condition. 

// using break 

for( x = 1; x<=10; x++){
    console.log(" a = " + x)

    if(x==5){
        console.log("break statement executed");
        break;
    }
}


//  using continue

for(a=1; a<10; a++){
    
    if(a==5){
        console.log(" continue stateement executed ");
        continue;
    }
    if(a==10){
        console.log(" break stateement executed ");
        break;
    }
    console.log(" a = " + a);

}