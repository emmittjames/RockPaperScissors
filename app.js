const computerChoiceDisplay = document.getElementById("computerChoice")
const userChoiceDisplay = document.getElementById("userChoice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  getComputerChoice()
  claculateWin()
}))

function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * possibleChoices.length)
    if(randomNum==0){
        computerChoice = "rock"
    }
    if(randomNum==1){
        computerChoice = "paper"
    }
    if(randomNum==2){
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function claculateWin(){
    if(userChoice === computerChoice){
        result = "draw"
    }
    else if(userChoice === "rock" && computerChoice === "scissors"){
        result = "user wins"
    }
    else if(userChoice === "paper" && computerChoice === "rock"){
        result = "user wins"
    }
    else if(userChoice === "scissors" && computerChoice === "paper"){
        result = "user wins"
    }
    else{
        result = "computer wins"
    }
    resultDisplay.innerHTML = result
}