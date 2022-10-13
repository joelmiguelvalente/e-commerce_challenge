const validar = input => {
   const tipoDeInput = input.dataset.tipo
   // Funciona con required
	if(input.validity.valid) {
      input.parentElement.classList.remove('footer__input--invalid')
      input.parentElement.querySelector(".form__input--error").innerHTML = ""
   } else {
      input.parentElement.classList.add('footer__input--invalid')
      input.parentElement.querySelector(".form__input--error").innerHTML = mostrarMensajedeError(tipoDeInput, input)
   }
}

const tipoDeErrores = [
   "valueMissing"
]

const mensajesDeError = {
   nombre: {
      valueMissing: 'El campo Nombre no puede estar vacio.'
   },
   mensaje: {
      valueMissing: 'El campo Mensaje no puede estar vacio.'
   }
}

const mostrarMensajedeError = (tipoDeInput, input) => {
   let mensaje = ""
   tipoDeErrores.forEach( error => {
      if(input.validity[error]) {
         console.log(mensajesDeError[tipoDeInput][error])
         mensaje = mensajesDeError[tipoDeInput][error]
      }
   })
   return mensaje
}


export const formulario = {
	validar
}