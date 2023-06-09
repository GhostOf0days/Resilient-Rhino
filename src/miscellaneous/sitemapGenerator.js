const countries = window.countries;

// Generate sitemap.xml content
const generateSitemapXML = () => {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://resilientrhino.org/</loc>
  </url>
  <url>
    <loc>https://resilientrhino.org/refresh.html</loc>
  </url>
`;

  // Generate URLs for individual country detail pages
  countries.forEach((countryData) => {
    const country = Object.keys(countryData)[0];

    countryData[country].forEach((entry) => {
      const url = `https://resilientrhino.org/src/country-details.html?country=${encodeURIComponent(country)}`;

      sitemap += `
  <url>
    <loc>${url}</loc>
  </url>`;
    });
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
