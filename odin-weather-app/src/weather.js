const loadingScreen = document.getElementById("loading-screen");
loadingScreen.style.display = "block";

async function getWeather() {
  try {
    let location = document.getElementById("location").value;
    if (location == "") {
      location = "Poznan";
    }
    let query = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=d4eae3ba006f45bda87220203230910&q=${location}&days=3&aqi=no&alerts=no`,
    );
    let response = await query.json();
    loadingScreen.style = "none";
    return response;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}
async function drawData(response) {
  let tempCheck = document.getElementById("tempSwitch").checked;
  document.getElementById("location-name").innerText =
    response.location.name + ", " + response.location.country;
  document.getElementById("latest-update").innerText =
    response.current.last_updated;
  document
    .getElementById("weather-icon")
    .setAttribute("src", "https://" + response.current.condition.icon);
  if (tempCheck == false) {
    document.getElementById("temp").innerText = response.current.temp_c + " °C";
  } else {
    document.getElementById("temp").innerText = response.current.temp_f + " °F";
  }
  document.getElementById("weather-status").innerText =
    response.current.condition.text;

  const weatherDetails = document.getElementById("weather-details");
  weatherDetails.innerHTML = "";

  const weatherWindKPH = document.createElement("p");
  weatherWindKPH.innerText = "Wind: " + response.current.wind_kph + " (km/h)";
  weatherDetails.appendChild(weatherWindKPH);

  const weatherHumidity = document.createElement("p");
  weatherHumidity.innerText = "Humidity: " + response.current.humidity + "%";
  weatherDetails.appendChild(weatherHumidity);

  const weatherChanceRain = document.createElement("p");
  weatherChanceRain.innerText =
    "Chance of rain: " +
    response.forecast.forecastday[0].day.daily_chance_of_rain +
    "%";
  weatherDetails.appendChild(weatherChanceRain);

  const forecastDiv = document.getElementById("forecastDiv");
  forecastDiv.innerHTML = "";

  let forecastArray = response.forecast.forecastday;
  for (const day in forecastArray) {
    const forecastTab = document.createElement("div");
    forecastTab.classList.add(
      "weather-tab",
      "p-6",
      "border-solid",
      "border-2",
      "rounded-xl",
    );
    forecastDiv.appendChild(forecastTab);

    const forecastDate = document.createElement("p");
    forecastDate.innerText = forecastArray[day].date;
    forecastDate.classList.add("text-center", "text-xl");
    forecastTab.appendChild(forecastDate);

    const forecastImgWrapper = document.createElement("div");
    forecastImgWrapper.classList.add("flex", "items-center", "justify-center");
    forecastTab.appendChild(forecastImgWrapper);

    const forecastImg = document.createElement("img");
    forecastImg.src = "https://" + forecastArray[day].day.condition.icon;
    forecastImgWrapper.appendChild(forecastImg);

    const forecastTemp = document.createElement("p");
    if (tempCheck == false) {
      forecastTemp.innerText = forecastArray[day].day.avgtemp_c + " °C";
    } else {
      forecastTemp.innerText = forecastArray[day].day.avgtemp_f + " °F";
    }
    forecastImgWrapper.appendChild(forecastTemp);

    const forecastStatus = document.createElement("p");
    forecastStatus.innerText = forecastArray[day].day.condition.text;
    forecastStatus.classList.add("text-center", "text-xl");
    forecastTab.appendChild(forecastStatus);
  }
}

async function refreshData() {
  try {
    let result = await getWeather();
    await drawData(result);
  } catch (error) {
    console.error("Something happened...", error);
    loadingScreen.style = "none";
    throw error;
  }
}

export default refreshData;
