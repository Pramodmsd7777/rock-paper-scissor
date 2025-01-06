const choices=["rock","paper","scissor"];
const playerdisplay=document.getElementById("playerdisplay");
const computerdisplay=document.getElementById("computerdisplay")
const resultdisplay=document.getElementById("resultdisplay");
const playerscoredisplay=document.getElementById("playerscoredisplay")
const computerscoredisplay=document.getElementById("computerscoredisplay");
let playerscore=0;
let computerscore=0;

function playgame(playerChoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    if (playerChoice===computerchoice){
            console.log("IT'S A TIE");
            
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerchoice==="scissor")?"YOU WIN🏆" : "YOU LOOSE😒";
                break;
            case "paper":
                result=(computerchoice==="rock")?"YOU WIN🏆":"YOU LOOSE😒";
                break;
            case "scissor":
                result= (computerchoice==="paper")?"YOU WIN🏆":"YOU LOOSE😒"; 
                break;  
        }
    }
    
playerdisplay.textContent=`PLAYER:${playerChoice}`;
computerdisplay.textContent=`COMPUTER:${computerchoice}`;
resultdisplay.textContent=result;
resultdisplay.classList.remove("greentext","redtext")
    switch(result){
        case "YOU WIN🏆":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent=playerscore;
            break;
        case "YOU LOOSE😒":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent=computerscore;
            break;
    }



}