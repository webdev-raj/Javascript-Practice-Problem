const h1s = document.querySelectorAll(".headingText")
h1s.forEach((elem,idx)=>{
    const h1InnerText = elem.textContent
    const h1Split = h1InnerText.split("")
    let clutter = "";
    h1Split.forEach((letter,idx)=>{
        clutter+=`<span>${letter}</span>`
    })
    elem.innerHTML = clutter
})

gsap.to(".headingText span",{
    scrollTrigger:{
        trigger:".headingText span",
        scroller:"body",
        start:"-100% center",
        end:"500% center",
        scrub:2,
    },
    color:"#fff",
    duration:1,
    stagger:0.2
})

function lenisAnimation(){
    const lenis = new Lenis();
    function raf(time){
        lenis.raf(time)
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
}
lenisAnimation()