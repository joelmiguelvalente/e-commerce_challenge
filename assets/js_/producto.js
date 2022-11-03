import { formulario } from './formulario.js'
import { template } from './plantilla.js'
import { storage } from './localstorage.js'

(() => {

	const getParams = type => {
		const urlParams = new URLSearchParams(location.search);
		return urlParams.get(type)
	}

	// Obtenemos parametro
	let id = location.search.split('=')[1]

	const response = data => fetch(`http://localhost:3000/${data}`).then(response => response.json())

	const obtener_producto = id => { 
		//const pathname = `${location.origin}`+location.pathname.replace('producto.html', '')+`db.json` 
		const pathname = `http://localhost:3000/products/${id}`
		return fetch(pathname).then(response => response.json())
	}

	const obtener_dato = async () => {
		let dato = await obtener_producto(getParams('id'))
		document.title = dato.title + " — AluraGeek";
		// Imagen 
		const img = document.querySelector(".producto__datos--imagen img")
		img.setAttribute('src', dato.image)
		img.setAttribute('alt', dato.title)
		// Titulo
		document.querySelector(".producto__info--titulo").innerHTML = dato.title
		// Precio
		document.querySelector(".producto__info--precio").innerHTML = dato.price
		// Descripcion
		document.querySelector(".producto__info--descripcion").innerHTML = dato.description
	}
	const productos = async () => {
		let total = 5;
		const lista_productos = await response('products')
		const divPro = document.querySelector(`.productos__grid`)
		for (let lp = 0; lp <= total; lp++) {
			if(lista_productos[lp].id !== getParams('id')) {
				divPro.appendChild(template.newCard(lista_productos[lp], getParams('cat')))
			} else {
				let suma = lp + total + 1
				divPro.appendChild(template.newCard(lista_productos[suma], getParams('cat')))
			}
		}		
	}

	obtener_dato()
	productos()
	// Esta logueado y/o es administrador
	if(storage.login() === 'true') {
		const boton = document.querySelector(".button--login")
		if(storage.admin() === 'true') {
			boton.setAttribute('href', 'dashboard.html')
			boton.innerHTML = 'Admin'
		} else boton.style.display = 'none'
	}

	
})()