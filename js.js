let playerPoint= 0 ;
let cpuPoint= 0;
let computerSelector =['ROCK', 'PAPER' ,'SCISSOR'];
let cpuSelect = 1;
let playerSelection =1;

// this is a practice to see how add events to the page
let rock = document.querySelector('#rock');
rock.addEventListener('click', function() { playerSelection = "rock" , gameOn() });

let scissor = document.querySelector('#scissor');
scissor.addEventListener('click', function() { playerSelection = "scissor" , gameOn() });

let paper = document.querySelector('#paper');
paper.addEventListener('click', function() { playerSelection = "paper" , gameOn() });



//This is what make the game start´s, it make uses of function and local variables
function gameOn() {
    //alert("The game runs everything inside the console.log , except the user input, have fun¡");
    //for (let i = 0; i<5 ; i++){
        cpuSelect = computerSelector[Math.floor(Math.random()* computerSelector.length)];
    //    playerSelection = prompt("input rock, paper, scissor ¡Try your luck!");
        game();
        gamepoint();
    const selectLog2 = document.querySelector("#LOG2");
    if (playerPoint == cpuPoint){
        selectLog2.textContent = "STAYS equals";
    }else if (playerPoint == 5) {
        selectLog2.textContent = "YOU WIN , congratulations , Play again";
        playerPoint = 0 ;
        cpuPoint = 0 ;
    }else if (cpuPoint == 5){
        selectLog2.textContent = "YOU LOSE, Play again";
        playerPoint = 0 ;
        cpuPoint = 0 ;
    }else if(playerPoint > cpuPoint){
        selectLog2.textContent = "YOU are winning, HOLD IT";
    }else if(playerPoint < cpuPoint){
        selectLog2.textContent = "YOU are lossing, STAND UP";
    }
}

// This controls the point score of the game
function gamepoint(){
    const divPlayerPoint = document.querySelector('#playerPoint') ;
    divPlayerPoint.textContent = "PlayerScore ="+" "+playerPoint ;
    const divCpuPoint = document.querySelector('#cpuPoint');
    divCpuPoint.textContent = "CpuScore ="+" "+cpuPoint ;
    const divPlayerSelection = document.querySelector('#playerSelection');
    divPlayerSelection.textContent = "Your select was"+" "+playerSelection.toLowerCase() ;
    const divCpuSelection = document.querySelector('#cpuSelection');
    divCpuSelection.textContent = "The computer select"+" "+cpuSelect.toLowerCase();
    }
// This has the code for every situation of the game
function game() {
    const Log = document.querySelector("#LOG");
    if(playerSelection===null){
        alert("You cancel?Then finish the game")
        return;
    }else if (playerSelection.toUpperCase() == cpuSelect){
        Log.textContent= "Both select the same" ;
    }else if(cpuSelect=='SCISSOR' && playerSelection.toUpperCase()=='ROCK'){
        Log.textContent="You rock smash the scissor of the cpu, you win this round";
        playerPoint++;
    }else if(cpuSelect =='PAPER'&&playerSelection.toUpperCase()=='ROCK'){
        Log.textContent = "The cpu paper enroll you rock, you loss this round";
        cpuPoint++;
    }else if(cpuSelect=='ROCK'&&playerSelection.toUpperCase()=='PAPER'){
        Log.textContent = "Your paper enroll the cpu rock, you win this round";
        playerPoint++;
    }else if(cpuSelect=='SCISSOR'&&playerSelection.toUpperCase()=='PAPER'){
        Log.textContent = "The scissor of the cpu cuts your paper, you loss this round";
        cpuPoint++;
    }else if(cpuSelect=='PAPER'&&playerSelection.toUpperCase()=='SCISSOR'){
        Log.textContent = "Your scissor cuts the paper of the cpu, you win this round";
        playerPoint++;
    }else if(cpuSelect=='ROCK'&&playerSelection.toUpperCase()=='SCISSOR'){
        Log.textContent = "The rock of the cpu smash your scissor, you loss this round";
        cpuPoint++;
    }else {
        Log.textContent = "i didn't want to offend you";
    }
}