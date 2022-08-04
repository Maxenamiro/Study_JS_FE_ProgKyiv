let arrPeople = []
let save = []

class Pers {
	constructor(name, birth_year, gender, homeWorld) {
		this.name = name
		this.birth_year = birth_year
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

		cardName.innerText = `Name: ${this.name}`
		cardBirth.innerText = `Birth: ${this.birth_year}`
		cardGender.innerText = `Gender: ${this.gender}`
		cardHomeWorld.innerText = `Homeworld: ${this.homeWorld}`
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
const url = 'https://swapi.dev/api/people'

const fetchCharacters = async () => {
	const res = await (await fetch(url)).json()
	return res.results
}

const fetchPlanetName = async (planetURL) => {
	const res = await (await fetch(planetURL)).json()
	return res.name
}

const replaceLinkWithName = async (characters) => {
	return await Promise.all(
		characters.map(async (char) => {
			const planetName = await fetchPlanetName(char.homeworld)
			char.homeworld = planetName
			return char
		})
	)
}

const createCards = async () => {
	const characters = await fetchCharacters()

	const newChars = await replaceLinkWithName(characters)

	newChars.forEach((newCharacter) => {
		let user = new Pers(
			newCharacter.name,
			newCharacter.birth_year,
			newCharacter.gender,
			newCharacter.homeworld
		)
		user.aCard()
	})
}

createCards()
