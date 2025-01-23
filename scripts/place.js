// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

// Update the weather details on page load
document.addEventListener("DOMContentLoaded", () => {
    const temperature = 5; // Static temperature in Celsius
    const windSpeed = 15; // Static wind speed in km/h

    const windChillElement = document.getElementById("wind-chill");
    const lastModifiedElement = document.getElementById("last-modified");

    if (temperature <= 10 && windSpeed > 4.8) {
        windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }

    // Update last modified date
    lastModifiedElement.textContent = document.lastModified;
});

