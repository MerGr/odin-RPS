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

document.querySelector('.cpuscore').textContent=CpuScore;
document.querySelector('.plyrscore').textContent=PlayerScore;
function OneRPSRound(PlayerChoice, CpuChoice){

    PlayerChoice.forEach(option => {
        option.addEventListener('click', function () {
            console.log(this.textContent);
            if (this.textContent.toLowerCase() == 'rock' && CpuChoice == 'paper'
                || this.textContent.toLowerCase()== 'paper' && CpuChoice == 'scissors'
                || this.textContent.toLowerCase() == 'scissors' && CpuChoice == 'rock')
                ++CpuScore;
            if (this.textContent.toLowerCase() == 'paper' && CpuChoice == 'rock'
                || this.textContent.toLowerCase() == 'scissors' && CpuChoice == 'paper'
                || this.textContent.toLowerCase() == 'rock' && CpuChoice == 'scissors')
                ++PlayerScore;
        });
    });
    ++Count;
}



function game(){

    //for(let i = 0; i < 5; i++){

        if(Count==0) OneRPSRound(PlayerChoice,getComputerChoice());
        Count=0;
    //}
    if(CpuScore < PlayerScore) return  document.querySelector('.res_output').textContent = 'You WIN!';
        else if(CpuScore > PlayerScore) return document.querySelector('.res_output').textContent = 'You LOSE!';
        else return document.querySelector('.res_output').textContent = 'DRAW!'; 
  
}

game();