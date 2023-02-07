export function createIconUrl(code) {
	return `https://openweathermap.org/img/wn/${code}@2x.png`;
}
const API_KEY = "1c81b446af528187f6f55d391a3a8f8c";

export async function getCityWeather(city) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
	try {
		const response = await fetch(url, { mode: "cors" });
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
}
