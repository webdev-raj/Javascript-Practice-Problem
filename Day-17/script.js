let passwordInput = document.querySelector("#password")
let changeProgress = document.querySelector(".progress")
let messageText = document.querySelector("#messageContainer")
let copyText = document.querySelector("#copyText")
passwordInput.addEventListener("input", () => {
    let passwordCheck = passwordInput.value
    let haveNumber = /[0-9]/.test(passwordCheck)
    let haveCapitalLetter = /[A-Z]/.test(passwordCheck)
    let haveSpecialSymbols = /[!@#$%&*]/.test(passwordCheck)
    let haveLowerCaseLetter = /[a-z]/.test(passwordCheck)

    if (passwordCheck.length < 5) {
        messageText.textContent = "please make sure you enter more then 5 character"
        changeProgress.classList.add("w-[0%]")
    }
    

    else if((passwordCheck.length>13&& haveNumber) && (haveCapitalLetter && haveSpecialSymbols)){
        changeProgress.classList.replace("w-[65%]", "w-full")
        changeProgress.classList.replace("bg-orange-600", "bg-green-600")
        messageText.textContent = "Hard Password"
    }

    else if ((passwordCheck.length >= 10 && haveNumber) && haveNumber) {
        changeProgress.classList.replace("w-[30%]", "w-[65%]")
        changeProgress.classList.replace("bg-red-600", "bg-orange-600")
        messageText.textContent = "Medium Password"
    }

    else if (passwordCheck.length >= 6 && haveNumber) { //true
        messageText.textContent = "Easy Password"
        changeProgress.classList.replace("w-[0%]", "w-[30%]")
    }
})

copyText