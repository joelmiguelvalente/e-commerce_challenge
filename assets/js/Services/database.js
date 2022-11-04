import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const __lsExists = (newlist, name) => {
	// Comprobamos que no este en localStorage
	const listExist = (localStorage.getItem(name) === null)
	// Verificamos
	if(listExist) localStorage.setItem(name, newlist)
	// Mostramos la lista como un array
	return listExist ? JSON.parse(newlist) : JSON.parse(localStorage.getItem(name))
}

/**
 * =============================
 * 	CATEGORIAS
 * =============================
*/
export const categorias = __lsExists(JSON.stringify([
	{
		"nombre":"Star Wars", 
		"seo":"star_wars"
	}, {
		"nombre":"Consolas", 
		"seo":"consolas"
	}, {
		"nombre":"Diversos", 
		"seo":"diversos"
	}
]), 'categories')

/**
 * =============================
 * 	PRODUCTOS
 * =============================
*/
const totalP = 6;
const myArray = []
const etiquetas = [
	['star', 'wars', 'collection'],
	['games', 'users', 'consoles'],
	['game', 'short', 'doll', 'switch']
]
categorias.forEach( (categoria, ind) => {
	for(let int = 1; int <= totalP; int++) {
		let price = Math.floor(Math.random() * 999)
		const myObj = {
			// ID automatico
			"id": uuidv4().split('-')[0],
			// Ruta de imagen
			"thumbnail": `./assets/img/${categoria.seo}/producto_00${int}.png`,
			"image": `./assets/img/${categoria.seo}/producto_00${int}.jpg`,
			// Titulo
			"title": `${categoria.nombre} 00${int}`,
			// Descripción
			"description": "Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam",
			// Precio
			"price": `$${price}.00`,
			// Etiquetas
			"tags": etiquetas[ind],
			// Categoria
			"category": categoria.seo
		}
		myArray.push(myObj)
	}
})
export const productos = __lsExists(JSON.stringify(myArray), 'products')

/**
 * =============================
 * 	USUARIOS
 * =============================
*/
export const usuarios = __lsExists(JSON.stringify([
	{
		"email": "miguel92@alurageek.com",
		"id": 1,
		"name": "Miguel92",
		"password": "ejemplo"
	}, {
   	"email": "atuny0@sohu.com",
   	"id": 2,
   	"name": "atuny0",
   	"password": "9uQFF1Lh"
	}, {
	   "email": "hbingley1@plala.or.jp",
	   "id": 3,
	   "name": "hbingley1",
	   "password": "CQutx25i8r"
	}, {
	   "email": "rshawe2@51.la",
	   "id": 4,
	   "name": "rshawe2",
	   "password": "OWsTbMUgFc"
	}, {
	   "email": "yraigatt3@nature.com",
	   "id": 5,
	   "name": "yraigatt3",
	   "password": "sRQxjPfdS"
	}
]), 'users')