import { categorias, productos, usuarios } from './Services/database.js';
import { templates } from './Services/templates.js'
import { buscar } from './Services/search.js'
import { estado } from './Services/admin.js';

(() => {

	if(estado.logueado()) {
		const boton = document.querySelector(".button--login")
		if(estado.administrador()) {
			boton.setAttribute('href', 'dashboard.html')
			boton.innerHTML = 'Admin'
		} else boton.style.display = 'none'
	}
	
	// Cargamos los productos
	templates.sections(document.querySelector(".section__banner"), categorias)
	templates.products(categorias, productos, false)
	//
})()