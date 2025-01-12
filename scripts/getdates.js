// Dynamically populate the current year in the footer
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Dynamically populate the last modified date in the footer
const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent = 'Last Modification: ' + lastModifiedDate.toLocaleString();


