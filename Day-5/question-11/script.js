let headingText = document.querySelector("h1")
headingText.addEventListener("mouseover", (event) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let intersectionOpervation = 1
    let init = setInterval(() => {
        event.target.innerHTML = event.target.innerHTML.split("").map((letter,index)=>{
            if (index < intersectionOpervation) {
                return event.target.dataset.text[index]
            }
            return letters[Math.floor(Math.random()*letters.length)]
        }).join("")
        if (intersectionOpervation >= 9) {
            clearInterval(init)
        }
        intersectionOpervation+=1
    }, 100);
})



// let headingText = document.querySelector("h1");

// headingText.addEventListener("mouseover", (event) => {
//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let intersectionOperation = 0; // Start from 0
//     let originalText = event.target.dataset.text; // Get original text

//     let init = setInterval(() => {
//         event.target.innerHTML = originalText.split("").map((letter, index) => {
//             if (index < intersectionOperation) {
//                 return letter; // Show correct letters progressively
//             }
//             return letters[Math.floor(Math.random() * letters.length)];
//         }).join("");

//         intersectionOperation++;

//         if (intersectionOperation > originalText.length) { // Stop at full text length
//             clearInterval(init);
//         }
//     }, 100); // Slightly slower for better effect
// });
