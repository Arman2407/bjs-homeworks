"use strict";

/* percent - процентная ставка
pay - первоначальный взнос
s - сумма кредита
n - срок (мес.)
date1 - нужная дата
p - сотая доля годовой процентной ставки в месяц
*/ 
function mortgage(percent, pay, s, date1) {

// кол-во месяцев на основе текущей даты и будущей
  let today=new Date();
  let oneDay=1000*60*60*24  // вычисление одного дня
  let rez=Math.floor((date1 - today)/oneDay);
  let n = Math.floor(rez / 30);

  let p = parseFloat(percent / 100 / 12);

  // вычисление ежемесяч. оплаты
  let a = s * (p + p / (Math.pow(1 + p, n ) - 1));

  // остаток долга
  let debt = s - pay;

  // полная сумма задолжности
  let total = a + debt;
  
  return total.toFixed(2);
  
}

// new Date (yyyy, m, d) = date1
console.log(mortgage(10,0,50000,new Date(2021,2,23)));