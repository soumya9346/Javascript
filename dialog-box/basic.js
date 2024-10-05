//  dialog boxes

// 1. alert
// 2. prompt
// 3. confirm

// alert(" This is an alert message ")

// prompt(" Enter you Name ")

// confirm(" Are you ready to Explore my webpage ")


var woman = confirm (" are you a woman ")

if ( woman ){
    name = prompt(" Enter your name")
    document.write("Hello Madam " + name + "Welcome to my page")
}else{
    name = prompt(" Enter your name")
    document.write("Hello Mr. " + name + "Welcome to my page")

}