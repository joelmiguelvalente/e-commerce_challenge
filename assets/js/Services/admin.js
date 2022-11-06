const administrador = () => {
	if(localStorage.getItem('admin') === null) localStorage.setItem('admin', false)
	return localStorage.getItem('admin') === 'true'
}

const logueado = () => {
	if(localStorage.getItem('logueado') === null) localStorage.setItem('logueado', false)
	return localStorage.getItem('logueado') === 'true'
}

export const estado = {
	administrador,
	logueado
}