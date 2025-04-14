const productContainer = document.querySelector("#productsContainer")
const products = [{
    imagesSrc: "./image/1.png",
    chairName: "LD01 lounge chair",
    price: 200
}, {
    imagesSrc: "./image/2.png",
    chairName: "LD02 lounge chair",
    price: 290
},
{
    imagesSrc: "./image/3.png",
    chairName: "LD03 lounge chair",
    price: 300
},
{
    imagesSrc: "./image/4.png",
    chairName: "LD04 lounge chair",
    price: 190
},
{
    imagesSrc: "./image/5.png",
    chairName: "LD05 lounge chair",
    price: 200
},
{
    imagesSrc: "./image/6.png",
    chairName: "LD06 lounge chair",
    price: 400
},
{
    imagesSrc: "./image/7.png",
    chairName: "LD07 lounge chair",
    price: 320
},
{
    imagesSrc: "./image/8.png",
    chairName: "LD08 lounge chair",
    price: 190
}
]
products.map(product => {
    let cards = document.createElement("div")
    cards.classList.add("h-96", "w-64", "rounded-xl", "bg-zinc-800", "flex", "flex-col", "items-center", "justify-between", "p-4")
    cards.innerHTML = `<div class="w-full h-52 bg-black rounded-xl"><img src="${product.imagesSrc}"
                        class="h-full w-full object-contain"></div>

                <h1 class="text-center text-2xl capitalize leading-none">${product.chairName}</h1>
                <p class="text-zinc-300"><span>$</span>${product.price}</p>
                <button class="px-3 py-2 border rounded-md border-white">Add to Cart</button>`
    productContainer.appendChild(cards)
})
