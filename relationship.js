const prompt = require('prompt-sync')();

//Promts user with question and saves as a variable
const relationship = prompt('What is your current Relationship Status? ');

//If the question is answered 'single'
if (relationship === 'single') {
    console.log('Hahaha you are single')
}

//If the question is answered 'taken'
if (relationship === 'taken') {
    console.log('Yay you got someone, good job :D')
}

//If the question is answered 'talking'
if (relationship === 'talking') {
    console.log('OooOOooo someone\'s got company')
}