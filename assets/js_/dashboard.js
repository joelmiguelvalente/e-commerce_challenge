import { template } from './plantilla.js'
import { estructura } from './estructura.js'
import { formulario } from './formulario.js'
import { storage } from './localstorage.js'

(async () => {

	const form = document.forms.formulario
	const inputs = form.querySelectorAll(".form__input--input")
	inputs.forEach(input => {
		input.onfocus = input => input.target.parentElement.classList.add('form--active')
		input.onblur = input => formulario.validar(input.target)
	})

	// Esta logueado y/o es administrador
	if(storage.login() === 'true') {
		const boton = document.querySelector(".button--login")
		if(storage.admin() === 'true') {
			boton.setAttribute('href', 'dashboard.html')
			boton.innerHTML = 'Admin'
		} else boton.style.display = 'none'

		// Obtenemos todos los productos
		const todosProductos = async () => {
			const productos = await estructura.response('products')
			const grid = document.querySelector('.productos__grid')
			productos.forEach( producto => grid.appendChild(template.newCard(producto, true)))
			verificar()
		}
		todosProductos()

	} else location.href = './error.html'

	const verificar = () => {
		const columnas = [...document.querySelectorAll('.productos__grid--column')]
		columnas.forEach( columna => {
			const botones = [...columna.querySelectorAll('.productos__admin--button')]
			botones.forEach( boton => {
				boton.onclick = e => {
					const objetivo = e.target
					const ID = objetivo.id
					const tipo = objetivo.dataset.tipo
					console.log(ID, tipo)
				}
			})
		})
	}
	
})()