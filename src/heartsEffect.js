document.body.addEventListener('mousemove', function(e) {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = (e.pageX - 25) + 'px'; // Position the heart at the cursor's x position
    heart.style.top = (e.pageY - 25) + 'px'; // Position the heart at the cursor's y position
    heart.style.pointerEvents = 'none';
    document.body.appendChild(heart);

    setTimeout(() => { // Make the heart disappear after 0.5 seconds
        heart.style.opacity = 0;
    }, 500);

    setTimeout(() => { // Remove the heart from the document after 1 second
        document.body.removeChild(heart);
    }, 1000);
});