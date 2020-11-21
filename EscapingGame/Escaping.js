const person = document.querySelector('#person');

window.addEventListener('keydown', (e) => {
    switch(e.code) {
        case 'ArrowLeft': {
            
            break;
        }   
        case 'ArrowRight': {
            break;
        }
    }
});

const score = document.querySelector('#score');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const store = document.querySelector('#store');

document.querySelector('#pause').addEventListener('click', () => {
    // clearInterval(int);
})
document.querySelector('#start').addEventListener('click',() => {
    // if(int) {
    //     clearInterval(int);
    // }else {
    //     int = setInterval(tick,2000);
    // }
});