"use strict";

function getName(name) {
  if (name != '') {
    return`Привет, мир! Меня зовут ${name}`
  }
  else {
    return'Привет, мир! Меня зовут Аноним'
  }
}

console.log(getName('Арман'));