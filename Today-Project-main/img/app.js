 /* window.addEventListener(load, () => {
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
})  */


let weather = {
    apiKey: "27ddadc485554c5bb84e95511a56aa0a",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Denver");








