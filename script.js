const keys = document.querySelectorAll('.piano-keys');

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        const clickedKeyId = e.target.id;
        const pianoSound = new Audio(`./KeySounds/${clickedKeyId}.mp3`);
        pianoSound.play();
    });
});