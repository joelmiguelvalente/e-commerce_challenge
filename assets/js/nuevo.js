import { template } from './plantilla.js'
import { estructura } from './estructura.js'
import { formulario } from './formulario.js'
import { storage } from './localstorage.js'

(async () => {

	// Trabajamos con todos los formularios exceptuando el de buscar
	[...document.forms].map( (form, pos) => {
		if(pos > 0) {
			const inputs = form.querySelectorAll(".form__input--input")
			inputs.forEach(input => {
				input.onfocus = input => input.target.parentElement.classList.add('form--active')
				input.onblur = input => formulario.validar(input.target)
			})
			form.querySelector(".button").onclick = e => inputs.forEach(input => input.target.value = '')
		}
	})

	// Esta logueado y/o es administrador
	if(storage.login() === 'true') {
		const boton = document.querySelector(".button--login")
		if(storage.admin() === 'true') {
			boton.setAttribute('href', 'dashboard.html')
			boton.innerHTML = 'Admin'
		} else boton.style.display = 'none'
		//
		const botonEnviar = document.querySelector(".nuevo__box .button")
		botonEnviar.onclick = async e => {
			e.preventDefault()
			console.log(e)	
		}

	} else location.href = './error.html'

	const acciones = {
		type: "products", 
		act: "/SW006"
	}

})()