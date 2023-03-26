let container = document.querySelector(".container");
let prevBtn = document.querySelector("#prev");
let nextBtn = document.querySelector("#next");
let playBtn = document.querySelector("#play");
let audio = document.querySelector("#audio");
let title = document.querySelector(".title");
let cover = document.querySelector("#cover");
let progress = document.querySelector(".progress");
let progressContainer = document.querySelector(".progress-container");
let author = document.querySelector("#author");


let songs = ["bloodysamaritan",
 "hello", 
 "monalisa", 
 "Send Me Away", 
 "Triumphant", 
 "Wavin Flag", 
 "What If I Say", 
 "Perfect Duet", 
 "One Call Away", 
 "On The Low", 
 "Omo Elewa", 
 "Monsters You Made", 
 "King", 
 "Issues", 
 "If The World Was Ending", 
 "Girls Like You", 
 "For You", 
 "Dandelions", 
 "Because You Loved Me", 
 "Bad Influence"
 ];

let songIndex = 17;

loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
}

function playSong() {
    container.classList.add("play");  playBtn.classList.remove("fa-play");
playBtn.classList.add("fa-pause");
    audio.play();
}

function pauseSong() {
    container.classList.remove("play");
playBtn.classList.add("fa-play");
playBtn.classList.remove("fa-pause");
    audio.pause();
}

function  prevSong() {
    songIndex--;
    
    if (songIndex < 0 ) {
        songIndex = songs.length - 1;
    }
    
    loadSong(songs[songIndex]);
    
    playSong();
}

function  nextSong() {
    songIndex++;
    
    if (songIndex > songs.length - 1 ) {
        songIndex = 0;
    }
    
    loadSong(songs[songIndex]);
    
    playSong();
}

function updateTime(e) {
    let {duration, currentTime} = e.srcElement;
    timePercent = (currentTime / duration) * 100;
    progress.style.width = `${timePercent}%`;
    progress.style.background = "#ff0090";
}

function  setProgress(e) {
    let width = this.clientWidth;
    let clickX = e.offsetX;
    let duration = audio.duration;
    
   audio.currentTime = (clickX / width) * duration;
     }

function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

function  changeColor() {
    document.body.style.background = getRandomColor();
    author.style.color = getRandomColor();
}

playBtn.addEventListener("click", () => {
    let playing = container.classList.contains("play");
    
   if (playing) {
      pauseSong();
    }
    else {
        playSong();
    }
});

container.addEventListener("change", changeColor)

prevBtn.addEventListener("click", prevSong);

nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateTime);

progressContainer.addEventListener("click", setProgress);

audio.addEventListener("ended", nextSong);

window.setInterval(function(){
changeColor();
}, 10000);
