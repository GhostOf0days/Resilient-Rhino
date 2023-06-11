const fs = require('fs');
const path = require('path');

const countries = [
  "Argentina",
  "Australia",
  "Austria",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Canada",
  "China",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Kenya",
  "Malaysia",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Romania",
  "Russia",
  "Singapore",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
  "Zimbabwe",
  "Albania",
  "Bahamas",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Bosnia and Herzegovina",
  "Burundi",
  "Cambodia",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "England",
  "Estonia",
  "Fiji",
  "Gambia",
  "Gibraltar",
  "Guernsey",
  "Guyana",
  "Haiti",
  "Honduras",
  "Iran",
  "Jamaica",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kosovo",
  "Latvia",
  "Lebanon",
  "Libya",
  "Lithuania",
  "Luxembourg",
  "Malta",
  "Mauritius",
  "Moldova",
  "Mongolia",
  "Morocco",
  "Nepal",
  "North Macedonia",
  "Northern Ireland",
  "Pakistan",
  "Panama",
  "Papua New Guinea",
  "Peru",
  "Qatar",
  "Rwanda",
  "Saint Lucia",
  "Samoa",
  "Saudi Arabia",
  "Scotland",
  "Serbia",
  "Seychelles",
  "Slovakia",
  "Slovenia",
  "Sri Lanka",
  "Sudan",
  "Tanzania",
  "Trinidad and Tobago",
  "Uganda",
  "United Arab Emirates",
  "Uruguay",
  "Venezuela",
  "Wales",
  "Yemen"
];

// Generate sitemap.xml content
const generateSitemapXML = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://resilientrhino.org/</loc>
  </url>
  <url>
    <loc>https://resilientrhino.org/refresh.html</loc>
  </url>`;

  // Generate URLs for individual country detail pages
  countries.forEach((country) => {
    const url = `https://resilientrhino.org/country-details.html?country=${encodeURIComponent(country)}`;

sitemap +=
  `<url>
    <loc>${url}</loc>
  </url>`;
});

sitemap += `
</urlset>`;

    return sitemap;
};

// Generate sitemap.xml file
const generateSitemapFile = () => {
  const sitemapContent = generateSitemapXML();
  const outputDir = '../../';

  const filePath = path.join(outputDir, 'sitemap.xml');

  fs.writeFileSync(filePath, sitemapContent, { encoding: 'utf8' });
};

// Call the function to generate the sitemap.xml file
generateSitemapFile();