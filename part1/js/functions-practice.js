//STEP 1
function halfNumber(number){
    "use strict";
    
    window.console.log("Half of "+ number +" is "+ (number/2) +" ." +"<br>");   
}
//STEP 2
function squareNumber(number){
    "use strict";
    
    window.console.log("The result of squaring "+ number +" is "+ (number*number) +" ." +"<br>");   
}
//STEP 3
function percentOf(x,y){
    "use strict";
    var r=(y*100)/x;
    window.console.log( x +" is "+ r +" % of " + y+ ". <br>");   
}

//STEP 4
function findModulus(x,y){
    "use strict";
    window.console.log( (y%x) +" is the modulus of "+ x + " and "+ y + ". <br>");   
}

//STEP 5
// function add(number_Array){
//     while(true){
//         var n= window.prompt("write number you want to add or write 'sum' if you want to find out the sum of the submitted numbers.");
//         if (typeof(n)=== 'number'){
//             number_Array.push(n);      
//         }else if (n === 'sum'){
//             var s= sum(number_Array);
//             // document.write("sum of the numbers are"+ s );
//             document.write(number_Array);
//             break;
//         }
//         // else {
//         //     document.alert("invalid input!!")
//         // }

//     }
    
// }
function sum(number_Array){
    var sum=0;
    number_Array.forEach(function (number) {
        sum +=number;
    });
    return sum;
}



// Main function
function main(){
    "use strict";
    // var number = window.prompt("Enter the number for function halfNumber()");
    // halfNumber(number);
    // var number= window.prompt("Enter the number for function squareNumber()");
    // squareNumber(number);
    // var x= window.prompt("Enter the first number for function percentOf()");
    // var y= window.prompt("Enter the second number for function percentOf()");
    // percentOf(x,y);
    // var x= window.prompt("Enter the first number for function findModulus()");
    // var y= window.prompt("Enter the second number for function findModulus()");
    // findModulus(x,y);
    // var number_Array=[];
    // add(number_Array);
    
    
}
main();