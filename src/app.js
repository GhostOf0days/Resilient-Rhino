function displayCountryDetails(countryName) {
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
  
  function displayAnimeCursorsDropdown() {
    const dropdownContainer = document.getElementById('anime-dropdown-container');
    const dropdownWrapper = document.getElementById('anime-dropdown-wrapper');
    const dropdownList = document.getElementById('anime-dropdown-list');
  
    dropdownList.innerHTML = '';
  
    for (const cursorName in window.animeCursors) {
      const cursorPath = window.animeCursors[cursorName];
  
      const listItem = document.createElement('li');
      listItem.className = 'anime-dropdown-item';
  
      const cursorImage = document.createElement('img');
      cursorImage.src = cursorPath;
      cursorImage.alt = cursorName;
      cursorImage.title = cursorName;
  
      listItem.appendChild(cursorImage);
      dropdownList.appendChild(listItem);
    }
  
    dropdownContainer.style.display = 'block';
  }
  
  function handleCursorSelection(event) {
    const selectedCursor = event.target.closest('.anime-dropdown-item');
    if (selectedCursor) {
        const cursorImage = selectedCursor.querySelector('img');
        const cursorPath = cursorImage.src;
        // Set the selected cursor as the body cursor
        document.body.style.cursor = `url('${cursorPath}'), auto`;
  
        // Minimize the dropdown to show just the button
        const dropdownButton = document.getElementById('anime-dropdown-button');
        dropdownButton.style.display = 'inline-block';
    }
 }
  
  function toggleDropdown() {
    const dropdownContainer = document.getElementById('anime-dropdown-container');
    if (dropdownContainer.style.display === 'none') {
      dropdownContainer.style.display = 'block';
    } else {
      dropdownContainer.style.display = 'none';
    }
  }
  
  function searchCountry() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value.trim().toLowerCase();
  
    document.body.classList.remove('cursor-fish');
  
    if (searchTerm === 'myworld') {
      document.body.style.cursor = "url('../public/cursors/penguinCursor.cur'), auto";
      displayCountryCards(window.countries);
      return;
    }
  
    if (searchTerm === 'anime') {
      displayAnimeCursorsDropdown();
      displayCountryCards(window.countries);
      return;
    }
  
    const filteredCountries = window.countries.filter(country => {
      const countryName = Object.keys(country)[0];
      const countryNameLower = countryName.toLowerCase();
      const countryNicknames = window.countryNicknames[countryName] || [];
      const lowerCaseNicknames = countryNicknames.map(nickname => nickname.toLowerCase());
      return countryNameLower.includes(searchTerm) || lowerCaseNicknames.some(nickname => nickname.includes(searchTerm));
    });     
  
    if (filteredCountries.length === 0) {
      displayCountryCards(window.countries);
      return;
    }
  
    displayCountryCards(filteredCountries);
  }
  
  displayCountryCards(window.countries);
  
  const dropdownList = document.getElementById('anime-dropdown-list');
  dropdownList.addEventListener('click', handleCursorSelection);
  
  const dropdownButton = document.getElementById('anime-dropdown-button');
  dropdownButton.addEventListener('click', toggleDropdown);  