let firstNumber, secondNumber
let calc = '' //число 2
let counter = 0
let result
let memory = ''
let clearMemory = false
let finish = false

const buttonsCollection = document.getElementsByClassName('button')
const screen = document.getElementsByClassName('screen')
const buttons = Array.from(buttonsCollection)

buttons.map((button) => {
	button.addEventListener('click', () => {
		if (button.value == '=') {
			counter = 0
			result = eval(calc)
			return (screen[0].value = result)
		}

		if (button.value == 'C') {
			screen[0].value = '0'
			return (calc = ''), (result = '')
		}

        calc += button.value
		screen[0].value = calc

		if (button.value == '/' ||button.value == '*' ||button.value == '+' ||button.value == '-') {
            if (counter = 0) {
                counter++;
                calc += button.value
                screen[0].value = calc
            } else {
                calc -= button.value
                screen[0].value = calc
            }
        } else {
            counter = 0
        }
        
		}
    )
})

