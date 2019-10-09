//STEP 1
function halfNumber(number){
    "use strict";
    window.console.log("Half of "+ number +" is "+ (number/2) +" ." +"\n");   
}
//STEP 2
function squareNumber(number){
    "use strict";   
    window.console.log("The result of squaring "+ number +" is "+ (number*number) +" ." +"\n");   
}
//STEP 3
function percentOf(x,y){
    "use strict";
    var r=(y*100)/x;
    window.console.log( x +" is "+ r +" % of " + y+ ". \n");   
}

//STEP 4
function findModulus(x,y){
    "use strict";
    window.console.log( (y%x) +" is the modulus of "+ x + " and "+ y + ". \n");   
}

//STEP 5
function sum(numbers) {
    var sum =0;
    for (i = 0; i < numbers.length; i += 1) {
        sum += parseInt(numbers[i]);
    }
    window.console.log("Sum of all the numbers ("+numbers+") are :"+ sum);
}
function addNumber() {

    var number = window.prompt("Enter Numbers!!!").split(",");
    sum(number);
}



// Main function
function main(){
    "use strict";
    // var number = window.prompt("Enter the number for function halfNumber()");
    halfNumber(5);
    // var number= window.prompt("Enter the number for function squareNumber()");
    squareNumber(3);
    // var x= window.prompt("Enter the first number for function percentOf()");
    // var y= window.prompt("Enter the second number for function percentOf()");
    percentOf(2,4);
    // var x= window.prompt("Enter the first number for function findModulus()");
    // var y= window.prompt("Enter the second number for function findModulus()");
    findModulus(2,4);
    addNumber();      
}
main();