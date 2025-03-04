const rect = document.querySelector(".rect")

rect.addEventListener("mousemove", (dets) => {
    const dimentionOfRect = rect.getBoundingClientRect();
    const cursorOnRectangle = Math.floor(dets.clientX - dimentionOfRect.left)
    if (cursorOnRectangle <= dimentionOfRect.width / 2) {
        const mapRangeForLeft = gsap.utils.mapRange(0, dimentionOfRect.width / 2, 255, 0, cursorOnRectangle)
        gsap.to(rect, {
            backgroundColor: `rgb(${Math.floor(mapRangeForLeft)},0,0)`,
            ease: "power4.out",
        })
    }
    else {
        const mapRangeForRight = gsap.utils.mapRange(dimentionOfRect.width / 2, dimentionOfRect.width, 0, 255, cursorOnRectangle)
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${Math.floor(mapRangeForRight)})`,
            ease: "power4.out",
        })
    }
})

rect.addEventListener("mouseleave",()=>{
    gsap.to(rect,{backgroundColor:"transparent"})
})