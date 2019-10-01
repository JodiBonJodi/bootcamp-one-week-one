import { isYes } from './src/is-yes.js';

const myButton = document.getElementById('quiz-button');
let scoreCount = 0;

myButton.onclick = () => {
    const userName = prompt('Hi there! What is your name?');
    
    const myConfirmation = prompt(userName + ', Do you want to take my quiz');

    console.log(myConfirmation);

    const userSaysYes = isYes(myConfirmation);

    if (userSaysYes) {
        const userAnswer1 = prompt('Hey ' + userName + ', did JBJ study snakes in college?');
        const sanitizedUserAnswer1 = userAnswer1.toLowerCase().trim();

        console.log(sanitizedUserAnswer1);
        const userIsCorrect1 = isYes(sanitizedUserAnswer1);


        const userAnswer2 = prompt('So ' + userName +', does JBJ play roller derby?');
        const sanitizedUserAnswer2= userAnswer2.toLowerCase().trim();

        console.log(sanitizedUserAnswer2);
        const userIsCorrect2 = isYes(sanitizedUserAnswer2);


        const userAnswer3 = prompt('Ok ' + userName + ", is JBJ's dog's name Rosey?");
        const sanitizedUserAnswer3 = userAnswer3.toLowerCase().trim();

        console.log(sanitizedUserAnswer3);
        const userIsCorrect3 = isYes(sanitizedUserAnswer3);

        alert('You are now done with this quiz. Youre results will be available on the About Me page.');

        
        if (userIsCorrect1) {
            scoreCount;
        } else {
            scoreCount += 1;
        }

        if (userIsCorrect2) {
            scoreCount += 1;
        } else {
            scoreCount;
        }

        if (userIsCorrect3) {
            scoreCount +-;
        } else {
            scoreCount;
        }


        alert(userName + ', you did great! You got a ' + scoreCount + '/3 on this quiz!');

    } else {
        alert('Cool, I guess you dont want to take my quiz.');
    }



};
