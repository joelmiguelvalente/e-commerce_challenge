import { usuarios } from '../Services/database.js';
import { formulario } from '../Services/validaciones.js';

const admin = 1
let userPassword = ''
let estado = {
	email: false,
	password: false,
	admin: false
}

const usuario = input => {
   usuarios.map( usuario => {
   	if(usuario.email === input.value) {
   		userPassword = usuario.password;
   		estado.email = true
   		if(usuario.id === admin) estado.admin = true
   	}
   })
}

const password = input => {
   if(userPassword === input.value) estado.password = true
}

const verificar = comprobar => {
	usuario(comprobar.querySelector("#email"))
	password(comprobar.querySelector("#password"))
   return estado
}

export const login_validar = {
	verificar
}