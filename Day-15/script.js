const productContainer = document.querySelector("#productsContainer")
const products = [{
    imagesSrc: "./image/1.png",
    id:1,
    chairName: "LD01 lounge chair",
    price: 200
}, {
    imagesSrc: "./image/2.png",
    id:2,
    chairName: "LD02 lounge chair",
    price: 290
},
{
    imagesSrc: "./image/3.png",
    id:3,
    chairName: "LD03 lounge chair",
    price: 300
},
{
    imagesSrc: "./image/4.png",
    id:4,
    chairName: "LD04 lounge chair",
    price: 190
},
{
    imagesSrc: "./image/5.png",
    id:5,
    chairName: "LD05 lounge chair",
    price: 200
},
{
    imagesSrc: "./image/6.png",
    id:6,
    chairName: "LD06 lounge chair",
    price: 400
},
{
    imagesSrc: "./image/7.png",
    id:7,
    chairName: "LD07 lounge chair",
    price: 320
},
{
    imagesSrc: "./image/8.png",
    id:8,
    chairName: "LD08 lounge chair",
    price: 190
},
{
    imagesSrc: "./image/9.png",
    id:9,
    chairName: "LD09 lounge chair",
    price: 290
}
]
products.map(product => {
    let cards = document.createElement("div")
    cards.classList.add("select-none", "h-96", "w-64", "rounded-xl", "bg-zinc-800", "flex", "flex-col", "items-center", "justify-between", "p-4", "shadow-[0px_0px_36px_-5px_rgba(0,_0,_0,_0.35)]", "border", "border-zinc-700")
    cards.innerHTML = `<div class="w-full h-52 bg-zinc-900 rounded-xl shadow-[inset_0px_0px_52px_-1px_rgba(0,_0,_0,_0.35)]"><img src="${product.imagesSrc}"
                        class="h-full w-full object-contain"></div>

                <h1 class="text-center text-2xl capitalize leading-none">${product.chairName}</h1>
                <p class="text-zinc-300 text-xl"><span>$</span>${product.price}</p>
                <button data-id="${product.id}" class="shadow-[inset_0px_0px_89px_-9px_rgba(0,_0,_0,_0.35)] px-3 py-2 border cursor-pointer rounded-md border-white hover:bg-zinc-900 active:scale-95 ease-out duration-100">Add to Cart</button>`
    productContainer.appendChild(cards)
})
