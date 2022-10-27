import { formulario } from './formulario.js'
import { storage } from './localstorage.js'

(() => {
	// Formulario para buscar, sin funcionalidad
	const buscar = document.querySelector(".header__search--button")
	buscar.onclick = e => {
		e.preventDefault()
		if(window.screen.width < 427) buscar.parentElement.classList.toggle("search--open")
	}
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
	// Trabajaremos solo con el formulario del login, no del footer
	const admin = 0;
	const users = data => fetch(`http://localhost:3000/users`).then(response => response.json())
	const botonEnviar = document.querySelector(".login__box .button")
	botonEnviar.onclick = async e => {
		e.preventDefault()
		const email = document.querySelector("input[type=email]").value
		const password = document.querySelector("input[type=password]").value
		const usuarios = await users()

		usuarios.forEach( (usuario, rango) => {
			if(usuario.email === email || usuario.password === password) {
				localStorage.setItem('admin', (admin === rango))
				localStorage.setItem('logueado', true)
				location.href = "./"
			}
		})
	}

	if(storage.login() === 'true') location.href = "./"

})()