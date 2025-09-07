const keys = document.querySelectorAll('.piano-keys');

keys.forEach((key) => {
    key.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevents ghost clicks on mobile
        const clickedKeyId = e.target.id;
        const pianoSound = new Audio(`./KeySounds/${clickedKeyId}.mp3`);
        pianoSound.currentTime = 0; // Allow rapid retrigger
        pianoSound.play();
    });
    // Optional: Also support mouse clicks for desktop
    key.addEventListener('click', (e) => {
        const clickedKeyId = e.target.id;
        const pianoSound = new Audio(`./KeySounds/${clickedKeyId}.mp3`);
        pianoSound.currentTime = 0;
        pianoSound.play();
    });
});
