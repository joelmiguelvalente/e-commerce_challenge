import { productos } from '../Services/database.js';

// Buscamos un formulario directo con el atributo "name"
const formulario = document.forms.search__product
// Buscamos el boton dentro del formulario
const formulario__boton = formulario.querySelector(".header__search--button")
// Buscamos el input dentro del formulario
const formulario__input = formulario.querySelector(".header__search--input")

// Creamos la lista
const lista = () => {
	// Creamos un div
	const list = document.createElement("div")
	// Le añadimos una clase
	list.classList.add('header__search--lista', 'p--absolute')
	// Lo retornamos
	return list
}
// Creamos el item para añadir a la lista
const items = (id, text) => {
	// Creamos un div
	const item = document.createElement("div")
	// Le añadimos una clase
	item.classList.add('header__lista--item')
	// Le añadimos el texto correspondiente
	item.innerHTML = `<a href="producto.html?id=${id}">${text}</a>`
	// Lo retornamos
	return item
}

// Valor inicial
let status = false
const resetear = form => {
	// Con esto cambiaremos el estado
	status = !status
	const delList = document.querySelector(".header__search--lista")
	status ? form.appendChild(lista()) : form.removeChild(delList);
	formulario__input.value = ''
}

formulario__boton.onclick = e => {
	e.preventDefault()
	// Reseteamos los valores por defecto
	resetear(formulario)
	// En caso que la pantalla sea menor a 426
	if(window.screen.width < 427) formulario.classList.toggle("search--open")
	// Cada vez que el usuario tipea
	formulario__input.onkeyup = even => {
		// Obtenemos la lista
		const mylist =document.querySelector(".header__search--lista")
		// Obtenemos la palabra escrita en el input
		const palabra = formulario__input.value
		// Limpiamos la lista
		mylist.innerHTML = ''
		// Recorremos todos los productos existentes
		productos.map( producto => {
			// Solo si incluye la palabra
			if(!producto.title.indexOf(palabra)) {
				// Añadimos las palabras similares a la lista
				mylist.appendChild(items(producto.id, producto.title))
			}
		})
		if(mylist.clientHeight > 250) mylist.style.overflowY = 'auto'
		mylist.style.height = (mylist.clientHeight > 250) ? '250px' : ''
	}
}

export const buscar = {}