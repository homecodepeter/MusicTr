const Music = [
     {
         id: 1,
         song: "davido.mp3",
         singer: "Fall",
         img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHx8MHx8&w=1000&q=80",
         author: "Davido",

     },
     { 
        id: 2,
        song: "babt.mp3",
        singer: "Baby Girl",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMKTyO2_9CeeK6x6h2wtF-1yiZwU9WjxYhaQ&usqp=CAU",
        author: "Omalay",

    },
    {
        id: 3,
        song: "for.mp3",
        singer: "We Dem Boys",
        img: "https://img.etimg.com/thumb/msid-71477539,width-650,imgsize-622277,,resizemode-4,quality-100/music_thinkstockphotos.jpg",
        author: "Wiz Khalifa",

    },
    {
        id: 4,
        song: "omalay.mp3",
        singer: "I'm The Killer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9wC65kJd6tiw-LN5aDXlOHHCg2RHkS0yRCb7WP6ttZevp3j3SK_xv8aKSl8edBVizcIs&usqp=CAU",
        author: "2Pac shakur",

    }
];


const img = document.getElementById('music-img');
const author = document.getElementById('author');
const range = document.getElementById('range');
const volume = document.getElementById('volume');
const play = document.getElementById('play');
const prevBtn = document.getElementById('pre-btn');
const nextBtn = document.getElementById('next-btn');
const singer = document.getElementById('song');
const mySong = document.getElementById('MySong');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', e => {
   showSongs();
});


function showSongs(){
   let item = Music[currentItem];
   author.textContent = item.author;
   singer.textContent = item.singer;
   img.src = item.img;
   mySong.src = item.song;
   timer = setInterval(sliderMove, 1000);
}
play.addEventListener('click', e => {
    if(mySong.paused){
        mySong.play();
        play.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }else{
        mySong.pause();
      play.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
});

nextBtn.addEventListener('click', e => {
  currentItem++;
  if(currentItem == Music.length -1){
      currentItem = 0;
  }
  mySong.pause();
  play.innerHTML = '<i class="fa-solid fa-play"></i>';
  showSongs();
});

prevBtn.addEventListener('click', e => {
    currentItem--;
    if(currentItem == 0){
        currentItem = Music.length -1;
    }
    mySong.pause();
    play.innerHTML = '<i class="fa-solid fa-play"></i>';
    showSongs();
  });
  

//   volume
function volume_change(){
    volume_change.volume = volume.value;
    mySong.volume = volume.value / 200
}

// slider 
function speed_change(){
    slider = mySong.duration * (range.value / 100);
    mySong.currentTime = slider;
}


function sliderMove(){
    let position = 0;

  if(!isNaN(mySong.duration)){
      position = mySong.currentTime * (100 / mySong.duration);
      range.value = position;
  }
}