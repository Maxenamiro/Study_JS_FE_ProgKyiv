document.write('прямокутник' + '<br>' + '<br>')

for (let i = 0; i < 9; i++) {
	document.write('$   ')
	for (let j = 0; j < 9; j++) {
		document.write('$   ')
	}
	document.write('<br>')
}

document.write('прямокутний трикутник' + '<br>')

for (let i = 0; i < 11; i++) {
	for (let j = 0; j < i; j++) {
		document.write('$   ')
	}
	document.write('<br>')
}

document.write('рівносторонній трикутник' + '<br>')

for (let i = 0; i < 9; i++) {
	for (let j = 9; j > i - 1; j--) {
		document.write('&nbsp', '&nbsp')
	}
	for (let f = 0; f < i + 1; f++) {
		document.write('$', '&nbsp','&nbsp')
	}
	document.write('<br>')
} 

document.write('ромб' + '<br>')

for (let i = 1; i < 5; i++) {
	for (let j = 0 + i; j < 5; j++) {
		document.write('&nbsp', '&nbsp')
	}
	for (let j = 1; j < i * 2; j++) {
		document.write('$')
	}
	document.write('<br>')
}
for (let i = 5; i >= 0; i--) {
	for (let j = 0 + i; j < 5; j++) {
		document.write('&nbsp','&nbsp',)
	}
	for (let j = 1; j < i * 2; j++) {
		document.write('$')
	}
	document.write('<br>')
}
//
document.write('///////////////////////////////////' + '<br>')
let a, b, result
a = parseFloat(prompt('1st number'))
b = parseFloat(prompt('2nd number'))
result = a + b < 4 ? 'malo/////////////' : 'bagato//////'
document.write('//////itogo   ' + result)
document.write('<br>' + '//////////////////////////////////' + '<br>')

let message
let login = prompt('vvedt login')
message =
	login == 'vasya'
		? 'pryvit'
		: login == 'director'
		? 'zdraste'
		: login == ''
		? 'no login'
		: ''
document.write('login : ' + login + '<br>' + message + '<br>')
document.write('<br>')


let dod = 0;
let A = parseFloat(prompt('promizhok chislo 1'));
let B = parseFloat(prompt('promizhok chislo 2'));
for (let i = A; i < B; i++) {
    dod += i
if(i % 2 !==0){
document.write("Непарні числа : " + i +"<br>");
}
}
document.write("Сума чисел проміжку : " + dod + "<br>")
document.write("<br>")
