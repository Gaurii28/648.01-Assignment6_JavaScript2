/*eslint-env browser*/
var e;
//STEP 1
function writeMessage(){
    window.alert("I have been clicked!!!");
}
//STEP 2
var b=document.getElementById("myButton1");
b.onclick = function(){
    window.alert("I have been clicked!!!");
}


//STEP 3

myButton.addEventListener("click", writeMessage);
function writeMessage(){
    window.alert("I have been clicked!!!");
}   

//STEP 4
myButton2.addEventListener("click",function(){
    window.alert("I have been clicked!!!");
});
//STEP 5
window.addEventListener("load", function () {
    "use strict";
    myButton3.addEventListener("click",function(){
        window.alert("I have been clicked!!!");
    });
});

