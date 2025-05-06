const api_Key = "d36e5172d7e34bf4bd73f09f99cd4f04"
window.addEventListener('load', fetchAPi("india"))
function fetchAPi(quary) {
    fetch(`https://newsapi.org/v2/everything?q=${quary}&apiKey=${api_Key}`)
        .then((row) => {
            return row.json()
        }).then((data) => {
            createNewsCards(data.articles)
            openNewWindow()
        })
}
const createNewsCards = (articles) => {
    let cardContainer = document.querySelector("#newContainer")
    let clutter = ""
    articles.forEach((article) => {
        if (!article.urlToImage) return;
        clutter += `
              <div data-url="${article.url}" class="shadow-[0px_0px_10px_1px_#4a5568] min-h-96 w-94 rounded-xl bg-[#1e1e1e] flex flex-col items-start justify-between cards cursor-pointer">
                      <div class="w-full h-52 bg-black rounded-xl overflow-hidden"><img src="${article.urlToImage}" class="h-full w-full object-cover"></div>
                      <div class="min-h-60 w-full flex flex-col items-start justify-start p-2 gap-2">
                          <h1 class="text-xl capitalize leading-tight">${article.title}
                          </h1>
                          <p class="text-zinc-400">${article.source.name} · 5/10/2023, 1:00:00 PM</p>
                          <p class="text-zinc-400 leading-tight text-sm">${article.description}
                          </p>
                      </div>
                  </div>
         `
    })
    cardContainer.innerHTML = clutter
}
function openNewWindow() {
    let cards = document.querySelectorAll(".cards")
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            window.open(card.getAttribute("data-url"), "_blank")
        })
    })
}

function searchNews(){
    let searchbox = document.querySelector("#searchbox")
    let btn = document.querySelector("#btn")
    btn.addEventListener("click",()=>{
        fetchAPi(searchbox.value)
    })
}
searchNews()
