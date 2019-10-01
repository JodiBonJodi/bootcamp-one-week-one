import { isCorrect } from './functions.js';

const myButton = document.getElementById('action-button');


myButton.onclick = () => {
    alert('welcome to my quiz');
    const myConfirmation = confirm('do you want to take my quiz');

    console.log(myConfirmation);

    const userAnswer = prompt('is my favorite color blueish? (yes/no)');
    const sanitizedUserAnswer = userAnswer.toLowerCase().trim();

    console.log(userAnswer);

    const userIsCorrect = isCorrect(sanitizedUserAnswer);

    if (userIsCorrect) {
        alert('Right-o!');
    } else {
        alert("Nah");
    }

};
