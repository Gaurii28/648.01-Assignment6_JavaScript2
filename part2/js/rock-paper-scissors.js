var uChoice;
var cChoice;

function check(x,y){
    if(x === "rock"){
        if(y === "rock"){
            window.alert("It's a tie !!!");

        }else if(y === "paper"){
            window.alert("Computer won!!")
            
        }else if(y === "scissor"){
            window.alert("You won!!")
            
        }

    }else if(x === "paper"){
        if(y === "rock"){
            window.alert("You won!!")

        }else if(y === "paper"){
            window.alert("It's a tie!!")
            
        }else if(y === "scissor"){
            window.alert("Computer won!!")
            
        }
        
    }else if(x === "scissor"){
        if(y === "rock"){
            window.alert("Computer won!!")

        }else if(y === "paper"){
            window.alert("You won!!")
            
        }else if(y === "scissor"){
            window.alert("It's a tie!!")    
        }
        
    }
}

function main(){
    "use strict";
    uChoice=window.prompt("Pick any one from 'rock','paper' or 'scissor'");

    if( !(uChoice == "paper" || uChoice == "rock" || uChoice=="scissor")){
        window.alert("Invalid Input !!!");
    }
    else {
        var c=Math.round((Math.random()*10))%3;
        if (c === 0){
            cChoice="rock";
        }else if (c ===1){
            cChoice="paper";
        }else if(c===2){
            cChoice="scissor";
        }
        check(uChoice,cChoice);
    }
}
main();
