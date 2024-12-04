document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('reveal-btn');
    const laterButton = document.getElementById('later-btn');
    const gallery = document.getElementById('photo-gallery');
    const music = document.getElementById('background-music');

    revealButton.addEventListener('click', () => {
        gallery.classList.remove('hidden');
        music.play();
        revealButton.style.display = 'none';
        laterButton.style.display = 'none';
        alert("Surprise! Happy 6-Month Anniversary, Janhvi 🎉");
    });

    laterButton.addEventListener('click', () => {
        alert("No worries! Come back when you're ready 😊");
    });
});
