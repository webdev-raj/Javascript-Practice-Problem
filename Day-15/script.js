const productContainer = document.querySelector("#productsContainer")
const productAddingNumberShowcase = document.querySelector("#productAddingNumberShowcase")
let cart = []
let productCount = 0
const products = [{
    imagesSrc: "./image/1.png",
    id: 1,
    chairName: "LD01 lounge chair",
    price: 200,
    quantity: 0
}, {
    imagesSrc: "./image/2.png",
    id: 2,
    chairName: "LD02 lounge chair",
    price: 290,
    quantity: 0
},
{
    imagesSrc: "./image/3.png",
    id: 3,
    chairName: "LD03 lounge chair",
    price: 300,
    quantity: 0
},
{
    imagesSrc: "./image/4.png",
    id: 4,
    chairName: "LD04 lounge chair",
    price: 190,
    quantity: 0
},
{
    imagesSrc: "./image/5.png",
    id: 5,
    chairName: "LD05 lounge chair",
    price: 200,
    quantity: 0
},
{
    imagesSrc: "./image/6.png",
    id: 6,
    chairName: "LD06 lounge chair",
    price: 400,
    quantity: 0
},
{
    imagesSrc: "./image/7.png",
    id: 7,
    chairName: "LD07 lounge chair",
    price: 320,
    quantity: 0
},
{
    imagesSrc: "./image/8.png",
    id: 8,
    chairName: "LD08 lounge chair",
    price: 190,
    quantity: 0
},
{
    imagesSrc: "./image/9.png",
    id: 9,
    chairName: "LD09 lounge chair",
    price: 290,
    quantity: 0
}
]

function dynamicProductAdding() {
    products.map(product => {
        let cards = document.createElement("div")
        cards.classList.add("card", "select-none", "h-96", "w-64", "rounded-xl", "bg-zinc-800", "flex", "flex-col", "items-center", "justify-between", "p-4", "shadow-[0px_0px_36px_-5px_rgba(0,_0,_0,_0.35)]", "border", "border-zinc-700")
        cards.innerHTML = `<div class="w-full h-52 bg-zinc-900 rounded-xl shadow-[inset_0px_0px_52px_-1px_rgba(0,_0,_0,_0.35)]"><img src="${product.imagesSrc}"
                            class="h-full w-full object-contain"></div>
    
                    <h1 class="text-center text-2xl capitalize leading-none">${product.chairName}</h1>
                    <p class="text-zinc-300 text-xl"><span>$</span>${product.price}</p>
                    <button data-id="${product.id}" class="btns shadow-[inset_0px_0px_89px_-9px_rgba(0,_0,_0,_0.35)] px-3 py-2 border cursor-pointer rounded-md border-white hover:bg-zinc-900 active:scale-95 ease-out duration-100">Add to Cart</button>`
        productContainer.appendChild(cards)
    })
}
dynamicProductAdding()
let screen = document.querySelector("#toggleScreen")
let btns = document.querySelectorAll(".btns")
function cartOpeningClosing() {
    let close = document.querySelector("#close")
    let cartIcon = document.querySelector("#cartIcon")

    cartIcon.addEventListener("click", () => {
        screen.classList.remove("translate-x-full")
    })
    close.addEventListener("click", () => {
        screen.classList.add("translate-x-full")
    })
}

cartOpeningClosing()

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        let dataid = btn.getAttribute("data-id");
        let product = products.find((item) => {
            return item.id == dataid
        })
        let cartitem = cart.find((item) => {
            return item.id == dataid
        })
        if (cartitem) {
            cartitem.quantity += 1
            cartitem.totalprice = cartitem.quantity * cartitem.price
        }
        else {
            let newitem = {
                ...product,
                quantity: 1,
                totalprice: product.price
            }
            cart.push(newitem)
            productAddingNumberShowcase.innerHTML = ++productCount 
        }
        addingProductionOnCart(cart)
    })
})

function addingProductionOnCart(cartArray) {
    let totalPrice = document.querySelector(".totalPrice")
    let totalPriceCounter = 0
    let cartHistory = document.querySelector(".cartHistory")
    let data = ""
    cartArray.forEach((product) => {
        data += `<div
                    class="w-full bg-zinc-900 p-2 border border-zinc-400 flex items-start justify-start gap-2 rounded-xl">
                    <div
                        class="w-20 h-20 bg-zinc-800 border border-zinc-400 rounded-xl shadow-[inset_0px_0px_52px_-1px_rgba(0,_0,_0,_0.35)]">
                        <img src="${product.imagesSrc}" class="h-full w-full object-contain"></div>
                    <div>
                        <h1><span class="text-zinc-400">Name: </span>${product.chairName}</h1>
                        <h3><span class="text-zinc-400">Price: </span>$${product.totalprice}</h3>
                        <h2><span class="text-zinc-400">Quentity: </span>${product.quantity}</h2>
                    </div>
                </div>`
        totalPriceCounter += product.price * product.quantity
    })
    totalPrice.innerHTML = totalPriceCounter
    cartHistory.innerHTML = data
    // createDiscoundAlert(totalPriceCounter)
}

// function createDiscoundAlert(price){
//     let totalPrice = document.querySelector(".totalPrice")
//     let date = new Date
//     console.log(date.getMinutes())
//     if (date.getMinutes() == 3) {
//         alert("today is 10% off on every purchase of 5 product")
//         let newPrice = price-(price/10)
//         totalPrice.innerHTML = newPrice
//     }
// }

// createDiscoundAlert()