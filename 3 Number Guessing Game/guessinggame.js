let a = parseInt(prompt("Enter the Maxium Number!!"))
while (!a){
     a = parseInt(prompt("Enter the Valid Number!!"))
     break
}
let num = Math.floor(Math.random() *a + 1) 
document.write(num)

let guess=  parseInt(prompt("Enter your First Guess"))
 while (guess !== num){
     if(guess > num){
        parseInt(prompt("Too high Enter new guess"))

     }else(
        parseInt(prompt("Too low Enter new guess"))
     )
 }
 console.log("You got it")