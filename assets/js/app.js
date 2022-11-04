import { categorias, productos, usuarios } from './Services/database.js';
import { templates } from './Services/templates.js'
import { buscar } from './Services/search.js'

(() => {
	// Cargamos los productos
	templates.sections(document.querySelector(".section__banner"), categorias)
	templates.products(categorias, productos, false)
	// Buscar

	//
})()