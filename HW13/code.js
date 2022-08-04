/* Выполнить запрос на https://swapi.dev/api/people получить список героев звездных войн.

Вывести каждого героя отдельной карточкой с указанием.
Имени, половой принадлежности, рост, цвет кожи, 
год рождения и планету на которой родился.
            
Создайте кнопку сохранить на каждой карточке.
При нажатии кнопки записшите информацию в браузере
            
        Возможные свойства  :
name строка - Имя этого человека.
            
birth_year строка - Год рождения человека
в соответствии со вселенскими стандартами ДБЯ
или ПБЯ - до битвы при Явине или после битвы при Явине.
Битва при Явине - это битва, которая происходит в конце
эпизода IV «Звездных войн»: Новая надежда.
            
            eye_color строка - Цвет глаз этого человека. Будет "неизвестно", если неизвестно, или "н / д", если у человека нет глаза.
            
gender строка - Пол этого человека. Либо «Мужской»,
«Женский», либо «Неизвестный», «н / д», если у человека
нет пола.
            hair_color строка - Цвет волос этого человека. Будет "неизвестно", если неизвестно, или "н / п", если у человека нет волос.
            
            height строка - Рост человека в сантиметрах.
            
            mass строка - Масса человека в килограммах.
            
            skin_color строка - Цвет кожи этого человека.
            
homeworld строка - URL ресурса планеты, планеты,
на которой этот человек родился или населяет.
            
            films array - массив URL-адресов киноресурсов, в которых был этот человек.
            species array - массив URL-адресов ресурсов видов, к которым принадлежит этот человек.
            starships array - Массив URL-адресов ресурсов звездолета, которые пилотировал этот человек.
            vehicles array - массив URL-адресов ресурсов транспортного средства, которые пилотировал этот человек.
            url строка - URL-адрес гипермедиа этого ресурса.
            created строка - формат даты ISO 8601 времени создания этого ресурса.
            edited строка - формат даты ISO 8601 времени, когда этот ресурс редактировался.
            
Для создания карточек испозуйте классы

підключити ще якийсь стиль, фон, колір тексту*/

//name, birth, gender, homeWorld

//LESSON
// const url = 'https://swapi.dev/api/people'

// const data = fetch(url, { method: 'GET' })

// let data1 = data.then((res) => res.json(), (error)=> console.error(error))

// data1.then((argument) => {
// 	document.write(argument.results)
//         console.log(argument)
// })
let arrPeople = []
let save = []
const url = 'https://swapi.dev/api/people'

const data = fetch(url, { method: 'GET' })

class Pers {
	constructor(name, birth, gender, homeWorld) {
		this.name = name
		this.birth = birth
		this.gender = gender
		this.homeWorld = homeWorld
	}

	aCard() {
		const card = document.createElement('div')
		const cardName = document.createElement('div')
		const cardBirth = document.createElement('div')
		const cardGender = document.createElement('div')
		const cardHomeWorld = document.createElement('div')
		const btn = document.createElement('button')
		card.setAttribute('class', 'card')

		cardName.innerText = ' Name: ${this.name}'
		cardBirth.innerText = ' Birth: ${this.birth}'
		cardGender.innerText = ' Gender: ${this.gender}'
		cardHomeWorld.innerText = ' Homeworld: ${this.homeWorld}'
		btn.innerText = 'save'
		btn.setAttribute('id', this.name)

		document.querySelector('.wrapper').append(card)

		card.append(btn, cardName, cardBirth, cardGender, cardHomeWorld)

		const div = document.createElement('div')
		div.setAttribute('class', 'card')

		card.onclick = (e) => {
			if (e.target === btn) {
				arrPeople.forEach((el) => {
					if (el.name === e.target.id) {
						save.push(el)
						localStorage.setItem('saved', JSON.stringify(save))
						card.style.background = '#ddd'
					}
				})
			}
		}
	}
}
fetch(url)
	.then((rez) => rez.json())
	.then((rez) => {
		rez.results.forEach((element) => {
			let user = new Pers(
				element.name,
				element.birth,
				element.gender,
				element.homeWorld
			)
			user.createCard()
			arrPeople.push(user)
		})
	})
