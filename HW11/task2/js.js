const roster = document.createElement('ul')
document.body.append(roster)
for (let i = 0; i < 4; i++) {
	let rosterMatch = document.createElement('li')
	roster.appendChild(rosterMatch)
}
let li1 = document.getElementsByTagName('li')[1]
let li2 = document.getElementsByTagName('li')[2]
li1.addEventListener('click', () => {
	roster.firstElementChild.classList.add('blue')
	li2.classList.add('red')
})
//after launch click on second area!!!!!!!
