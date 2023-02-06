import "./style.css";
const API_KEY = "1c81b446af528187f6f55d391a3a8f8c";

async function getCityWeather(city) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
	try {
		const response = await fetch(url, { mode: "cors" });
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}

const cityContainer = document.querySelector(".city-weather");
const cityNameH1 = cityContainer.querySelector("h1");
const cityWeatherDescription = cityContainer.querySelector("p");
const cityWeatherIcon = cityContainer.querySelector("img");

async function displayCityWeather(city) {
	try {
		const data = await getCityWeather(city);
		console.log(data.weather[0].icon);
		cityNameH1.textContent = data.name;
		cityWeatherDescription.textContent = data.weather[0].description;
		let icon = await fetch(createIconUrl(data.weather[0].icon), {
			mode: "cors",
		});
		console.log(icon);
		cityWeatherIcon.src = icon.url;
	} catch (err) {
		console.log(err);
	}
}

function createIconUrl(code) {
	return `https://openweathermap.org/img/wn/${code}@2x.png`;
}

displayCityWeather("Rome");
