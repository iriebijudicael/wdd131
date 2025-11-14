// Static values matching your Weather section
const temperature = 10;      // °C
const windSpeed = 12;        // km/h

// One-line wind chill function (Celsius formula)
function calculateWindChill(t, s) {
  return Math.round(
    13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)
  );
}

// Only call calculateWindChill if valid
function displayWindChill() {
  const windChillElement = document.getElementById("windchill");

  // Valid wind chill conditions
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}

document.addEventListener("DOMContentLoaded", displayWindChill);



// Dynamically populate the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;