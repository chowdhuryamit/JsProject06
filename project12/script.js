let progress=document.getElementById('progress')
const ctrlIcon=document.getElementById('ctrlIcon');
const song=document.getElementById('audio');

song.onloadedmetadata=function () {
    progress.max=song.duration;
    progress.value=song.currentTime;
}

ctrlIcon.addEventListener('click',(e)=>{
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause");
        ctrlIcon.classList.remove("fa-play");
    }
})

if (song.play()) {
    setInterval(() => {
        progress.value=song.currentTime;
    }, 1000);
}

progress.addEventListener('click',(e)=>{
    song.play();
    song.currentTime=progress.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
})
