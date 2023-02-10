const goku = document.querySelector('.goku');
const pipe = document.querySelector('.pipe');
const scoreCounter = document.querySelector('#score');
const resetButton = document.getElementById('restartButton');


let score = 0;

const jump = () => {
    goku.classList.add('jump');

    setTimeout(() => {
        goku.classList.remove('jump');
    }, 500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const gokuPosition = +window.getComputedStyle(goku).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && gokuPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = pipePosition + 10 + 'px';

        goku.style.animation = 'none';
        goku.style.bottom = gokuPosition + 10 + 'px';

        goku.src = './images/game-over.jpg';
        goku.style.width = '40px';
        goku.style.marginLeft = '35px';
        document.getElementById('gameOverImage').style.display = "block";

        clearInterval(loop);
    } else if (pipePosition <= 120 && pipePosition > 0 && gokuPosition >= 80) {
        score++;
        scoreCounter.innerHTML = score;
    }
}, 10);

resetButton.addEventListener('click', function () {
  location.reload();
})

document.addEventListener('keydown', function (event) {
  if (event.code === 'KeyR') {
    resetButton.click();
  }
})

document.addEventListener('keydown', jump);
