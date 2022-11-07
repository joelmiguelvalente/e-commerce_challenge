import { buscar } from '../Services/search.js'
import { estado } from '../Services/admin.js';

(() => {

	if(estado.logueado()) {
		const boton = document.querySelector(".button--login")
		if(estado.administrador()) {
			boton.setAttribute('href', 'dashboard.html')
			boton.innerHTML = 'Admin'
		} else boton.style.display = 'none'
	}
	
	//
})()