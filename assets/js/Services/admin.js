const administrador = () => {
	if(localStorage.getItem('admin') === null) localStorage.setItem('admin', false)
	return !!localStorage.getItem('admin')
}
const logueado = () => {
	if(localStorage.getItem('logueado') === null) localStorage.setItem('logueado', false)
	return !!localStorage.getItem('logueado')
}

const boton = () => {
	const boton = document.querySelector(".button--login")
	if(administrador()) {
		boton.setAttribute('href', 'dashboard.html')
		boton.innerHTML = 'Admin'
	} else boton.style.display = 'none'
}
// Esta logueado y/o es administrador
/*	if(storage.login() === 'true') {
		const boton = document.querySelector(".button--login")
		if(storage.admin() === 'true') {
			boton.setAttribute('href', 'dashboard.html')
			boton.innerHTML = 'Admin'
		} else boton.style.display = 'none'
	}
*/

export const estado = {
	administrador,
	logueado,
	boton
}