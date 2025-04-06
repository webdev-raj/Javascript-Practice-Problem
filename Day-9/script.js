const plus = document.querySelector("#add")
const minus = document.querySelector("#minus")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const equal = document.querySelector("#equal")
const clear = document.querySelector("#clear")
const takeInp = document.querySelector("#inpBox")
const enterBtn = document.querySelector("#enterBtn")

let num1 = "";
let num2 = "";
let flag = 0;
let operator = "";

enterBtn.addEventListener("click", () => {
    if (flag === 0) {
        num1 = Number(takeInp.value);
        takeInp.value = ""
        flag = 1;
    } else {
        num2 = Number(takeInp.value);
        takeInp.value = ""
        flag = 0;
    }
})

plus.addEventListener("click", () => {
    plus.classList.add("bg-zinc-700", "text-zinc-400")
    equal.addEventListener("click", () => {
        plus.classList.remove("bg-zinc-700", "text-zinc-400")
        takeInp.value = num1 + num2
    })
})
minus.addEventListener("click", () => {
    minus.classList.add("bg-zinc-700", "text-zinc-400")
    equal.addEventListener("click", () => {
        minus.classList.remove("bg-zinc-700", "text-zinc-400")
        takeInp.value = num1 - num2
    })
})
multiply.addEventListener("click", () => {
    multiply.classList.add("bg-zinc-700", "text-zinc-400")
    equal.addEventListener("click", () => {
        multiply.classList.remove("bg-zinc-700", "text-zinc-400")
        takeInp.value = num1 * num2
    })
})
divide.addEventListener("click", () => {
    divide.classList.add("bg-zinc-700", "text-zinc-400")
    equal.addEventListener("click", () => {
        divide.classList.remove("bg-zinc-700", "text-zinc-400")
        takeInp.value = num1 / num2
    })
})

clear.addEventListener("click",()=>{
    num1=0
    num2=0
})