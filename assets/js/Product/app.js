import { categorias, productos, usuarios } from '../Services/database.js';
import { templates } from '../Services/templates.js'
import { estado } from '../Services/admin.js'
import { buscar } from '../Services/search.js'

(() => {

	//Creamos la instancia
	const urlParams = new URLSearchParams(location.search);

	//Accedemos a los valores
	const idProducto = urlParams.get('id');

	// Categoria
	let prodID = '';

	productos.map( producto => {
		if(producto.id === idProducto) {
			const detalles = document.querySelector(".produto__datos")
			document.title = producto.title + " — AluraGeek";
			//
			prodID = producto.id
			// Imagen
			detalles.querySelector("img").setAttribute("src", producto.image)
			detalles.querySelector("img").setAttribute("alt", producto.tags.join(" "))
			// Titulo
			detalles.querySelector(".producto__info--titulo").innerHTML = producto.title
			// Precio
			detalles.querySelector(".producto__info--precio").innerHTML = producto.price
			// Descripcion
			detalles.querySelector(".producto__info--descripcion").innerHTML = producto.description
		}
	})

	let total = 5;
	const similares = document.querySelector(`.similares__productos`)
	for (let lp = 0; lp <= total; lp++) {
		if(productos[lp].id !== prodID) {
			templates.item(similares, productos[lp], false)
		} else {
			let suma = lp + total + 1
			templates.item(similares, productos[suma], false)
		}
	}

	if(estado.logueado()) {
		const boton = document.querySelector(".button--login")
		if(estado.administrador()) {
			boton.setAttribute('href', 'dashboard.html')
			boton.innerHTML = 'Admin'
		} else boton.style.display = 'none'
	}

})()