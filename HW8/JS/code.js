window.onload = () => {
	const button = document.querySelector('#button')
	button.onclick = () => {
		let input = document.createElement('input')
		button.after(input)
		let draw = document.createElement('button')
		draw.textContent = 'малюємо'
		input.after(draw)
		draw.onclick = () => {
			let diameter = input.value
			for (i = 0; i < 10; i++) {
				let stroka = document.createElement('div')
				stroka.style.display = `flex`
				draw.after(stroka)
				for (let j = 0; j < 10; j++) {
					let s = document.createElement('div')
					s.classList.add('circle')
					s.style.height = `${parseFloat(diameter)}px`
					s.style.width = `${parseFloat(diameter)}px`
					s.style.backgroundColor = `hsl(${Math.floor(
						Math.random() * 360
					)}, 50%,50%)`
					stroka.append(s)
				}
			}

			let [...circles] = document.querySelectorAll('.circle')
			circles.forEach((el) => {
				el.onclick = () => {
					el.remove()
				}
			})
		}
	}
}

// Нарисовать на странице круг используя параметры,
// которые введет пользователь.

// При загрузке страницы - показать на ней кнопку с
// текстом "Нарисовать круг". Данная кнопка должна являться
// единственным контентом в теле HTML документа, весь
// остальной контент должен быть создан и добавлен на
//страницу с помощью Javascript.

// При нажатии на кнопку "Нарисовать круг" показывать
//одно
//  поле ввода - диаметр круга. При нажатии на кнопку
//  "Нарисовать" создать на странице 100 кругов (10*10)
//  случайного цвета.

// При клике на конкретный круг - этот круг должен исчезать,
//  при этом пустое место заполняться, то есть все остальные
//  круги сдвигаются влево.
