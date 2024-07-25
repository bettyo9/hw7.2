// Function to fetch weather data
function fetchWeather(city) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl)
      .then(response => {
        // Handle successful response
        console.log(response.data);
  
        // Display weather information on the webpage
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
          <h2>Weather in ${response.data.name}</h2>
          <p>Temperature: ${response.data.main.temp}°C</p>
          <p>Description: ${response.data.weather[0].description}</p>
          <p>Humidity: ${response.data.main.humidity}%</p>
          <p>Wind Speed: ${response.data.wind.speed} m/s</p>
        `;
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
  
        // Display error message on the webpage
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = '<p class="error-message">Failed to fetch weather data. Please check the city name and try again.</p>';
      });
  }
  
  // Event listener for form submission
  document.getElementById('weather-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cityInput = document.getElementById('city-input').value.trim();
  
    if (cityInput) {
      fetchWeather(cityInput);
    } else {
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = '<p class="error-message">Please enter a city name.</p>';
    }
  });
  