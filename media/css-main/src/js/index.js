import '../scss/styles.scss'

let times = 0, playY;

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')

const video = document.querySelector('#iframe')
const button = document.querySelector('#btn-play')

document.querySelector('.fa-pause').style.display = 'none';


const play = (event) =>{
    if(times == 0){
        playY= video.src +='?autoplay=1';
        times = 1;
        document.querySelector('.fa-play').style.display = 'none';
        document.querySelector('.fa-pause').style.display = 'block';
    } else {
        playY = playY.slice(0, -11); // quantidade de caracteres a ser removida no caso remove ?autoplay=1
        video.src = playY
        times = 0;
        document.querySelector('.fa-play').style.display = 'block';
        document.querySelector('.fa-pause').style.display = 'none';
    }
}



// video.addEventListener('click', (event)=>{
//     play(event)
// })
// função do youtube é priorizada

button.addEventListener('click', (event)=>{
    play(event)
})


video.addEventListener('timeupdate', ()=>{
    let current = (video.currentTime / video.duration) * 100
    if(video.ended){
        document.querySelector('.fa-play').style.display = 'block';
        document.querySelector('.fa-pause').style.display = 'none';
    }

    document.querySelector('.inner').style.width = `${current}`
})