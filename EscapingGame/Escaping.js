const player = document.querySelector('#person');
const screen = document.querySelector('.mainBox');
const obstacle = document.querySelector('#obstacle');

function init() {
    //TODO: 처음의 구조
}

function randomDrawing() {
    //TODO: 똥이 시작되는 지점에서 랜덤하게 만들기
}

function tick() {
    //TODO: 똥이 setInteval로 시간당으로 한칸씩 내려오게끔 만들기
    randomDrawing();
    // 시간이 지날수록 더 빨리 만들어져야 하는데 그것도 한계가 있게끔 만들기
}

function crush() {
    //TODO: 똥이랑 player랑 만났는지 확인하기
    let canGoDown = true;
    let x;
    if(canGoDown) {
        // TODO: 아래방향으로 똥이 움직이기
        if( !(obstacle.x == player.x && obstacle.y == player.y) ){
            // 한칸 내리기
        }
    }
    else {
        init();
        randomDrawing();
        canGoDown = false;
    }
}

// player의 위치를 바닥에 고정을 하고 x의 값만 변하게 해주면 됨.
window.addEventListener('keydown', (e) => {
    switch(e.code) {
        // 왼쪽으로 움직이는데 맨 끝에 도달하면 못움직이게 만들기
        case 'ArrowLeft': {
            console.log('왼쪽');
            if(player.x < screen.left) {
                // screen.left가 의미하는바는 게임창의 가장 왼쪽
                player.x = 0;
            }
            break;
        }   
        // 오른쪽으로 움직이는데 맨 끝에 도달하면 못움직이게 만들기
        case 'ArrowRight': {
            console.log('오른쪽');
            if(player.x > screen.right) {
                // screen.right가 의미하는바는 게임창의 가장 오른쪽
                player.x = screen.right;
            }
            break;
        }
    }
});

let int = setInterval(tick, 1000);
tick();

const score = document.querySelector('#score');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');
const store = document.querySelector('#store');

document.querySelector('#pause').addEventListener('click', () => {
    clearInterval(int);
})
document.querySelector('#start').addEventListener('click',() => {
    tick();
});
document.querySelector('#store').addEventListener('click', () => {

});