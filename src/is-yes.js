export const isCorrect = (userInput) => {
    if (userInput === 'yes' || userInput === 'y' || userInput === 'Yes' || userInput === 'Y') {
        return true;
    } else {
        return false;
    }
};