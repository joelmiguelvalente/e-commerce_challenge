import { template } from './plantilla.js'
//const file = `${location.origin}${location.pathname}db.json`
const mockapi_id = "63471309db76843976a5c240"
const urlfile = `https://${mockapi_id}.mockapi.io/`
const response = objecto => {
	const newurl = urlfile + objecto.replace(/ /ig, '')
	return fetch(newurl).then(response => response.json())
}

const add = async name => {
	const items = await response(name.replace('_', ' '))
	items.forEach( item => {
		const temp = template.agregar_tarjeta(item, name)
		document.querySelector(`.${name} .productos__grid`).append(temp)
	})
}

const star_wars = () => add('star_wars')
const consolas = () => add('consolas')
const diversos = () => add('diversos')

export const productos = {
	star_wars, consolas, diversos
}