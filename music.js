const dumbRapSong = document.getElementById('dumbRapSong');
const surveySong = document.getElementById('surveySong');
const gallerySong = document.getElementById('gallerySong');

dumbRapSong.loop = false;
surveySong.loop = true;
gallerySong.loop = true;

function playSong() {
    dumbRapSong.play();
}

function pauseSong() {
    dumbRapSong.pause();
}

function playSong2() {
    surveySong.play();
}

function pauseSong2() {
    surveySong.pause();
}

function playSong3() {
    gallerySong.play();
}

function pauseSong3() {
    gallerySong.pause();
}