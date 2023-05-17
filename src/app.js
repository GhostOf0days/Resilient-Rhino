import countries from './countries.js';

window.onload = () => {
  const resourcesContainer = document.getElementById('resources');
  
  console.log('countries:', countries);
  
  countries.forEach(country => {
    const countryName = Object.keys(country)[0];
    const countryResources = country[countryName];
    
    console.log('countryName:', countryName);
    console.log('countryResources:', countryResources);
    
    const countryElement = document.createElement('div');
    countryElement.innerHTML = `
      <h2>${countryName}</h2>
      <ul>
        ${countryResources.map(resource => `
          <li>
            <a href="${resource.url}" target="_blank">${resource.name}</a>
            ${resource.url_info ? `<span class="info">${resource.url_info}</span>` : ''}
            ${resource.phone.length > 0 ? `<span class="info">- Phone: ${resource.phone.map(phone => `<a href="tel:${phone}">${phone}</a>`).join(' or ')}</span>` : ''}
            ${resource.phone_info ? `<span class="info">${resource.phone_info}</span>` : ''}
          </li>
        `).join('')}
      </ul>
    `;
    
    resourcesContainer.appendChild(countryElement);
  });
};
