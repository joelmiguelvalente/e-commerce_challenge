import { estructura } from './productos.js'
import { formulario } from './formulario.js'

(async () => {
	/*fetch('https://fakestoreapi.com/products')
   .then(res=>res.json())
   .then(json=>console.log(json))*/

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
	form.querySelector(".button").onclick = e => {
		inputs.forEach(input => {
			input.target.value = ''
		})
	}
})()