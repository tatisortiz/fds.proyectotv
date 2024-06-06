let interruptor = false;
let channels = document.getElementsByClassName("channels");
let power = document.getElementById("power");
let tv = document.getElementById("tv")


let arrayBotones = Array.from(channels)
console.log(arrayBotones)


for(let i = 0; i < arrayBotones.length; i++){
    arrayBotones[i].addEventListener("click", () => {
        if(interruptor){
            tv.classList.remove(tv.classList[tv.classList.length-1])
            tv.classList.add(`channel${i}`)
           
        console.log(`Has pulsado el botón ${i+1}`)
        }
    })
}
power.addEventListener("click", ()=> {
    console.log("me han pulsado....")
    interruptor = !interruptor
    if (interruptor){tv.classList.add("channel0")}

    else {tv.classList.remove(tv.classList[tv.classList.length-1])}

    power.classList.toggle("power-on")
})
