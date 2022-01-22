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

// update play/pause icon
function updatePlayIcon(){
if(video.paused){
    play.innerHTML = '<i class= "fa fa-play fa-2x"></i>';
}

else {
    play.innerHTML = '<i class= "fa fa-pause fa-2x"></i>';


}

}
// update progress and timestamp
function updateProgress(){
progress.value = (video.currentTime/video.duration) * 100;

 // Get the minutes
 let mins = Math.floor(video.currentTime / 60);
 if(mins < video.duration){
   mins = '0' + String(mins);
 }

 // Get Seconds
 let secs = Math.floor(video.currentTime % 60);
 if(secs < video.duration){
   secs = '0' + String(secs);
 }

 timestamp.innerHTML = `${mins}:${secs}`;


}




// set Video progress function 
function setVideoProgress(){
   video.currentTime = (+progress.value * video.duration)/100;
}


function stopVideo(){
    video.currentTime = 0;
    video.pause();
}




//Event Listeners

video.addEventListener('click', togglerVideoStatus)
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);



play.addEventListener('click', togglerVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
