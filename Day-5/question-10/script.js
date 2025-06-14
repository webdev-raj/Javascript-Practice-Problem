let wordInput = document.querySelector("#wordInput")
let searchBtn = document.querySelector("#searchBtn")
let resultContainer = document.querySelector("#resultBox")
console.log(wordInput, searchBtn)
async function dataDictionary(searchName) {
    let row = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchName}`)
    let data = await row.json()
    if (row.status == 404) {
        resultContainer.innerHTML = `<h1 class="text-center text-zinc-600">No result found '${wordInput.value}'</h1>`
        console.log("hello")
    }else{
        dataRender(data[0])
    }
    console.log(data)
}

searchBtn.addEventListener("click", () => {
    dataDictionary(wordInput.value)
})

function dataRender(data) {
    resultContainer.innerHTML = `<h1><strong>Word</strong> : <span class="text-zinc-500">${data.word}</span>
            </h1>
            <h1><strong>Part Of Speech</strong> : <span class="text-zinc-500">${data.meanings[0].partOfSpeech}</span>
            </h1>
            <h1><strong>Definition</strong> : <span class="text-zinc-500">${data.meanings[0].definitions[0].definition}</span></h1>`
}