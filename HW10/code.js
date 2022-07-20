const calc = {
	firstNumber: '',
	secondNumber: '',
	result: '',
	operand: '',
	addMemory: '',
	finish: false,
}
function show(value, el) {
	el.value = value
}
const getId = (id) => document.getElementById(id)

window.addEventListener('DOMContentLoaded', () => {
	const btn = document.querySelector('.keys'),
		display = document.querySelector('.display > input')
	function clear() {
		calc.firstNumber = ''
		calc.secondNumber = ''
		calc.operand = ''
		display.textContent = 00
		show(display.textContent, display)
	}
	getId('buttonC').onclick = clear
	btn.addEventListener('click', function (e) {
		let el = e.target
		if (!el.classList.contains('button')) return
		if (el.classList.contains('clear')) return
		let a
		if (
			el.value === '-' ||
			el.value === '+' ||
			el.value === '/' ||
			el.value === '*' ||
			el.value === 'm+' ||
			el.value === 'm-' ||
			el.value === 'mrc'
		) {
			calc.operand = el.value
		}
		if (calc.secondNumber === '' && calc.operand === '') {
			calc.firstNumber += el.value
			show(calc.firstNumber, display)
		} else if (calc.operand !== '') {
			calc.secondNumber += el.value
			show(calc.secondNumber.replace(/[^0-9, .]/g, ''), display)
		}
		if (
			el.value === '-' ||
			el.value === '+' ||
			el.value === '/' ||
			el.value === '*' ||
			el.value === 'm+' ||
			el.value === 'm-' ||
			el.value === 'mrc'
		) {
			show(calc.firstNumber, display)
		}
		if (el.value === 'm+') {
			calc.addMemory = display.value
		} else if (el.value === 'm-') {
			show(calc.addMemory, display)
			calc.firstNumber = calc.addMemory
			calc.secondNumber = ''
			calc.operand = ''
			calc.result = ''
		} else if (el.value === 'mrc') {
			calc.addMemory = ''
		}
		if (el.value === '=') {
			switch (calc.operand) {
				case '+':
					calc.result =
						parseFloat(+calc.firstNumber) +
						parseFloat(+calc.secondNumber.replace(/[^0-9, .]/g, ''))
					break
				case '-':
					calc.result =
						parseFloat(calc.firstNumber) -
						parseFloat(calc.secondNumber.replace(/[^0-9, .]/g, ''))
					break
				case '/':
					calc.result =
						parseFloat(calc.firstNumber) /
						parseFloat(calc.secondNumber.replace(/[^0-9, .]/g, ''))
					break
				case '*':
					calc.result =
						parseFloat(calc.firstNumber) *
						parseFloat(calc.secondNumber.replace(/[^0-9, .]/g, ''))
					break
			}
			show(calc.result, display)
			calc.firstNumber = calc.result
			calc.secondNumber = ''
			calc.operand = ''
		}
	})
})
