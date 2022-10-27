const create = type => document.createElement(type)

const newSection = (nombre, seo) => {
	const section = create("section")
	section.classList.add('productos', seo)

	const bloque = `<div class="container">
		<div class="productos__header d--flex jc--between ai--center">
			<div class="productos__header--title fw--700">${nombre}</div>
			<a href="${seo}.html" class="productos__header--link fw--700 d--flex jc--end ai--center">Ver todo <iconify-icon icon="fluent:arrow-right-20-filled"></iconify-icon></a>
		</div>
		<div class="productos__grid d--grid gap--3">
		</div>
	</div>`
	section.innerHTML = bloque
	return section
}

const newCard = (elemento, admin = false) => {
	// Texto
	const numero = elemento.title.split('_')[1]
	const alt = elemento.tags.join(" ")
	
	// Creamos el contenedor de la columna
	const gridColumn = create("div")
	gridColumn.classList.add("productos__grid--column", "p--relative", elemento.id)
	
	// Si esta en "dashboard" verá estas opciones
	const adm = admin ? `<div class="productos__card--admin p--absolute d--grid gap--2">
		<span class="productos__admin--button">e</span>
		<span class="productos__admin--button">b</span>
	</div>` : ''
	
	// Si esta en "dashboard" verá el id, en caso contrario el link
	const idlink = admin ? `<span class="productos__info--id">#${elemento.id}</span>` : `<a class="productos__info--link fw--700" href="producto.html?id=${elemento.id}">Ver producto</a>`

	// Armamos el bloque
	let bloque = `<div class="productos__card rounded--2 shadow overflow--hidden">
		<img class="productos__card--img" src="${elemento.image}" alt="${alt}" title="${elemento.title}">
		<div class="productos__card--info">
			<h4 class="productos__info--title fw--500">${elemento.title}</h4>
			<p class="productos__info--price fw--700">${elemento.price}</p>
			${idlink}
		</div>
		${adm}
	</div>`
	gridColumn.innerHTML = bloque
	return gridColumn
}

export const template = { newSection, newCard }