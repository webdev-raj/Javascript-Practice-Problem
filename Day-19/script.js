const dayContainer = document.querySelector("#dayChanging")
const hourContainer = document.querySelector("#hoursChanging")
const minContainer = document.querySelector("#minsChanging")
const secContainer = document.querySelector("#secondsChanging")
let getDate = document.querySelector("#getDate")
let btn = document.querySelector("#btn")
let init;
btn.addEventListener("click",()=>{
    let userDate = new Date(getDate.value)
    console.log(userDate)
    if (userDate<new Date()) {
        alert("please select future date")
    }
    else{
        let init = setInterval(()=>{
            let currentDate = Date.now()
            let different = userDate - currentDate
            let day = Math.floor(different/(1000*60*60*24))
            let hour = Math.floor(different/(1000*60*60)%24)
            let min = Math.floor(different/(1000*60)%60)
            let sec = Math.floor(different/(1000)%60)
            dayContainer.innerHTML = day
            hourContainer.innerHTML = hour
            minContainer.innerHTML = min
            secContainer.innerHTML = sec

            if(different<=0){
                alert("congratulation")
                clearInterval(init)
            }
        },1000)
    }
})