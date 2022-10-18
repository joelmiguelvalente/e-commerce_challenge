const create = type => document.createElement(type)

const agregar_section = (nombre, seo) => {
	const section = create("section")
	section.classList.add('productos', seo)

	const bloque = `<div class="container">
		<div class="productos__header d--flex jc--between ai--center">
			<div class="productos__header--title">${nombre}</div>
			<a href="${seo}.html" class="productos__header--link d--flex jc--end ai--center">Ver todo <iconify-icon icon="fluent:arrow-right-20-filled"></iconify-icon></a>
		</div>
		<div class="productos__grid d--grid gap--3">
		</div>
	</div>`
	section.innerHTML = bloque
	return section
}

const agregar_tarjeta = (elemento, pagina) => {
	// Texto
	const numero = elemento.title.split('_')[1]
	const alt = elemento.tags.join(" ")
	// Creamos el contenedor de la columna
	const gridColumn = create("div")
	gridColumn.classList.add("productos__grid--column", elemento.id)
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

export const template = { agregar_tarjeta, agregar_section }