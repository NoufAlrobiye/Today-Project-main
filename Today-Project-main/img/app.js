window.addEventListener(load, () => {
let lon;
let lat;
let apikey="27ddadc485554c5bb84e95511a56aa0a";
let cityName = document.querySelector(".city");
let temperatureValue = document.querySelector(".value");
let temperatureDescirption = document.querySelector(".description")
let sunRise = document.querySelector("sun-rise")
let sunSet = document.querySelector("sun-set")
let weatherIcon = document.querySelector(".weather-icon-img")



if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
        lon = position.coords.longitude
        lat = position.coords.latitude

        const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apikey}&lan=eng`;

        fetch(api).then(response => {
            return response.json()
        })
        .then (data => {
            //console.log(data)
            const { timezone, temp, sunrise, sunset } = data.data[0]
            const { description, icon } = data.data[0].weather

            //Dom Elements 

            cityName.textContent = timezone;
            temperatureValue.textContent = Math.floor(temp) + "C";
            temperatureDescirption.textContent = description;
            sunRise.textContent = sunrise;
            sunSet.textContent = sunset;
            weatherIcon.src =``;
        })
    })
}
})








