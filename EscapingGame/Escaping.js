const player = document.querySelector('#person');
const screen = document.querySelector('.mainBox');

function randomDrawing() {
    //TODO: 똥이 시작되는 지점에서 랜덤하게 만들기
}

function tick() {
    //TODO: 똥이 setInteval로 시간당으로 한칸씩 내려오게끔 만들기
}

function crush() {
    //TODO: 똥이랑 player랑 만났는지 확인하기
}

// player의 위치를 바닥에 고정을 하고 x의 값만 변하게 해주면 됨.
window.addEventListener('keydown', (e) => {
    switch(e.code) {
        // 왼쪽으로 움직이는데 맨 끝에 도달하면 못움직이게 만들기
        case 'ArrowLeft': {
            console.log('왼쪽');
            if(player.x < screen.left) {
                player.x = 0;
            }
            break;
        }   
        // 오른쪽으로 움직이는데 맨 끝에 도달하면 못움직이게 만들기
        case 'ArrowRight': {
            console.log('오른쪽');
            if(player.x > screen.right) {
                player.x = screen.right;
            }
            break;
        }
    }
});

const score = document.querySelector('#score');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const store = document.querySelector('#store');

document.querySelector('#pause').addEventListener('click', () => {
    
})
document.querySelector('#start').addEventListener('click',() => {

});
document.querySelector('#stor').addEventListener('click', () => {

});