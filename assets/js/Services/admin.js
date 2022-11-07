const administrador = () => {
	if(localStorage.getItem('admin') === null) localStorage.setItem('admin', false)
	return localStorage.getItem('admin') === 'true'
}

const logueado = () => {
	if(localStorage.getItem('logueado') === null) localStorage.setItem('logueado', false)
	return localStorage.getItem('logueado') === 'true'
}

const verificar = (redireccionar = false, fn = '', inicio = '') => {
	console.log(redireccionar, logueado(), administrador())
	/**
	 * Si el usuario esta logueado
	*/
	if ( logueado() ) {
		// Obtenemos el boton
		const botonLogin = document.querySelector(".button--login")
		/**
		 * Si el usuario es el administrador
		*/
		if ( administrador() ) {
			// Cambiamos el atributo y texto del boton
			botonLogin.setAttribute("href", "dashboard.html")
			botonLogin.innerHTML = "ADMIN"
			if( fn !== '') fn()
		// En caso contrario que no sea administrador
		} else botonLogin.style.display = "none"

		// Solo en caso de tener que redireccionar
		if( redireccionar ) location.href = "./"

	} else {
		if( inicio !== '')  location.href = inicio
	}
} 

	
export const estado = {
	administrador,
	logueado,
	verificar
}