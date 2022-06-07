
//User Choice//
const getUserChoice  = (userInput) =>{
userInput = userInput.toLowerCase();
if ( 
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
){
    return userInput;
} else {
    console.log("Please select rock, paper, or scissors")
}
}

//Computer Choice//
const getComputerChoice = () =>{
    const randomNumber = Math.floor(Math.random() *3);
switch (randomNumber){
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors"
}
}

//Determine Winner//
const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
        return "The game is a tie!"
    }
    if (userChoice === "rock"){
        if (computerChoice === "paper"){
            return "The computer won"
        }else{
            return "You Won!"
        }
    }
    if (userChoice = "paper"){
        if (computerChoice === "scissors"){
            return "The computer won"
        }else{
            return "You Won!"
        }
    }
    if (userChoice === "scissors"){
        if (computerChoice === "rock"){
            return "The computer won"
        }else{
            return "You Won!"
        }
    }
}
//Start Game//
const playGame = ()=>{
    const userChoice = getUserChoice("paper");
    const computerChoice = getComputerChoice();
    console.log(`You threw ${userChoice}`)
    console.log(`The computer threw ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice))

}


