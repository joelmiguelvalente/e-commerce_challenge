import { template } from './plantilla.js'

const response = data => fetch(`http://localhost:3000/${data}`).then(response => response.json())

const secciones = async () => {
	const banner = document.querySelector(".section__banner")
	const categorias = await response('categories')
	categorias.forEach( categoria => {
		banner.after(template.newSection(categoria.nombre, categoria.seo))
	})
}

const productos = async () => {
	const lista_productos = await response('products')
	const categorias = await response('categories')
	categorias.forEach( categoria => {
		lista_productos.forEach( producto => {
			if(producto.category === categoria.seo) {
				const divPro = document.querySelector(`.${categoria.seo} .productos__grid`)
				divPro.appendChild(template.newCard(producto, false))
			}
		})
	})
}

// Acciones con los productos
const eliminar = id => fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })

export const estructura = {
	response,
	secciones, 
	productos,
	eliminar
}