const choices = document.querySelectorAll(".choice");
const msgBox = document.querySelector(".msg");
const userScoreCounter = document.getElementById("user-score");
const compScoreCounter = document.getElementById("comp-score");
const resetGameBtn = document.querySelector("button");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = () => {
    msgBox.style.background = "#000";
    msgBox.innerHTML = "Draw, Play Again";
}

const checkWinner = userWin => {
    if(userWin){
        userScore++;
        userScoreCounter.innerHTML = userScore;
        msgBox.style.background = "green";
        msgBox.innerHTML = "User Wins";
    }else{
        compScore++;
        compScoreCounter.innerHTML = compScore;
        msgBox.style.background = "red";
        msgBox.innerHTML = "Comp Wins";
    }
}

const playGame = userChoice => {
    const compChoice = genCompChoice()
    let userWin = true;
    if(userChoice == compChoice){
        drawGame();
    }else{
        if(userChoice == "rock"){
            userWin = compChoice == "paper" ? false : true;
        }else if(userChoice == "paper"){
            userWin = compChoice == "scissors" ? false : true;
        }else{
            userWin = compChoice == "rock" ? false : true;
        }
        checkWinner(userWin);
    }
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});