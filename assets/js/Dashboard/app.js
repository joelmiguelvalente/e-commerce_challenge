import { categorias, productos, usuarios } from '../Services/database.js';
import { templates } from '../Services/templates.js'
import { estado } from '../Services/admin.js'
import { buscar } from '../Services/search.js'

(() => {


	estado.verificar(false, () => {
		const divContent = document.querySelector(`.productos__grid`)
		productos.map( producto => templates.item(divContent, producto, true))
	}, "./error.html")


})()