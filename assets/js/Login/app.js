import { buscar } from '../Services/search.js';
import { estado } from '../Services/admin.js';
// Validar / Validaciones
import { login_validar } from './validar.js';
import { formulario } from '../Services/validaciones.js';

(() => {
	// 
	// Login formulario
	const login = document.forms.login
	const inputs = login.querySelectorAll(".form__input--input")
	inputs.forEach( input => {
		input.onfocus = input => input.target.parentElement.classList.add('form--active')
		input.onblur  = input => formulario.validar(input.target)
	})
	login.querySelector('.button').onclick = (e) => {
		e.preventDefault()
		const obj = login_validar.verificar(login)
		if(obj.email && obj.password) {
			localStorage.setItem('admin', obj.admin)
			localStorage.setItem('logueado', true)
			location.href = "./"
		}
	}
	if(estado.logueado()) location.href = "./"
	//
})()