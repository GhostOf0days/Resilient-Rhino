function displayCountryDetails(countryName) {
    // Redirect to the country details page
    window.location.href = `country-details.html?country=${encodeURIComponent(countryName)}`;
  }

function displayCountryCards(countries) {
const resourcesDiv = document.getElementById('resources');
resourcesDiv.innerHTML = '';

countries.forEach(country => {
    const countryName = Object.keys(country)[0];
    const countryCode = getCountryCode(countryName);

    const countryCard = document.createElement('div');
    countryCard.className = 'country-card';
    countryCard.addEventListener('click', function() {
    displayCountryDetails(countryName);
    });

    const countryFlag = document.createElement('span');
    countryFlag.className = `flag-icon flag-icon-${countryCode}`;

    const countryNameElement = document.createElement('div');
    countryNameElement.className = 'country-name';

    const countryFlagElement = document.createElement('div');
    countryFlagElement.appendChild(countryFlag);

    const countryNameText = document.createElement('div');
    countryNameText.textContent = countryName;

    countryNameElement.appendChild(countryFlagElement);
    countryNameElement.appendChild(countryNameText);

    countryCard.appendChild(countryNameElement);

    resourcesDiv.appendChild(countryCard);
});
}

function searchCountry() {
const searchInput = document.getElementById('search-input');
const searchTerm = searchInput.value.trim().toLowerCase();

// MyWorld easter egg, paying homage to MyWorld winning the First Penguin Award at TartanHacks 2023

// Remove 'cursor-fish' class
document.body.classList.remove('cursor-fish');

if (searchTerm === 'myworld') {
    document.body.style.cursor = "url('../public/images/cursors/penguinCursor.cur'), auto";
    // Ensure all countries are still displayed when the MyWorld easter egg is triggered
    displayCountryCards(window.countries);
    return;
}

const filteredCountries = window.countries.filter(country => {
    const countryName = Object.keys(country)[0].toLowerCase();
    return countryName.includes(searchTerm);
});

if (filteredCountries.length === 0) { 
    displayCountryCards(window.countries);
    return;
}

displayCountryCards(filteredCountries);
}

// Display all country cards initially
displayCountryCards(window.countries);