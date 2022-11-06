import { categorias, productos, usuarios } from '../Services/database.js';
import { templates } from '../Services/templates.js'
import { estado } from '../Services/admin.js'
import { buscar } from '../Services/search.js'

(() => {


	if(estado.logueado()) {
		const boton = document.querySelector(".button--login")
		if(estado.administrador()) {
			boton.setAttribute('href', 'dashboard.html')
			boton.innerHTML = 'Admin'

			const divContent = document.querySelector(`.productos__grid`)
			productos.map( producto => templates.item(divContent, producto, true))

		} else boton.style.display = 'none'
	} else location.href = "./error.html"

})()