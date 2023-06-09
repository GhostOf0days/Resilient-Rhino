const searchParams = new URLSearchParams(window.location.search);
const countryName = searchParams.get('country');

if (countryName) {
  const countryElement = document.getElementById('country-details');
  const country = window.countries.find(country => Object.keys(country)[0] === countryName);

  if (country) {
    const countryCode = getCountryCode(countryName);
    const countryResources = country[countryName];

    countryElement.innerHTML = `
      <h2>
        ${countryCode ? `<span class="flag-icon flag-icon-${countryCode}"></span>` : ''}
        ${countryName}
      </h2>
      <ul>
        ${countryResources.map(resource => `
          <li>
            ${resource.url ? `<a href="${resource.url}" target="_blank">${resource.name}</a>` : resource.name}
            ${resource.url_info ? ` (${resource.url_info})` : ''}
            ${resource.phone.length > 0 ? ` - Phone: ${resource.phone.map(phone => phone ? `<a href="tel:${phone}">${phone}</a>` : phone).join(' or ')}` : ''}
            ${resource.phone_info ? ` (${resource.phone_info})` : ''}
          </li>
        `).join('')}
      </ul>
    `;
  } else {
    countryElement.textContent = 'Country not found';
  }
} else {
  window.location.href = './home.html'; // Redirect to the main page if country name is not provided
}