# Weather Application

This is a simple weather application that fetches weather data from the OpenWeatherMap API using Axios and displays it on a web page. The application is styled using Bootstrap for responsive design and enhanced styling.

## Approach

The goal of this project is to demonstrate proficiency in front-end development, including integrating an external API for data retrieval and using a CSS framework for styling. Here’s a breakdown of the approach:

1. **Project Setup**: 
   - Created a basic HTML structure (`index.html`), included Bootstrap for styling, and linked a custom CSS file (`style.css`).
   - Initialized Axios for making HTTP requests to the OpenWeatherMap API in the JavaScript file (`app.js`).

2. **Styling with Bootstrap**:
   - Utilized Bootstrap’s grid system and utility classes to create a responsive layout that adapts to various screen sizes.
   - Enhanced UI elements such as buttons, cards, and forms using Bootstrap’s components.

3. **Implementing Axios**:
   - Integrated Axios via CDN in `index.html` to handle asynchronous API requests.
   - Used Axios in `app.js` to fetch weather data from the OpenWeatherMap API, handling both successful responses and error cases.
   - Implemented basic error handling to display error messages when API requests fail.

4. **Testing and Refinement**:
   - Tested the application to ensure responsiveness across different devices and screen sizes.
   - Verified API functionality to fetch and display weather data accurately.
   - Refactored and refined CSS styles and JavaScript logic based on testing feedback and usability considerations.

## CSS Framework Used

- **Bootstrap**: Used Bootstrap 4 for styling and layout management. Leveraged Bootstrap’s grid system, components, and responsive utilities to ensure a consistent and visually appealing design.

## Axios Implementation

- **Installation**: Axios was included via CDN in `index.html` to simplify setup and usage.
- **Usage**: Axios was used in `app.js` to make GET requests to the OpenWeatherMap API. Here’s an example snippet:
  
  ```javascript
  axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric')
    .then(response => {
      
      console.log(response.data);
      
    })
    .catch(error => {
      
      console.error('Error fetching data:', error);
      
    });
