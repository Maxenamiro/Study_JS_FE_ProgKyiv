//непріорітетне, зробити пізніше

//створіть на сторінці div і дайте йому зовнішній від-
//ступ 150px. Використовуючи JS виведіть у консоль
//відступ

let div = document.createElement('myDiv')
document.body.append(div)
div.setAttribute('id', 'marg')
div.textContent = 'my div'
div.style.border = '1px solid red'
console.log((div.style.margin = '150px'))
