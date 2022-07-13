//1\секундомір матиме 3 кнопки "старт, стоп, скид"
//2\при натисканні на кнопку стоп фон секундоміра має
//бути червоним, старт-зеленим, скид-сірим
//виведення у форматі ГОД/ХВ/СЕК
//3\реалізуйте завдання на ES6 та стрілк.функц.
let counter = 0,
	intervalHandler

const get = (id) => document.getElementById(id)

let stopWatchScreen = document.getElementsByClassName('.stopwatch-display')

let zero = ''

const count = () => {
	get('seconds').innerText = counter
	counter++
}

get('start').onclick = () => {
	intervalHandler = setInterval(count, 5)
	stopWatchScreen.classList.remove('#green', '#red', '#grey')
	stopWatchScreen.classList.add('#green')
}
get('stop').onclick = () => {
	clearInterval(intervalHandler)
	stopWatchScreen.classList.remove('#green', '#red', '#grey')
	stopWatchScreen.classList.add('#red')
}
get('reset').onclick = () => {
	clearTimeout(zero)
}
