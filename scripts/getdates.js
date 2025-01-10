// Dynamically populate the current year in the footer's first paragraph
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Dynamically populate the last modified date in the footer's second paragraph
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;


