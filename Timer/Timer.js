const container = document.getElementById('buttons');

function change() {
    container.innerHTML = `
        <button onclick="changeCancel()" class="shape" id="cancel">Cancel</button>
        <button onclick="changePause()" class="shape" id="pause">Pause</button>
    `;
    startCountDown(1500);
}

function changePause() {
    const pause = document.getElementById('pause');
    if (pause.textContent === 'Pause') {

        pause.textContent = 'Resume';
    }
    else if (pause.textContent === 'Resume') {

        pause.textContent = 'Pause';
    }
} 



const cancel = document.getElementById('cancel');
function changeCancel() {
    container.innerHTML = `<button onclick="change()" class="shape" id="start-resume">Start</button>`;
}

function startCountDown(duration) {
    const countDownElement = document.getElementById('counter');
    let remainingTime = duration;

    const interval = setInterval(
        () => {
            // calculate minuts and seconds 
            const min = Math.floor((remainingTime % 3600) / 60);
            const sec = remainingTime % 60;

            // format time as MM:SS
            countDownElement.textContent = `${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`;

            // stop count down in zero
            if(remainingTime <= 0){
                countDownElement.textContent = 'Time\'s Up!';
            }

            remainingTime--;
        } , 1000 // update every sec
    )
}


