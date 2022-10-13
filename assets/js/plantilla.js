const createDIV = () => document.createElement("div")

const agregar_tarjeta = (elemento, pagina) => {
	// Texto
	const numero = elemento.title.split('_')[1]
	const alt = elemento.tags.join(" ")
	// Creamos el contenedor de la columna
	const gridColumn = createDIV()
	gridColumn.classList.add("productos__grid--column")
	//
	let bloque = `<div class="productos__card rounded--2 shadow overflow--hidden">
		<img class="productos__card--img" src="${elemento.image}" alt="${alt}" title="${elemento.title}">
		<div class="productos__card--info">
			<h4 class="productos__info--title">${elemento.title}</h4>
			<p class="productos__info--price">${elemento.price}</p>
			<a class="productos__info--link" href="ver-${pagina}-${numero}.html">Ver producto</a>
		</div>
	</div>`
	gridColumn.innerHTML = bloque
	return gridColumn
}

export const template = { agregar_tarjeta }