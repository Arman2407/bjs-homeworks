'use strict';

function getAverageMark(marks) {
  if (marks.length > 5) {
    let marksSlice = marks.slice(0, 5);
    let sum = 0;
  // вычисление средней оценки:
  for (let i = 0; i < marksSlice.length; i++) {
    sum += marks[i];
  }
    return('Количество оценок больше 5\n' + sum / marksSlice.length);
  }
  else {
    let sum = 0;
  // вычисление средней оценки:
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
    return(sum / marks.length)
  }   
}

console.log(getAverageMark([1,2,3,4,5,6]))