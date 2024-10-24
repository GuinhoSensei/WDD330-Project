// api.js
const apiKey = 'Ydeec6a3c399e4cb60e5ccaf8aa746390';
const baseUrl = 'https://api.openweathermap.org/data/2.5';

export async function getCurrentWeather(city) {
    const response = await fetch(`${baseUrl}/weather?q=${city}&appid=${apiKey}&units=metric`);
    return response.json();
}

export async function getWeeklyForecast(city) {
    const response = await fetch(`${baseUrl}/forecast/daily?q=${city}&cnt=7&appid=${apiKey}&units=metric`);
    return response.json();
}
