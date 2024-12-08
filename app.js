let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");
const resetBtn = document.querySelector("#reset-btn");

const resetGame = ()=>{
    userScore = 0;
    computerScore = 0;
    userScorePara.innerText = userScore;
    computerScorePara.innerText = computerScore;
    msg.innerText = "Play Your Move!"
    msg.style.backgroundColor = "#081b31";
}

const generateComputerChoice = ()=>{
     const options = ["rock", "paper", "scissors"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
}

const showWinner = (userWin, userChoice, computerChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose! Your ${userChoice} was beaten by ${computerChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    const computerChoice = generateComputerChoice();

    if(userChoice == computerChoice){
        msg.innerText = "Game was draw! Try Again...";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            //paper, scissors
            userWin = computerChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper"){
            //scissors, rock
            userWin = computerChoice == "scissors" ? false : true;
        }
        else{
            //rock, paper
            userWin = computerChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }  
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        playGame(choice.getAttribute("id"));
    })
})

resetBtn.addEventListener("click", ()=>{
    resetGame();
})