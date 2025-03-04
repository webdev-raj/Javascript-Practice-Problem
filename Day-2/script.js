const rect = document.querySelector("#rect")
window.addEventListener("mousemove",(dets)=>{
    const data=gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + (rect.getBoundingClientRect().width/2),
        window.innerWidth-(100+(rect.getBoundingClientRect().width/2)),
        dets.clientX
    )
    gsap.to("#rect",{
        left:data,
        ease:"Power4.out"
    })
})