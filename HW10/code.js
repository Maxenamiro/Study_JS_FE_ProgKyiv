const btn = document.querySelector('.keys'),
	display = document.querySelector('.display > input')

//     btn.addEventListener("click", function (e) {
//         calc.value1 += e.target.value
//         show(calc.value1, display)
//     })
// })

// const calc = {
//     value1 : "",
//     value2 : "",
// }

// function show (value, el) {
//  el.value = value
// }
let a = '' //число 1
let b = '' //число 2
let sign = '' // + - / *
let memory = ''
let clearMemory = false
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const action = ['-', '+', '/', '*']

// екран
const out = document.querySelector('type[text]') //работает?

clearAll = () => {
	a = ''
	b = ''
	sign = ''
	finish = false
	out.textContent = 0
}

document.querySelector('input[value = "C"]').onclick = clearAll

document.querySelector('keys').onclick = (event) => {
	//натиснута не кнопка
	if (!event.target.classList.contains('button')) return
	// натиснута кнопка clearAll С
	if (event.target.classList.contains('input[value = "C"]')) return

	out.textContent = ''
	//отримую натиснуту кнопку
	const key = event.target.textContent

	//якщо натиснута клавіша 0-9 або .
	if (digit.includes(key)) {
		a += key
		console.log(a, b, sign)
	}
}
