let nameInput = document.querySelector("#nameInput")
let phoneInput = document.querySelector("#phoneInput")
let addButtom = document.querySelector("#addButtom")
let contactList = new Array()
const colors = [
    "#FF6B6B",
    "#6BCB77",
    "#4D96FF",
    "#FFD93D",
    "#9D4EDD",
    "#F28D35",
    "#00B8A9",
    "#F76C6C",
    "#7F5AF0",
    "#3CCF4E"
];

function creatingUserDetailObject() {
    addButtom.addEventListener("click", () => {
        let randomColor = colors[Math.floor(Math.random() * colors.length)]
        console.log(randomColor)
        if (nameInput.value == "" && phoneInput.value == "") {
            alert("please fill the input before creating contact")
        }
        else if (phoneInput.value == "") {
            alert("please add phone number")
        }
        else if (nameInput.value == "") {
            alert("please add name ")
        }
        else {
            let contactDetail = new Object()
            contactDetail.bgLogoColor = randomColor
            contactDetail.userName = nameInput.value
            if (phoneInput.value.length >= 10 && phoneInput.value.length <= 10) {
                contactDetail.userNumber = phoneInput.value
                contactList.push(contactDetail)
                phoneInput.value = ""
                nameInput.value = ""

                addContactToContactList()
                deleteContact()
            }
            else {
                alert("please enter your phone number properly")
            }
        }
    })
}

creatingUserDetailObject()

const addContactToContactList = () => {
    let contactListContainer = document.querySelector("#contactList")
    let right = document.querySelector("#right")
    right.classList.remove("hidden")
    right.classList.add("flex")
    let clutter = ""
    contactList.forEach((contact, idx) => {
        clutter += `<div class="border w-full flex gap-2 items-center p-2 rounded-md">
                    <div class="h-11 w-11 relative text-2xl rounded-full flex items-center justify-center bg-[${contact.bgLogoColor}] capitalize">
                        <h1>${contact.userName.charAt(0)}</h1> 
                    </div>
                    <div class="flex items-center justify-between w-full">
                        <div class="flex flex-col gap-2">
                            <h1 class="text-xl leading-none capitalize">${contact.userName}</h1>
                            <p class="text-sm leading-none">${contact.userNumber}</p>
                        </div>
                        <button data-id="${idx}" class="bg-red-600 p-2 rounded-md hover:bg-red-700 deleteBtn">Delete Contact</button>
                    </div>
                </div>`
    })
    contactListContainer.innerHTML = clutter
}

const searchContact = () => {
    let search = document.querySelector("#Search")
    search.addEventListener("input", (e) => {
        let searched = contactList.filter(contact => {
            return contact.userName.toLowerCase().startsWith(search.value.toLowerCase())
        })
        displaySearchElem(searched)
    })

    const displaySearchElem = (searchedElem) => {
        let contactListContainer = document.querySelector("#contactList")
        let newClutter = ""
        searchedElem.forEach((contact,idx) => {
            newClutter += `<div class="border w-full flex gap-2 items-center p-2 rounded-md">
                    <div class="h-11 w-11 relative text-2xl rounded-full flex items-center justify-center bg-[${contact.bgLogoColor}] capitalize">
                        <h1>${contact.userName.charAt(0)}</h1> 
                    </div>
                    <div class="flex items-center justify-between w-full">
                        <div class="flex flex-col gap-2">
                            <h1 class="text-xl leading-none capitalize">${contact.userName}</h1>
                            <p class="text-sm leading-none">${contact.userNumber}</p>
                        </div>
                        <button data-id="${idx}" class="bg-red-600 p-2 rounded-md hover:bg-red-700 deleteBtn">Delete Contact</button>
                    </div>
                </div>`
        })
        contactListContainer.innerHTML = newClutter
        deleteContact()
    }
}
searchContact()

const deleteContact = () => {
    const deletebtns = document.querySelectorAll(".deleteBtn")
    deletebtns.forEach(dltbtn => {
        dltbtn.addEventListener("click",()=>{
            let dataid = dltbtn.getAttribute("data-id")
            contactList.splice(dataid,1)
            addContactToContactList()
        })
    })
}
