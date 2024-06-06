let interruptor = false;
let channels = document.getElementsByClassName("channels");
let power = document.getElementById("power");


let arrayBotones = Array.from(channels)
console.log(arrayBotones)




for(let i = 0; i < arrayBotones.length; i++){
    arrayBotones[i].addEventListener("click", () => {
        if(interruptor){
            console.log(`Has pulsado el botón ${i+1}`)
        }
    })
}
power.addEventListener("click", ()=> {
    console.log("me han pulsado....")
    interruptor = !interruptor
    power.classList.toggle("power-on")
})
