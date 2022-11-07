import { categorias, productos } from '../Services/database.js';
import { templates } from '../Services/templates.js'
import { buscar } from '../Services/search.js'
import { estado } from '../Services/admin.js';

(() => {

	//Creamos la instancia
	const urlParams = new URLSearchParams(location.search);

	//Accedemos a los valores
	const nombreCategoria = urlParams.get('seo');

	let dataCategoria = ''
	categorias.map( categoria => {
		if(nombreCategoria === categoria.seo) dataCategoria = categoria
	})

	document.querySelector(".section__banner--title").innerHTML = dataCategoria.nombre

	const divContent = document.querySelector(`.productos__grid`)
	productos.map( producto => {
		if(producto.category === nombreCategoria) templates.item(divContent, producto, false)
	})

	estado.verificar(false)

})()