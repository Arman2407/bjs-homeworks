'use strict';

function askDrink() {
  let dateOfBirthday = new Date(1992, 7, 24);
  dateOfBirthday.getFullYear();
  let today = new Date(2019, 1, 1);
  today.getFullYear();
  let name = 'Arman';
  const age = today.getFullYear() - dateOfBirthday.getFullYear();
  
  if (age > 18) {
    console.log('Не желаете ли олд-фэшн, ' + name + '?')
  }
  else if (age < 18) {
    console.log('Сожалею, ' + name + ', но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!')
  }
}

askDrink()