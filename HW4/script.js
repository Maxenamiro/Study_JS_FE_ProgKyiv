function map(fn, array) {
	var arrLenght = array.length
	var newArr = []
	for (var i = 0; i < arrLenght; i++) {
		newArr[i] = fn(array[i])
	}
	return newArr
}
//
let age = parseInt(prompt('Введіть свій вік'))
function checkAge(age) {
	let result = age > 18 ? true : confirm('Батьки дозволили?')
	return result
}
console.log('age' + checkAge())
