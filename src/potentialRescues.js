window.addEventListener('DOMContentLoaded', (event) => {
    fetch('/.netlify/functions/fetch-analytics')
        .then(response => response.json())
        .then(data => {
            const counter = document.getElementById('counter');
            counter.textContent = `Potential Rescues (Manually Verified): ${data.potentialRescues}`;
        });
});