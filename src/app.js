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
  
    const filteredCountries = window.countries.filter(country => {
      const countryName = Object.keys(country)[0].toLowerCase();
      return countryName.includes(searchTerm);
    });
  
    displayCountryCards(filteredCountries);
  }
  
  // Display all country cards initially
  displayCountryCards(window.countries);
  