window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// Update the tracking ID dynamically
fetch('/.netlify/functions/google-analytics-tracking-id')
  .then(response => response.json())
  .then(data => {
    const trackingId = data.trackingId;
    gtag('config', trackingId);

    const scriptElement = document.createElement('script');
    scriptElement.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(scriptElement);
  })
  .catch(error => {
    console.error('Failed to fetch Google Analytics tracking ID:', error);
  });