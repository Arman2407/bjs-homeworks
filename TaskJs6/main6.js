'use strict';

function getAverageMark() {
  let marks = [1,2,3,4,5];
  let sum = 0;
  //Начинаем вычилсение средней оценки:
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }
  //Нашли среднюю оценку:
  let averageSum = sum / marks.length

  if (marks.length <= 5)
    console.log(averageSum);
  else if (marks.length > 5) {
    console.log('Количество оценок больше 5');
  }   
}

getAverageMark()