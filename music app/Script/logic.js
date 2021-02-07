
const play = document.getElementById("play");
const music = document.querySelector("audio");
const image = document.querySelector("img");
const Artist = document.querySelector("h2");
const title = document.querySelector("h3");
const next = document.querySelector("#next");
const previous = document.querySelector("#prev");
const songs = [
	{
		name : "music1",
		title : "Ae dil hai muskil",
		Artist : "Arjit Singh"
	},
	{
		name : "music2",
		title : "Mushkurane",
		Artist : "Arjit Singh"
	},
	{
		name : "music3",
		title : "Itni si baat hai",
		Artist : "Arjit Singh"	
	},
	{
		name : "music4",
		title : "Lambergini",
		Artist : "Jassie Gill"
	},
	{
		name : "music5",
		title : "Dil diya gallan",
		Artist : "Atif aslam"
	},
	{
		name : "music6",
		title : "Sawan aaya hai",
		Artist : "Arjit Singh"	
	},
	{
		name : "music7",
		title : "Bulleya",
		Artist : "Arjit singh"
	},
	{
		name : "music8",
		title : "Hawayein",
		Artist : "Arjit Singh"	
	}
]
let isPlaying = false;
const playMusics = () => {
		isPlaying = true;
		music.play();
		play.classList.replace("fa-play" , "fa-pause");
		//image.classList.add("anime");
}

const pauseMusics = () => {
		isPlaying = false;
		music.pause();
		play.classList.replace("fa-pause" , "fa-play");
		image.classList.remove("anime");
}

play.addEventListener("click" , () => {
		
		if (isPlaying){
			pauseMusics();
		}
		else{
			playMusics();
		}
})

const loadSongs = (songs) => {
	title.textContent = songs.title;
	Artist.textContent = songs.Artist;
	music.src = "musics/"+songs.name + ".mp3";
	image.src = "images/"+songs.name + ".jpg";
}

let songIndex = 0;
loadSongs(songs[0]);

const nextSong = () => {
	songIndex = (songIndex + 1) % songs.length;
	loadSongs(songs[songIndex]);
	playMusics();
}

const prevSong = () => {
	songIndex = (songIndex - 1) % songs.length;
	loadSongs(songs[songIndex]);
	playMusics();
}


next.addEventListener("click" , nextSong);
prev.addEventListener("click" , prevSong);

