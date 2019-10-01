import { isYes } from './src/is-yes.js';

const myButton = document.getElementById('quiz-button');


myButton.onclick = () => {
    const userName = prompt('Hi there! What is your name?');
    
    const myConfirmation = prompt(userName + ', Do you want to take my quiz');

    console.log(myConfirmation);

    const userSaysYes = isYes(myConfirmation);

    if (userSaysYes) {
        const userAnswer1 = prompt('Did JBJ study snakes in college?');
        const sanitizedUserAnswer1 = userAnswer1.toLowerCase().trim();

        console.log(sanitizedUserAnswer1);

        const userAnswer2 = prompt('Does JBJ play roller derby?');
        const sanitizedUserAnswer2= userAnswer2.toLowerCase().trim();

        console.log(sanitizedUserAnswer2);

        const userAnswer3 = prompt("Is JBJ's dog's name Rosey?");
        const sanitizedUserAnswer3 = userAnswer3.toLowerCase().trim();

        console.log(sanitizedUserAnswer3);
    } else {
        alert('Cool, guess you dont want to take my quiz');
    }



    // const questions = () => {
    //     const userAnswer1 = prompt('Did JBJ study snakes in college?');
    //     const sanitizedUserAnswer1 = userAnswer1.toLowerCase().trim();

    //     console.log(sanitizedUserAnswer1);

    //     const userAnswer2 = prompt('Does JBJ play roller derby?');
    //     const sanitizedUserAnswer2= userAnswer2.toLowerCase().trim();

    //     console.log(sanitizedUserAnswer2);

    //     const userAnswer3 = prompt("Is JBJ's dog's name Rosey?");
    //     const sanitizedUserAnswer3 = userAnswer3.toLowerCase().trim();

    //     console.log(sanitizedUserAnswer3);
    
    // };

    // if (isYes) {
    //     alert('Right-o!');
    // } else {
    //     alert("Nah");
    // }

};
