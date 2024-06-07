let counter = document.querySelector(".counter");
let change = document.querySelector(".change");
let btn = document.querySelector("button");

let count = 1;
btn.addEventListener("click", () => {
    setInterval(() => {
        if (count < 1000) {
            count++
            counter.textContent = count
        }
        

    }, 1)
    setTimeout(() => {
        change.textContent = "Followers of Raghav"
    }, 10000)


   }

)
