let Options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return Options[Math.floor(Math.random()*3)];
}

const rockbtn = document.querySelector(".rock"); 
const paperbtn = document.querySelector(".paper"); 
const scissorsbtn = document.querySelector(".scissors"); 
let PlayerChoice = [rockbtn, paperbtn, scissorsbtn];
console.log(PlayerChoice);

let CpuScore=0;
let PlayerScore=0;
let Count=0;



function OneRPSRound(PlyrChoice, CpuChoice){
    console.log(PlyrChoice.textContent);
    if(PlayerScore<5 && CpuScore<5){
    if (PlyrChoice.textContent == 'Rock' && CpuChoice == 'paper'
        || PlyrChoice.textContent== 'Paper' && CpuChoice == 'scissors'
        || PlyrChoice.textContent == 'Scissors' && CpuChoice == 'rock'){
        ++CpuScore; document.querySelector('#res_output').textContent = 'You LOSE!';
         document.getElementById("res_output").style.color="red";
        }
    else if (PlyrChoice.textContent == 'Paper' && CpuChoice == 'rock'
        || PlyrChoice.textContent == 'Scissors' && CpuChoice == 'paper'
        || PlyrChoice.textContent == 'Rock' && CpuChoice == 'scissors') {
        ++PlayerScore;document.querySelector('#res_output').textContent = 'You WIN!'; 
        document.getElementById("res_output").style.color="green";
    }
    else { 
        document.querySelector('#res_output').textContent = 'DRAW!';
        document.getElementById("res_output").style.color="orange";
    }
    removeEventListener('click', OneRPSRound);}
    else disablebuttons(true);
}

function disablebuttons(state){
    for(i=0;i<3;i++)
    PlayerChoice[i].disabled=!!state;
}


function game(){
        let CpuChoice=getComputerChoice();
        PlayerChoice[0].addEventListener('click', OneRPSRound(this,CpuChoice));
        document.querySelector('.cpuscore').textContent=CpuScore;
        document.querySelector('.plyrscore').textContent=PlayerScore;
        console.log("computer choice: "+CpuChoice);
        ++Count;
    };

if(CpuScore<5 || PlayerScore<5) {for(const button of PlayerChoice) {button.addEventListener("click",game)};}
else disablebuttons(true);