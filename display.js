import { getCityWeather, createIconUrl } from "./api";

const cityContainer = document.querySelector(".city-weather");
const cityNameH1 = cityContainer.querySelector("h1");
const cityWeatherDescription = cityContainer.querySelector("p");
const cityWeatherIcon = cityContainer.querySelector("img");

export async function displayCityWeather(city) {
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
