playerPoint= 0 ;
cpuPoint= 0;
let computerSelector =['ROCK', 'PAPER' ,'SCISSOR'];
let cpuSelect = 1;
let playerSelection =1;
//This is what make the game start´s, it make uses of function and local variables
function gameOn() {
    alert("The game runs everything inside the console.log , except the user input, have fun¡");
    for (let i = 0; i<5 ; i++){
        cpuSelect = computerSelector[Math.floor(Math.random()* computerSelector.length)];
        playerSelection = prompt("input rock, paper, scissor ¡Try your luck!");
        game();
        (playerSelection===null)? i=5 : gamepoint() ;  
    }
    if (playerPoint == cpuPoint){
        console.log("Draw, nobody wins");
    }else if(playerPoint > cpuPoint){
        console.log("You win, against the cpu, congratulations");
    }else if(playerPoint < cpuPoint){
        console.log("You loss, but you can play again")
    }
    
}

// This controls the point score of the game
function gamepoint(){
    console.log("your input was"+" "+playerSelection);
    console.log("the computer select"+" "+cpuSelect.toLowerCase());    
    console.log("PlayerScore ="+" "+playerPoint);
    console.log("CpuScore ="+" "+cpuPoint);
    }
// This has the code for every situation of the game
function game() {
    if(playerSelection===null){
        alert("You cancel?Then finish the game")
        return;
    }else if (playerSelection.toUpperCase() == cpuSelect){
        console.log("Both select the same")
    }else if(cpuSelect=='SCISSOR' && playerSelection.toUpperCase()=='ROCK'){
        console.log("You rock smash the scissor of the cpu, you win this round");
        playerPoint++;
    }else if(cpuSelect =='PAPER'&&playerSelection.toUpperCase()=='ROCK'){
        console.log("The cpu paper enroll you rock, you loss this round");
        cpuPoint++;
    }else if(cpuSelect=='ROCK'&&playerSelection.toUpperCase()=='PAPER'){
        console.log("Your paper enroll the cpu rock, you win this round");
        playerPoint++;
    }else if(cpuSelect=='SCISSOR'&&playerSelection.toUpperCase()=='PAPER'){
        console.log("The scissor of the cpu cuts your paper, you loss this round");
        cpuPoint++;
    }else if(cpuSelect=='PAPER'&&playerSelection.toUpperCase()=='SCISSOR'){
        console.log("Your scissor cuts the paper of the cpu, you win this round");
        playerPoint++;
    }else if(cpuSelect=='ROCK'&&playerSelection.toUpperCase()=='SCISSOR'){
        console.log("The rock of the cpu smash your scissor, you loss this round");
        cpuPoint++;
    }else {
        console.log("i didn't want to offend you")
    }
}