let task2 = document.querySelector('.task2');
let input = document.createElement('input');
input.setAttribute(`placeholder`, `000-000-00-00`);
let save = document.createElement('button');
const check = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
save.textContent = `save`;
task2.append(input);
input.after(save);
save.onclick = () => {
	let phone = input.value;
	let res = phone.match(check);
	if (Array.isArray(res)) {
		input.classList.add('_green');
		let sucsess = () => {
			document.location = 'https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg'
		}
		setTimeout(sucsess, 1000)
	} else {
		let error = document.createElement('div');
		error.textContent = `error`;
		task2.prepend(error);
		let del = () => {
			error.remove();
		}
		setTimeout(del, 2000)
	}
}
