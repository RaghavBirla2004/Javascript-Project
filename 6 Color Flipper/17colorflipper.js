let colors = ["Green" , "rgb(252, 186, 3)" , "Red" , "Purple" , "Yellow"];
let btn = document.querySelector("button");
let p2 = document.querySelector(".p2")
btn.addEventListener("click" , function(){
    let randomnumber = Math.floor(Math.random() * 5)
     let rcolor = document.body.style.backgroundColor = colors[randomnumber]
    p2.textContent = rcolor
    
})