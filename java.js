const diplay =document.querySelector('#display')
const efficiency =document.querySelector('#efficiency')
const height =document.querySelector('#height')
const flow =document.querySelector('#Flowrate')
const bg =document.querySelector('#EnergyCalculators')


efficiency.addEventListener('input', HydroPower)
height.addEventListener('input', HydroPower)
flow.addEventListener('input', HydroPower)

function HydroPower(){
    const ef = efficiency.value/100
    const h = height.value
    const f = flow.value
    let power = h*ef*9.8*f
    display.innerHTML = `${power.toFixed(2)}W = 9.8 x ${f} x ${h}`
    bg.style.backgroundImage = "url('images/dam.jpg')";
    bg.style.backgroundSize = "cover";
}

const windDiplay =document.querySelector('#displaywind')
const mechanicalEfficiency =document.querySelector('#mechanical')
const windEfficiency =document.querySelector('#wind-efficiency')
const velocity =document.querySelector('#velocity')

mechanicalEfficiency.addEventListener('input', WindPower)
windEfficiency.addEventListener('input', WindPower)
velocity.addEventListener('input', WindPower)

function WindPower(){
    const me = mechanicalEfficiency.value/100
    const we = windEfficiency.value/100
    const v = velocity.value
    let power = me*we*.59*6.1*Math.pow(10,-4)*Math.pow(v,3)
    windDiplay.innerHTML = `${power.toFixed(4)}kW/m^2 = ${me} x ${we} x .59 x 6.1 x 10^-4 x ${v}^3 `
    bg.style.backgroundImage = "url('images/wind.jpg')";
    bg.style.backgroundSize = "cover";
}

const solarDisplay =document.querySelector('#dailysun')
const area =document.querySelector('#area')

area.addEventListener('input', solarPower)

function solarPower(){
    const a = area.value
    let power = a*164
    solarDisplay.innerHTML = `${power}W/m^2 = 164 x ${a}`
    bg.style.backgroundImage = "url('images/forest.jpg')";
    bg.style.backgroundSize = "cover";

}

const geoDiplay =document.querySelector('#geo-display')
const geoEfficiency =document.querySelector('#geo-efficiency')
const volumeHeat =document.querySelector('#volume-heat')
const volume =document.querySelector('#volume')
const zone=document.querySelector('#zone')
const temp=document.querySelector('#temperature')

geoEfficiency.addEventListener('input', geoPower)
volumeHeat.addEventListener('input', geoPower)
volume.addEventListener('input', geoPower)
zone.addEventListener('input', geoPower)
temp.addEventListener('input', geoPower)

function geoPower(){
    const ge = geoEfficiency.value/100
    const vh= volumeHeat.value/100
    const v = volume.value
    const z = zone.value
    const t = temp.value

    let conversion = v* Math.pow(10,15)
    let power = conversion * vh * (z - t) * ge

    geoDiplay.innerHTML = `${power}W = ${ge} x (${v} x 10^15 )
     x ${vh} x (${z} - ${t})` 
    bg.style.backgroundImage = "url('images/geyser.jpg')";
    bg.style.backgroundSize = "cover";
}