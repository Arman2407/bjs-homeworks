"use strict";

// задача 1
function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
	let thisBirthday = Date.parse(birthday);

	let diff = now - thisBirthday;

	let milSek = 31622400000;
	let age = parseInt(diff/milSek);

	return (age > 18);
}

// задача 2
function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal = null) {
    let sound = animal.sound;

    return sound;
}

// задача 3
function initCalculateStatement() {
    for (var idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    const roundedAverage = Math.round(sum / marks.length)
    return roundedAverage
  }   
}