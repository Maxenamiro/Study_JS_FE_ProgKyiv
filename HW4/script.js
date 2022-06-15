function map(fn, array) {
	var newArr = []
	for (var i = 0; i < array.length; i++) {
		newArr[i] = fn(array[i])
	}
	return newArr
}

document.write(
	'First function: ' + map((el) => el * 2, [1, 2, 3, 4, 5]) + '<br>' + '<hr>'
)

//
let age = parseInt(prompt('Введіть свій вік'))
function checkAge(age) {
	let result = age > 18 ? true : confirm('Батьки дозволили?')
	return result
}
document.write('age ' + age)
