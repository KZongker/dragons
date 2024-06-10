const surveySong = document.getElementById('surveySong');
const gallerySong = document.getElementById('gallerySong');

surveySong.loop = true;
gallerySong.loop = true;

function playSong() {
    surveySong.play();
}

function pauseSong() {
    surveySong.pause();
}

function playSong2() {
    gallerySong.play();
}

function pauseSong2() {
    gallerySong.pause();
}