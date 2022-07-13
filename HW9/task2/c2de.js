//1\секундомір матиме 3 кнопки "старт, стоп, скид"
//2\при натисканні на кнопку стоп фон секундоміра має
//бути червоним, старт-зеленим, скид-сірим
//виведення у форматі ГОД/ХВ/СЕК
//3\реалізуйте завдання на ES6 та стрілк.функц.
let counter = 0,
	intervalHandler

let hor = document.querySelector('.hours')
let min = document.querySelector('.minutes')
let sec = document.querySelector('.seconds')

let stopWatchScreen = document.querySelector('.stopwatch-display')

let start = document.querySelector('.start')
let pause = document.querySelector('.stop')
let reset = document.querySelector('.reset')

let zero = ''

let counter0 = 00
let counter1 = 00
let counter2 = 00

const secCount = () => {
	counter0 += 10
	sec.textContent = counter0
	if (counter0 === 1000) {
		counter1++
		counter0 = 00
		min.textContent = counter1
	} else if (counter1 === 60) {
		counter2++
		counter1 = 00
		hor.textContent = counter2
	}
}

start.onclick = () => {
	stopWatchScreen.classList.remove('green', 'red', 'silver')
	stopWatchScreen.classList.add('green')

	timer = setInterval(secCount, 10)
}

pause.onclick = () => {
	stopWatchScreen.classList.remove('green', 'red', 'silver')
	stopWatchScreen.classList.add('red')
	clearInterval(timer)
}
reset.onclick = () => {
	stopWatchScreen.classList.remove('green', 'red', 'silver')
	stopWatchScreen.classList.add('silver')
	clearInterval(timer)
	counter0 = 00
	counter1 = 00
	counter2 = 00
	sec.textContent = counter0
	min.textContent = counter1
	hor.textContent = counter2
}
