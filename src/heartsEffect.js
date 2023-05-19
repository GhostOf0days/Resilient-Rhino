document.body.addEventListener('mousemove', function(event) {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = (event.pageX - 15) + 'px'; // Position the heart at the cursor's x position
    heart.style.top = (event.pageY - 15) + 'px'; // Position the heart at the cursor's y position
    heart.style.pointerEvents = 'none';
    document.body.appendChild(heart);

    setTimeout(() => { // Start reducing the heart's opacity after a short delay
        heart.style.transition = 'opacity 0.5s ease-in-out';
        heart.style.opacity = 0;
    }, 100);

    setTimeout(() => { // Remove the heart from the document after it has fully faded
        document.body.removeChild(heart);
    }, 600);
});