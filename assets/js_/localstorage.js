

const admin = () => {
	if(localStorage.getItem('admin') === null) localStorage.setItem('admin', false)
	return localStorage.getItem('admin')
}
const login = () => {
	if(localStorage.getItem('logueado') === null) localStorage.setItem('logueado', false)
	return localStorage.getItem('logueado')
}

export const storage = {
	admin,
	login
}