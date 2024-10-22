document.addEventListener("DOMContentLoaded", function() {
  // Function to calculate wind chill
  function calculateWindChill(temp, windSpeed) {
      // Check if conditions are met for wind chill calculation
      if (temp <= 10 && windSpeed > 4.8) {
          // Wind Chill Formula in °C
          return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1);
      } else {
          return "N/A"; // Not Applicable
      }
  }

  // Static values for temperature and wind speed (for this example)
  const temperature = 23; // °C
  const windSpeed = 5;    // km/h

  // Get the weather box element and display the wind chill
  const weatherBox = document.querySelector('.weather-box ul');
  const windChill = calculateWindChill(temperature, windSpeed);

  // Update the weather box content with the calculated wind chill
  weatherBox.innerHTML = `
      <li><strong>Temperature:</strong> ${temperature}°C</li>
      <li><strong>Conditions:</strong> Partly Cloudy</li>
      <li><strong>Wind:</strong> ${windSpeed} km/h</li>
      <li><strong>Wind Chill:</strong> ${windChill}°C</li>
  `;
});


// Dynamically populate the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;