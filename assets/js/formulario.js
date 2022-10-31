const validar = input => {
   const tipoDeInput = input.dataset.tipo
   // Funciona con required
	if(input.validity.valid) {
      input.parentElement.classList.remove('form__input--invalid')
      input.parentElement.querySelector(".form__input--error").innerHTML = ""
   } else {
      input.parentElement.classList.add('form__input--invalid')
      input.parentElement.querySelector(".form__input--error").innerHTML = mostrarMensajedeError(tipoDeInput, input)
   }
}

const tipoDeErrores = [
   "valueMissing",
   "typeMismatch",
   "patternMismatch",
   "customError"
]

const mensajesDeError = {
   url: {
      valueMissing: 'El campo URL no puede estar vacio.',
      patternMismatch: 'La URL no es correcta!'
   },
   //
   email: {
      valueMissing: 'El campo Correo no puede estar vacio.',
      typeMismatch: 'El correo no es valido.'
   },
   password: {
      valueMissing: 'El campo Contraseña no puede estar vació.',
      patternMismatch: 'minimo 6 a máximo 12 caracteres, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener espacios y carcateres especiales.'
   },
   nombre: {
      valueMissing: 'El campo Nombre no puede estar vacio.'
   },
   mensaje: {
      valueMissing: 'El campo Mensaje no puede estar vacio.'
   },
   password: {
      valueMissing: 'El campo Mensaje no puede estar vacio.',
      patternMismatch: 'minimo 6 a máximo 12 caracteres, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener espacios y carcateres especiales.'
   }
}

const mostrarMensajedeError = (tipoDeInput, input) => {
   let mensaje = ""
   tipoDeErrores.forEach( error => {
      if(input.validity[error]) {
        if(input.validity[error]) mensaje = mensajesDeError[tipoDeInput][error]
      }
   })
   return mensaje
}


export const formulario = {
	validar
}