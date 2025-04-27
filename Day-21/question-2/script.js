let imageslink = [
    "https://images.unsplash.com/photo-1735757608938-7465bf115e7f?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1742787584125-d94d44334047?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1741200024556-2383648aba85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDUwfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1742646895349-93c71c08e693?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1613219332203-8513309bd7a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1503431128871-cd250803fa41?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg5fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D"
]
console.log(imageslink.length)
let currentIdx = 0
let previous = document.querySelector("#previous")
let next = document.querySelector("#next")
let imagesPreviewer = document.querySelector(".imagesPreviewer")
let newImage = document.createElement("img")
next.addEventListener("click",()=>{
    if(currentIdx==imageslink.length-1){
        currentIdx=0
    }
    else{
        currentIdx++
    }
    imagesLoad()
})
previous.addEventListener("click",()=>{
    if(currentIdx==0){
        currentIdx=imageslink.length-1
    }
    else{
        currentIdx--
    }
    imagesLoad()
})

function imagesLoad(){
    newImage.classList.add("h-full","w-full","rounded-lg","bg-cover","bg-center")
    newImage.setAttribute("src",imageslink[currentIdx])
    imagesPreviewer.append(newImage)
}
imagesLoad()


