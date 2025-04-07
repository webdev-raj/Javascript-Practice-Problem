let submitBtn = document.querySelector("#submitBtn");
let startBtn = document.querySelector("#startBtn");
let userInput = document.querySelector('input[type="text"]')
let finalNum = document.querySelector(".finalNum")
let messageBox = document.querySelector("#messageBox")
let guessHistory = document.querySelector("#guessHistory")
let guessingNumber = 0
let randomGuess = 0
startBtn.addEventListener("click",()=>{
    let range = Math.floor(Math.random()*100)
    guessingNumber = Math.floor(Math.random()*range)
    console.log(guessingNumber)
    finalNum.textContent = range

    submitBtn.addEventListener("click",()=>{
        randomGuess=Number(userInput.value)
        userInput.value=""
        if (randomGuess === guessingNumber) {
            messageBox.textContent = "your guess is correct"
            alert("click start button to restart the same")
        }
        else if(randomGuess>guessingNumber){
            messageBox.textContent="your guess greater number then guessed number"
        }
        else if(randomGuess<guessingNumber){
            messageBox.textContent = "your guess is less then guessed number"
        }
    })
})





