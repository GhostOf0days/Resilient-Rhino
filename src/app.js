// import countries from "./countries.js" // NEEDS TO BE FIXED

window.onload = () => {
    const resourcesContainer = document.getElementById('resources');
  
    countries.forEach(countryData => {
      const countryName = Object.keys(countryData)[0];
      const countryResources = countryData[countryName];
      const countryCode = getCountryCode(countryName);
  
      const countryElement = document.createElement('div');
      countryElement.innerHTML = `
        <h2>
          ${countryCode ? `<span class="flag-icon flag-icon-${countryCode}"></span>` : ''}
          ${countryName}
        </h2>
        <ul>
          ${countryResources.map(resource => `
            <li>
              <a href="${resource.url}" target="_blank">${resource.name}</a>
              ${resource.url_info ? ` (${resource.url_info})` : ''}
              ${resource.phone.length > 0 ? ` - Phone: ${resource.phone.map(phone => `<a href="tel:${phone}">${phone}</a>`).join(' or ')}` : ''}
              ${resource.phone_info ? ` (${resource.phone_info})` : ''}
            </li>
          `).join('')}
        </ul>
      `;
  
      resourcesContainer.appendChild(countryElement);
    });
  };  