const buttons = document.querySelectorAll('.dramz-container > button');
const audioContainer = document.querySelector('.audio-container');

const audio = new Audio();
audio.style.display = 'none'; 
audioContainer.appendChild(audio);

let dic = {};
for (let i = 0; i < buttons.length; i++) {
    dic[buttons[i].textContent] = buttons[i];
}

function addActiveClass(event) {
    const keyName = event.key;
    let button = dic[keyName];
    if (button) {
        button.classList.add('active');
    }
    
}
function removeActiveClass(event) {
    const keyName = event.key;
    let button = dic[keyName];
    if (button) {
        button.classList.remove('active');
    }
}

function createAudio(e) {
    const audioName = e.key;
    audio.setAttribute('src', './assets/audio/' + audioName.toLowerCase() + '.mp3');
    audio.play()
}
window.addEventListener('keypress', addActiveClass);
window.addEventListener('keypress', createAudio);
window.addEventListener('keyup', removeActiveClass)