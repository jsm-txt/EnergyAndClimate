const diplay =document.querySelector('#display')
const efficiency =document.querySelector('#efficiency')
const height =document.querySelector('#height')

efficiency.addEventListener('input', HydroPower)
height.addEventListener('input', HydroPower)

function HydroPower(){
    const ef = efficiency.value/100
    const h = height.value 
    let power = h*ef*9.8
    display.innerHTML = power.toFixed(2) +"W"
}