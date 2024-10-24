// ui.js
export function displayWeather(data) {
    const weatherDiv = document.getElementById('current-weather');
    weatherDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
    `;
}

export function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = data.list.map(day => `
        <div>
            <p>${new Date(day.dt * 1000).toDateString()}</p>
            <p>Temp: ${day.temp.day}°C</p>
            <p>Condition: ${day.weather[0].description}</p>
        </div>
    `).join('');
}

export function displayRecommendation(data) {
    const suggestionDiv = document.getElementById('suggestion');
    const temp = data.main.temp;
    
    if (temp > 25) {
        suggestionDiv.textContent = 'It\'s hot! Wear light clothes and stay hydrated.';
    } else if (temp < 10) {
        suggestionDiv.textContent = 'It\'s cold! Wear warm clothes and consider staying indoors.';
    } else {
        suggestionDiv.textContent = 'The weather is mild. Perfect for outdoor activities!';
    }
}
