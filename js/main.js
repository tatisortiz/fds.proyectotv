let interruptor = false;
let channels = document.getElementsByClassName("button");
let power = document.getElementById("power");
let tv = document.getElementById("tv")
let fecha = document.getElementById("fecha")

function hora() {
    const date = new Date().toLocaleString(); 
    fecha.innerHTML = date;
}
setInterval(hora,1000)

let arrayBotones = Array.from(channels)
console.log(arrayBotones)


for(let i = 0; i < arrayBotones.length; i++){
    arrayBotones[i].addEventListener("click", (e) => {
        if(interruptor){
            tv.classList.remove(tv.classList[tv.classList.length-1])
            tv.classList.add(`channel${e.target.innerHTML}`)
           
        console.log(`Has pulsado el botón ${i+1}`)
        }
    })
}
power.addEventListener("click", ()=> {
    console.log("me han pulsado....")
    interruptor = !interruptor
    if (interruptor){
       fecha.classList.remove("oculto") 
         tv.classList.add("channel0")
    }


    else {
        fecha.classList.add("oculto") 
        tv.classList.remove(tv.classList[tv.classList.length-1])
    
    }

    power.classList.toggle("power-on")


})
