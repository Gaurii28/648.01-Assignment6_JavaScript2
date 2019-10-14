// /*eslint-env browser*/
var e;
// // STEP 1
function writeMessage(){
    "use strict";
    window.alert("Step 1: I have been clicked!!!");
}
// //STEP 2

var mybutton = window.document.getElementById("button2");
mybutton.onclick = function(){
    "use strict";
    window.alert("Step 2 : I have been clicked!!!");
};


// //STEP 3
var button3 = window.document.getElementById("button3");
function writeMessage1(){
    window.alert("Step 3 : I have been clicked!!!");
}
button3.addEventListener("click", writeMessage1);   

// //STEP 4
var button4 = window.document.getElementById("button3");
button4.addEventListener("click",function(){
    window.alert("Step 4 : I have been clicked!!!");
});

//STEP 5

window.addEventListener("load", function () {
    "use strict";
    var button5 = window.document.getElementById("button3");
    button5.addEventListener("click",function(){
        window.alert("Step 5: I have been clicked!!!");
    });
});

