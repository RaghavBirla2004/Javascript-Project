let btn = document.querySelector("button");
let h = document.querySelector("h1")
btn.addEventListener("click" , function(){
    
    let r = Math.floor(Math.random () * 255);
    let g = Math.floor(Math.random () * 255);
    let b = Math.floor(Math.random () * 255);
    let newcolor = `rgb(${r} , ${g}, ${b})`
    
    document.body.style.backgroundColor = newcolor
    h.innerText = newcolor

})