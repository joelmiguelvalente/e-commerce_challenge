import { estructura } from './estructura.js'
import { formulario } from './formulario.js'
import { storage } from './localstorage.js'


(async () => {

	await estructura.secciones()
	await estructura.productos()

	const buscar = document.querySelector(".header__search--button")
	buscar.onclick = e => {
		e.preventDefault()
		if(window.screen.width < 427) {
			buscar.parentElement.classList.toggle("search--open")
		}
	}

	const form = document.forms.formulario
	const inputs = form.querySelectorAll(".form__input--input")
	inputs.forEach(input => {
		input.onfocus = input => input.target.parentElement.classList.add('form--active')
		input.onblur = input => formulario.validar(input.target)
	})
	form.querySelector(".button").onclick = () => inputs.forEach(input => input.target.value = '')

	if(storage.login() === 'true') {
		const boton = document.querySelector(".button--login")
		if(storage.admin() === 'true') {
			boton.setAttribute('href', 'dashboard.html')
			boton.innerHTML = 'Admin'
		} else boton.style.display = 'none'
	}

})()