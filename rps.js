let Options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    return Options[Math.floor(Math.random()*3)];
}

console.log(getComputerChoice());

function OneRPSRound(PlayerSelection, CpuSelection){
    let PlayerChoice=PlayerSelection.toLowerCase();
    let CpuChoice=CpuSelection.toLowerCase();
    if(PlayerChoice=='rock' && CpuChoice=='paper' 
    || PlayerChoice=='paper' && CpuChoice=='scissors' 
    || PlayerChoice=='scissors' && CpuChoice=='rock')
        return 1;
    if(PlayerChoice=='paper' && CpuChoice=='rock' 
    || PlayerChoice=='scissors' && CpuChoice=='paper' 
    || PlayerChoice=='rock' && CpuChoice=='scissors')
        return 2;
}

console.log(OneRPSRound(Options[1], getComputerChoice()));

function game(){
    let CpuScore=0;
    let PlayerScore=0;
    for(let i = 0; i < 5; i++){
        let getPlayerChoice=Options[prompt('1- Rock\n2- Paper\n3- Scissors\nChoose your weapon: ', Math.floor(Math.random()*4))-1];
        let getCpuChoice=getComputerChoice();
        switch (OneRPSRound(getPlayerChoice, getCpuChoice)) {
            case 1:
                ++CpuScore;
                break;
            case 2:
                ++PlayerScore;
                break;
            default:
                break;
        }
    }
    if(CpuScore < PlayerScore) return 'YOU WIN!';
    else if(CpuScore > PlayerScore) return 'YOU LOST';
    else return 'DRAW!';
}

console.log(game());