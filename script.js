// console.log("WELCOME")
// // let song=[];
// // let list=document.getElementsByClassName("songlist");
// // for(let i=1;i<9;i++)
// //     {
// //         song[i]=document.getElementsById("song"+i);
// //     }
// let audioElement=new Audio('1.mp3');
// let masterplay=document.getElementById('masterplay');
// let progressbar=document.getElementById('progressbar');
// let gif=document.getElementById('gif');
// const songitem=Array.from(document.getElementsByClassName("songitem"));
// let songs=[
//     {songname:"believer",filepath:"1.mp3",coverpath:"songcover.jpeg"},
//     {songname:"husn",filepath:"2.mp3",coverpath:"songcover2.jpeg "},
//     {songname:"choolo",filepath:"3.mp3",coverpath:"songcover3.jpeg"},
//     {songname:"Teri-Yaadon-Mein",filepath:"4.mp3",coverpath:"songcover4.jpeg"},
//     {songname:"Dil Tod Ke",filepath:"5.mp3",coverpath:"songcover5.jpeg"},
//     {songname:"TERE HAWAALE",filepath:"6.mp3",coverpath:"songcover6.jpg"},
//     {songname:"Ve Kamleya",filepath:"7.mp3",coverpath:"songcover7.jpg"},
//     {songname:"Guli Mata",filepath:"8.mp3",coverpath:"songcover8.jpg"},
//     {songname:"Gulabi Sadi Ani Lali",filepath:"9.mp3",coverpath:"songcover9.jpg"},
//     {songname:"_Heeriye Heeriye Aa",filepath:"10.mp3",coverpath:"songcover10.jpg"}, 
//     {songname:"dil se dil tak",filepath:"11.mp3",coverpath:"song cover11.jpg"}
// ]

// songitem.forEach((element,i) => {
//     element.getElementsByTagName("img")[0].src=songs[i].coverpath;
//     element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
// });
// //playing audio
// masterplay.addEventListener('click',() =>{
//     if(audioElement.paused||audioElement.currentTime<=0){
//         audioElement.play();
//         gif.style.opacity=1;
//         masterplay.classList.remove('fa-play');
//         masterplay.classList.add('fa-pause');
        
//     }
//     else{
//         audioElement.pause();
//         gif.style.opacity=0;
//         masterplay.classList.remove('fa-pause');
//         masterplay.classList.add('fa-play');
       
//     }
// })
// audioElement.addEventListener('timeupdate',()=>{
//     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//     progressbar.value=progress;
// })
// progressbar.addEventListener('change',()=>{
//     audioElement.currentTime=progressbar.value*audioElement.duration/100;
// })
// const  makePlay= () =>
//     {
//         Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
               
//             element.target.classList.remove('fa-pause');
//             element.target.classList.add('fa-play');
//             })
//         }
            
    
// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
// element.addEventListener('click',(e) =>{
//     makePlay;
//     element.target.classList.add('fa-play');
//     element.target.classList.remove('fa-pause');
//     index=parseInt(e.target.id);
//     e.target.classList.remove('fa-play');
//     e.target.classList.add('fa-pause');
//     audioElement.src=`${index+1}.mp3`;
//     audioElement.currentTime=0;
//     audioElement.play();
//     masterplay.classList.remove('fa-play');
//     masterplay.classList.add('fa-pause');

// })
// })
console.log("WELCOME");

let audioElement = new Audio('1.mp3');
let masterplay = document.getElementById('masterplay');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
const songItems = Array.from(document.getElementsByClassName("songitem"));

let songs = [
    { songname: "Believer", filepath: "1.mp3", coverpath: "songcover.jpeg" },
    { songname: "Husn", filepath: "2.mp3", coverpath: "songcover2.jpeg" },
    { songname: "Choolo", filepath: "3.mp3", coverpath: "songcover3.jpeg" },
    { songname: "Teri-Yaadon-Mein", filepath: "4.mp3", coverpath: "songcover4.jpeg" },
    { songname: "Dil Tod Ke", filepath: "5.mp3", coverpath: "songcover5.jpeg" },
    { songname: "TERE HAWAALE", filepath: "6.mp3", coverpath: "songcover6.jpg" },
    { songname: "Ve Kamleya", filepath: "7.mp3", coverpath: "songcover7.jpg" },
    { songname: "Guli Mata", filepath: "8.mp3", coverpath: "songcover8.jpg" },
    { songname: "Gulabi Sadi Ani Lali", filepath: "9.mp3", coverpath: "songcover9.jpg" },
    { songname: "_Heeriye Heeriye Aa", filepath: "10.mp3", coverpath: "songcover10.jpg" },
    { songname: "Dil Se Dil Tak", filepath: "11.mp3", coverpath: "songcover11.jpg" }
];

// Populate song items
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});

// Play/Pause functionality
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    } else {
        audioElement.pause();
        gif.style.opacity = 0;
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressbar.value = progress;
});

// Seek functionality
progressbar.addEventListener('change', () => {
    audioElement.currentTime = progressbar.value * audioElement.duration / 100;
});

// Pause other songs and play the selected one
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    });
};

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        let index = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = songs[index ].filepath;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    });
});
