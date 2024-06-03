const apiKey = '9EHKG8FMG34Z2NSPCHKMW5VUN';

function getWeather() {
    const location = document.getElementById('locationInput').value || 'india';
    const apiUrl = `https://weather.visualng.com/VisualngWebServices/rest/services/timeline/${location}?unitGroup=us&key=${apiKey}&contentType=json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weatherInfo').innerHTML = '<p>Failed to retrieve weather data. Please try again.</p>';
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    const currentConditions = data.currentConditions;
    
    if (currentConditions) {
        weatherInfoDiv.innerHTML = `
            <p><strong>Location:</strong> ${data.resolvedAddress}</p>
            <p><strong>Temperature:</strong> ${currentConditions.temp} °F</p>
            <p><strong>Conditions:</strong> ${currentConditions.conditions}</p>
            <p><strong>Humidity:</strong> ${currentConditions.humidity} %</p>
            <p><strong>Wind Speed:</strong> ${currentConditions.windspeed} mph</p>
        `;
    } else {
        weatherInfoDiv.innerHTML = '<p>No current weather data available for this location.</p>';
    }
}
