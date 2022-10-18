import { template } from './plantilla.js'

const urlfile = `${location.origin}${location.pathname}db.json`
const response = objecto => {
	const newurl = urlfile
	return fetch(newurl).then(response => response.json())
}

const secciones = async () => {
	const banner = document.querySelector(".section__banner")
	const obj = await response()
	const categorias = obj.categories
<<<<<<< HEAD
	categorias.forEach( categoria => banner.after(template.agregar_section(categoria.nombre, categoria.seo)))
=======
	categorias.forEach( categoria => banner.before(template.agregar_section(categoria.nombre, categoria.seo)))
>>>>>>> 84b232e73232829cb97bf384ddcc7aa63b19dd28
}

const productos = async () => {
	const obj = await response()
	const lista_productos = obj.products
	const categorias = obj.categories
	categorias.forEach( categoria => {
		const lista = lista_productos[categoria.seo]
		lista.forEach( producto => {
			const divPro = document.querySelector(`.${categoria.seo} .productos__grid`)
			divPro.append(template.agregar_tarjeta(producto, categoria.seo))
<<<<<<< HEAD
=======
			//divPro.appendChild(template.agregar_section(categoria.nombre, categoria.seo))
>>>>>>> 84b232e73232829cb97bf384ddcc7aa63b19dd28
		})
	})
	
}

export const estructura = {
	secciones, productos
}