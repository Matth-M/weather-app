import { displayCityWeather } from "./display";

const inputCityName = document.querySelector("#city-name-input");
const fetchWeatherButton = document.querySelector("#submit-city");

export function cityNameBtnHandler() {
	fetchWeatherButton.addEventListener("click", () => {
		const cityName = inputCityName.value.trim();
		displayCityWeather(cityName);
	});
}
