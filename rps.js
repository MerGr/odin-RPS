let Options = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    return Options[Math.floor(Math.random()*3)];
}

const rockbtn = document.querySelector(".rock"); rockbtn.textContent='rock';
const paperbtn = document.querySelector(".paper"); paperbtn.textContent='paper';
const scissorsbtn = document.querySelector(".scissors"); scissorsbtn.textContent='scissors';
let PlayerChoice = [rockbtn, paperbtn, scissorsbtn];
console.log(PlayerChoice);

let CpuScore=0;
let PlayerScore=0;
let Count=0;



function OneRPSRound(PlyrChoice, CpuChoice){
    console.log(PlyrChoice.textContent);
    if (PlyrChoice.textContent == 'rock' && CpuChoice == 'paper'
        || PlyrChoice.textContent== 'paper' && CpuChoice == 'scissors'
        || PlyrChoice.textContent == 'scissors' && CpuChoice == 'rock'){
        ++CpuScore; document.querySelector('.res_output').textContent = 'You LOSE!';}
    else if (PlyrChoice.textContent == 'paper' && CpuChoice == 'rock'
        || PlyrChoice.textContent == 'scissors' && CpuChoice == 'paper'
        || PlyrChoice.textContent == 'rock' && CpuChoice == 'scissors') {
        ++PlayerScore;document.querySelector('.res_output').textContent = 'You WIN!';}
    else document.querySelector('.res_output').textContent = 'DRAW!';
    removeEventListener('click', OneRPSRound);
}

function disablebuttons(state){
    for(i=0;i<3;i++)
    PlayerChoice[i].disabled=!!state;
}


function game(){
        disablebuttons(true);
        setTimeout(e=>{disablebuttons(false);},1000);
        let CpuChoice=getComputerChoice();
        PlayerChoice[0].addEventListener('click', OneRPSRound(this,CpuChoice));
        document.querySelector('.cpuscore').textContent=CpuScore;
        document.querySelector('.plyrscore').textContent=PlayerScore;
        console.log("computer choice: "+CpuChoice);
        ++Count;
    };

if(CpuScore<5 || PlayerScore<5) {for(const button of PlayerChoice) {button.addEventListener("click",game)};}
else disablebuttons(true);