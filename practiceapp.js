import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');


myButton.onclick = () => {
    alert('welcome to my quiz');
    confirm('do you want to take my quiz');


    const userAnswer = prompt('is my favorite color blueish? (yes/no)');
    const sanitizedUserAnswer = userAnswer.toLowerCase().trim();


    const userIsCorrect = isCorrect(sanitizedUserAnswer);

    if (userIsCorrect) {
        alert('Right-o!');
    } else {
        alert('Nah');
    }

};
