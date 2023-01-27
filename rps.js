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



function OneRPSRound(PlayerChoice, CpuChoice){
    PlayerChoice.forEach(option => {
        option.addEventListener('click', function () {
            console.log(this.textContent);
            if (this.textContent == 'rock' && CpuChoice == 'paper'
                || this.textContent== 'paper' && CpuChoice == 'scissors'
                || this.textContent == 'scissors' && CpuChoice == 'rock'){
                ++CpuScore; document.querySelector('.res_output').textContent = 'You LOSE!';}
            if (this.textContent == 'paper' && CpuChoice == 'rock'
                || this.textContent == 'scissors' && CpuChoice == 'paper'
                || this.textContent == 'rock' && CpuChoice == 'scissors') {
                ++PlayerScore;document.querySelector('.res_output').textContent = 'You WIN!';}
            else document.querySelector('.res_output').textContent = 'DRAW!';
        });
    });
    
}



function game(){
        function disablebuttons(state){
            for(i=0;i<3;i++)
            PlayerChoice[i].disabled=!!state;
        }
        disablebuttons(true);
        setTimeout(e=>{disablebuttons(false);},1000);
        OneRPSRound(PlayerChoice,getComputerChoice());
        document.querySelector('.cpuscore').textContent=CpuScore;
        document.querySelector('.plyrscore').textContent=PlayerScore;
        console.log("computer choice: "+getComputerChoice());;}

for(const button of PlayerChoice) {button.addEventListener("click",game); };