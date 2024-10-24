import { getCurrentWeather, getWeeklyForecast } from './api.js';
import { displayWeather, displayForecast, displayRecommendation } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const city = 'San Francisco'; // you can later allow users to input their city
    const currentWeather = await getCurrentWeather(city);
    const weeklyForecast = await getWeeklyForecast(city);

    displayWeather(currentWeather);
    displayForecast(weeklyForecast);
    displayRecommendation(currentWeather);
});
