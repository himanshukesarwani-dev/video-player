const video = document.getElementById('video');
const play = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


// Play and pause function
function togglerVideoStatus(){
 if(video.paused){
     video.play();
 }
 else {
     video.pause();
 }
}








//Event Listeners

video.addEventListener('click', togglerVideoStatus)
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);



play.addEventListener('click', togglerVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
