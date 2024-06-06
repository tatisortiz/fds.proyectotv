let interruptor = false; 
let channels = document.getElementsByClassName("channels");
let buttons = document.getElementsByClassName("power");


let arrayBotones = Array.from(buttons)
console.log(arrayBotones)


for(let i = 0; i < arrayBotones.length; i++){
    arrayBotones[i].addEventListener("click", () => {
        if(interruptor){
            console.log(`Has pulsado el botón ${i+1}`)
            
        }   
    })
}
    
   

