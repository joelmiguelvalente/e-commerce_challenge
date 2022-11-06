
const validar = input => {
   const tipo = input.dataset.tipo
   const parent = input.parentElement
   // Funciona con required
	parent.classList[(input.validity.valid ? 'remove' : 'add')]('form__input--invalid')
   parent.querySelector(".form__input--error").innerHTML = input.validity.valid ? "" : error(tipo, input)
}

const tipoDeErrores = [
   "valueMissing",
   "typeMismatch",
   "patternMismatch",
   "customError"
]

const msg = "Este campo no puede estar vacío"
const objectoMensajes = {
   url: {
      valueMissing: msg,
      patternMismatch: 'La URL no es correcta!'
   },
   email: {
      valueMissing: msg,
      typeMismatch: 'El correo no es valido.'
   },
   password: {
      valueMissing: msg,
      patternMismatch: 'No puede contener espacios y carácteres especiales.'
   },
   nombre: {
      valueMissing: msg
   },
   mensaje: {
      valueMissing: msg
   }
}

const error = (tipo, input) => {
   let mensaje = ""
   tipoDeErrores.forEach( error => {
      if(input.validity[error]) {
      	if(input.validity[error]) mensaje = objectoMensajes[tipo][error]
      }
   })
   return mensaje
}


		
export const formulario = {
	validar
}