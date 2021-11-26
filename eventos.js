const h2 = document.querySelector("h2");
const input = document.querySelector("#nombre");
const form = document.querySelector("form");
const main = document.querySelector("main.container");
const div = document.querySelector("#eventos");

document.addEventListener('DOMContentLoaded', () => {
	console.log("HTML Listo");
})

window.addEventListener('load', () => {
	console.log("Todos los doc listos");
});


const evento = 'submit';



form.addEventListener(evento, formSubmit);
function formSubmit(e) {
	e.preventDefault();

	if (input.value.length < 8) {
		input.classList.add('is-invalid');
		input.classList.remove('is-valid');
		div.innerHTML = "El nombre debe contener al menos 8 caracteres";
	} else {
		input.classList.remove('is-invalid');
		input.classList.add('is-valid');
		div.innerHTML = "Formulario enviado";
	}

}