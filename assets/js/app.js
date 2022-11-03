import { categorias, productos, usuarios } from './Services/database.js';
import { templates } from './Services/templates.js'

(() => {
	//
	templates.sections(document.querySelector(".section__banner"), categorias)
	templates.products(categorias, productos, false)
	//
})()