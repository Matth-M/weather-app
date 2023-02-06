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

async function displayCityWeather(city) {
	const data = await getCityWeather(city);
	console.log(data.name);
	console.log(data.weather[0].main);
}

displayCityWeather("Rome");
