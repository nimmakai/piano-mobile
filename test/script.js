/*const keys = document.querySelectorAll('.piano-keys');

keys.forEach((key) => {
    key.addEventListener('click', (e) => {
        const clickedKeyId = e.target.id;
        const pianoSound = new Audio(`./KeySounds/${clickedKeyId}.mp3`);
        pianoSound.play();
    });
});*/
document.getElementById('b3').addEventListener('click', function () {
    const pianoSound = new Audio('./KeySounds/b3.mp3');
    pianoSound.play();
});
document.getElementById('a3').addEventListener('click', function () {
    const pianoSound = new Audio('./KeySounds/a3.mp3');
    pianoSound.play();
});
document.getElementById('g3').addEventListener('click', function () {
    const pianoSound = new Audio('./KeySounds/g3.mp3');
    pianoSound.play();
});


