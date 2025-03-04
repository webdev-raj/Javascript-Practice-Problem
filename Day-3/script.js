import links from "./links.js";
const rect = document.querySelector("#center");
function throttle(fn, delay) {
  let isThr = false;
  return function (...args) {
    if (!isThr) {
      fn.apply(this, args);
      isThr = true;

      setTimeout(() => {
        isThr = false;
      }, delay);
    }
  };
}
rect.addEventListener(
  "mousemove",
  throttle((e) => {
    const div = document.createElement("div")
    const image = new Image
    let tl = gsap.timeline();
    image.setAttribute("src",links[Math.floor(Math.random()*5)])+
    div.classList.add("container")
    div.style.top = e.clientY + "px"
    div.style.left = e.clientX + "px"
    div.appendChild(image)
    document.body.appendChild(div)
    tl.set(image,{
      y:"100%"
    })
    tl.to(image,{
      y:"0%",
      duration:.9,
      ease:"Power4.out"
    })
    tl.to(image,{
      y:"100%",
      duration:.9,
      ease:"Power4.out"
    })
    setTimeout(()=>{
      div.remove();
    },2000)
  }, 400)
);
