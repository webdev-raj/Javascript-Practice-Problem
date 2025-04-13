let inputtext = document.querySelector("input[type='text']");
let addtextbtn = document.querySelector("#add")
let taskContainer = document.querySelector("#taskContainer");
let testArray = [];
addtextbtn.addEventListener("click", () => {
    if (inputtext.value == "") {
        alert("please make sure you fill the input")
    }
    else {
        testArray.push(inputtext.value)
        taskContainer.innerHTML = ""
        addingElem()
    }
})

const addingElem = () => {
    for (let i = 0; i < testArray.length; i++) {
        taskContainer.innerHTML += `<div class="task w-full flex items-center justify-between border-b px-1 py-2">
                    <div class="Hero flex items-center gap-3">
                        <input class="chackbox" type="checkbox" data-id="${i}">
                        <h1 class="taskheading text-xl text-zinc-300">${testArray[i]}</h1>
                    </div>
                    <button data-id="${i}" class="delete p-1"><span><i class="text-xl ri-close-large-line"></i></span></button>
                </div>`
    }
    inputtext.value = ""
    let checkevent = document.querySelectorAll("#check")
    taskContainer.addEventListener("change", (e) => {
        if (e.target.classList.contains("chackbox")) {
            let taskDiv = e.target.closest(".Hero")
            let h1text = taskDiv.querySelector(".taskheading")
            if (e.target.checked) {
                h1text.classList.add("line-through")
                h1text.classList.add("opacity-75")
            }
            else {
                h1text.classList.remove("line-through")
                h1text.classList.remove("opacity-75")
            }
        }
    })
}
taskContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete") || e.target.closest("delete")) {
        let deleteBtn = e.target
        let taskDiv = deleteBtn.closest(".task")
        let checkbox = taskDiv.querySelector(".chackbox")
        let dataid = deleteBtn.getAttribute("data-id")
        if (checkbox.checked) {
            testArray.splice(dataid, 1)
            taskContainer.innerHTML = ""
            addingElem()
        } else {
            alert("before deleting the task please check the checkbox")
        }
    }
})