window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words= document.querySelector('.words');
words.append(p); //check for append

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.textContent = transcript;

    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.append(p);
    }
});

recognition.addEventListener('end', recognition.start);

recognition.start();