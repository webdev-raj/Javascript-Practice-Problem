const getTodo = document.querySelector("#getTodo")
const container = document.querySelector("#todosContainer")
const btn = document.querySelector("#btn")
const removeBtn = document.querySelector("#remove")

function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem("todoData"))
}

let todos = getDataFromLocalStorage() || [];
function addtodo(e) {
    if (getTodo.value != " " && !todos.includes(getTodo.value)) {
        e.preventDefault()
        let inputtext = getTodo.value.trim()
        todos.push(inputtext)
        todos = [... new Set(todos)]
        localStorage.setItem("todoData", JSON.stringify(todos))
        let divElement = document.createElement("div")
        divElement.classList.add("select-none", "flex", "items-center", "justify-between", "gap-5", "border-2", "border-zinc-400", "py-2", "px-3", "rounded-full")
        divElement.innerHTML = `
                <h1 class="text-lg capitalize font-semibold">${getTodo.value}</h1>
                <button id="remove" class="w-6 h-6 flex items-center justify-center text-white rounded-full bg-zinc-600">
                    <i class="ri-close-line text-md"></i>
                </button>
            `
        container.appendChild(divElement)
        getTodo.value = ""
        getTodo.focus()
    }
}
function showData() {
    todos.forEach((elem) => {
        let divElement = document.createElement("div")
        divElement.classList.add("select-none", "flex", "items-center", "justify-between", "gap-5", "border-2", "border-zinc-400", "py-2", "px-3", "rounded-full")
        divElement.innerHTML = `
                <h1 class="text-lg capitalize font-semibold">${elem}</h1>
                <button id="remove" class="w-6 h-6 flex items-center justify-center text-white rounded-full bg-zinc-600">
                    <i class="ri-close-line text-md"></i>
                </button>
            `
        container.appendChild(divElement)
    });
}
showData()
btn.addEventListener("click", (e) => {
    addtodo(e);
})
