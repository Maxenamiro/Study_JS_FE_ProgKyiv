function Human(name, sex, age) {
	this.name = name
	this.sex = sex
	this.age = age
	this.sort = function (arr) {
		arr.sort()
	}
}

var Andre = new Human('Andre', 'male', '55')
var Bayraktar = new Human('Bayraktar', 'male', '33')
var Sonya = new Human('Sonya', 'female', '21')

var people = [Andre, Bayraktar, Sonya]

function asd(a, b) {
	return a.age > b.age ? 1 : a.age < b.age ? -1 : 0
}
people.sort(asd)
people.forEach((element) => console.log(element))