const weatherApiKey = "a10675a25ce3b2988d4493c9547dc470";
let city = "mumbai"
let temp
const fetchDataFromServer = ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`).then(function(row){
        return row.json()
    }).then(function(data){
        document.querySelector("#weatherImg").setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`)
        document.querySelector("#location").textContent = data.name
        document.querySelector("#shyDetails").textContent = data.weather[0].description
        document.querySelector("#humidity").textContent = data.main.humidity    
        document.querySelector("#windspeed").textContent = data.wind.speed
        temp =data.main.temp - 273.15
        document.querySelector("#degree").textContent = temp.toFixed(1)
    }).catch(function(error){
        console.log("not able to get response from server",error)
    })
}
fetchDataFromServer()

let searchBtn = document.querySelector("#btn")
let searchInput = document.querySelector("input[type='text']")
searchBtn.addEventListener("click",()=>{
    if(searchInput.value == ""){
        alert("please make sure you have to fill the input before searching weather")
    }else{
        city = searchInput.value
        fetchDataFromServer()
    }
})  