import { formulario } from './formulario.js'

(() => {

	const getParams = type => {
		const urlParams = new URLSearchParams(location.search);
		return urlParams.get(type)
	}

	// Obtenemos parametro
	let id = location.search.split('=')[1]

	const response = objecto => { 
		const pathname = location.pathname.replace('producto.html', '')
		return fetch(`${location.origin}${pathname}db.json`).then(response => response.json())
	}

	const obtener_dato = async () => {
		let dato = await response()
		dato = dato.products
		dato[getParams('cat')].forEach( data => {
			if(data.id === getParams('id')) {
				document.title = data.title + " - AluraGeek";
				// Imagen 
				const img = document.querySelector(".producto__datos--imagen img")
				img.setAttribute('src', data.image)
				img.setAttribute('alt', data.title)
				// Titulo
				document.querySelector(".producto__info--titulo").innerHTML = data.title
				// Precio
				document.querySelector(".producto__info--precio").innerHTML = data.price
				// Descripcion
				document.querySelector(".producto__info--descripcion").innerHTML = data.description
			}
		})
	}

	obtener_dato()

	
})()