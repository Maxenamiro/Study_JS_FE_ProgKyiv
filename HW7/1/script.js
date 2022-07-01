const words = ['программа', 'макака', 'прекрасный', 'оладушек']

// Выбираем случайное слово
const word = words[Math.floor(Math.random() * words.length)]

// Создаем итоговый массив
const answerArray = []
for (var i = 0; i < word.length; i++) {
	answerArray[i] = '_'
}
let remainingLetters = word.length//////////////////////

// Игровой цикл
while (remainingLetters > 0) {
	// Показываем состояние игры
	alert(answerArray.join(' '))
	// Запрашиваем вариант ответа
	const guess = prompt('Угадайте букву, или нажмите Отмена для выхода из игры.')
	if (guess === null) {
		// Выходим из игрового цикла
		break
	} else if (guess.length !== 1) {
		alert('Пожалуйста, введите одиночную букву.')
	} else {
		// Обновляем состояние игры
		for (var j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				answerArray[j] = guess
				remainingLetters--
			}
		}
	}
	// Конец игрового цикла
}
// Отображаем ответ и поздравляем игрока
alert(answerArray.join(' '))
alert('Отлично! Было загадано слово ' + word)


//после ввода правильной букви вілетает