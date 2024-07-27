
const inputBox = document.getElementById("input-box")
const btn = document.getElementById("button")
const weather = document.getElementById("weather")
const day = document.getElementById("day")
const country = document.getElementById("country")


btn.addEventListener("click",async()=>{
    console.log(inputBox.value)
let country = inputBox.value
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=6d981a9f17c64accbed125546242107&q=${country}&aqi=yes`);
    const result = await response.json()
    weather.innerText = `${result.current.temp_c}`
    day.innerText = `${result.location.localtime}`
    country.innerText = `${result.location.country}`
    console.log(result)



})

// http://api.weatherapi.com/v1/current.json?key=6d981a9f17c64accbed125546242107&q=London&aqi=yes
