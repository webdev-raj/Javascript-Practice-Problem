let questionDiv = document.querySelectorAll(".hoverAnimation")
questionDiv.forEach(item=>{
    let ans = item.querySelector(".ans")
    let icon = item.querySelector(".icon")
    let flag = true

    item.addEventListener("click",()=>{
        if(flag){
            gsap.to(icon,{
                rotate:"180deg"
            })
            ans.classList.replace("h-0","h-full")
            ans.classList.remove("hidden")
            flag = false
        }
        else{
            gsap.to(icon,{
                rotate:"0deg"
            })
            ans.classList.replace("h-full","h-0")
            ans.classList.add("hidden")
            flag = true
        }
    })
})