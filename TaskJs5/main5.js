'use strict';

function askDrink(dateOfBirthday, name) {
  let today = new Date();
  today.getFullYear();
  const age = today.getFullYear() - dateOfBirthday.getFullYear();
  
  if (age > 18) {
    return`Не желаете ли олд-фэшн, ${name} ?`;
  }
  else if (age < 18) {
    return`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
}

console.log(askDrink(new Date(1992, 7, 24), 'Арман'));