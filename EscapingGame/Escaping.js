const person = document.querySelector('#person');

window.addEventListener('keydown', (e) => {
    switch(e.code) {
        // 왼쪽으로 움직이는데 맨 끝에 도달하면 못움직이게 만들기
        case 'ArrowLeft': {
            console.log('왼쪽');
            break;
        }   
        // 오른쪽으로 움직이는데 맨 끝에 도달하면 못움직이게 만들기
        case 'ArrowRight': {
            console.log('오른쪽');
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