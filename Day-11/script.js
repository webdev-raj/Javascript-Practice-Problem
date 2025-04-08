let submitBtn = document.querySelector("#submitBtn");
let startBtn = document.querySelector("#startBtn");
let userInput = document.querySelector('input[type="text"]')
let finalNum = document.querySelector(".finalNum")
let messageBox = document.querySelector("#messageBox")
let guessHistory = document.querySelector("#guessHistory")
let guessingNumber = 0
let enterNumHistory = []
let randomGuess = 0
startBtn.addEventListener("click", () => {
    messageBox.textContent = "start to guessing number"
    let range = Math.floor(Math.random() * 100)
    guessingNumber = Math.floor(Math.random() * range)
    console.log(guessingNumber)
    finalNum.textContent = range
    
    submitBtn.addEventListener("click", () => {
        enterNumHistory.push(Number(userInput.value))
        if (userInput.value === "") {
            alert("please fill the input to enter your chooice")
        }
        else {
            randomGuess = Number(userInput.value);
            userInput.value = ""
            if (randomGuess === guessingNumber) {
                messageBox.textContent = "your guess is correct"
                alert("click start button to restart the same")
            }
            else if (randomGuess > guessingNumber) {
                messageBox.textContent = "your guess greater number then guessed number"
            }
            else {
                messageBox.textContent = "your guess is less then guessed number"
            }
        }
        guessHistory.innerHTML = ""
        for (let i = 0; i < enterNumHistory.length; i++) {
            guessHistory.innerHTML += `<span> ${enterNumHistory[i]} </span>,`
        }
    })
})




