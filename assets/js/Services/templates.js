const sections = (element, obj) => {
	obj.reverse().forEach( categoria => {
		// Creamos "section"
		const section = document.createElement('section')
		// Añadimos clases
		section.classList.add('productos', categoria.seo)
		// Generamos un template literal
		const bloque = `<div class="container">
			<div class="productos__header d--flex jc--between ai--center">
				<div class="productos__header--title fw--700">${categoria.nombre}</div>
				<a href="categorias.html?seo=${categoria.seo}" class="productos__header--link fw--700 d--flex jc--end ai--center">Ver todo <iconify-icon icon="fluent:arrow-right-20-filled"></iconify-icon></a>
			</div>
			<div class="productos__grid d--grid gap--3">
			</div>
		</div>`
		section.innerHTML = bloque
		element.after(section)
	})
}


const id__admin = (bool, productoID) => {
	return bool ? `<div class="productos__card--admin p--absolute d--grid gap--2">
		<span id="${productoID}" data-tipo="editar" class="productos__admin--button"><iconify-icon icon="bx:message-square-edit"></iconify-icon></span>
		<span id="${productoID}" data-tipo="borrar" class="productos__admin--button"><iconify-icon icon="bx:trash"></iconify-icon></span>
	</div>` : ''
}
const id__link = (bool, productoID) => {
	// Si esta en "dashboard" verá el id, en caso contrario el link
	return bool ? `<span class="productos__info--id">#${productoID}</span>` : `<a class="productos__info--link fw--700" href="producto.html?id=${productoID}">Ver producto</a>`
}

const item = (divContent, producto, admin) => {
	// Texto
	const alt = producto.tags.join(" ")
	// Creamos el contenedor de la columna
	const gridColumn = document.createElement("div")
	gridColumn.classList.add("productos__grid--column", "p--relative", producto.id)
	// Si esta en "dashboard" verá estas opciones
	const adm = id__admin(admin, producto.id)
	const idlink = id__link(admin, producto.id)
	// Armamos el bloque
	let bloque = `<div class="productos__card rounded--2 shadow">
		<img class="productos__card--img" loading="lazy" src="${producto.thumbnail}" alt="${alt}" title="${producto.title}">
		<div class="productos__card--info">
			<h4 class="productos__info--title fw--500">${producto.title}</h4>
			<p class="productos__info--price fw--700">${producto.price}</p>
			${idlink}
		</div>
		${adm}
	</div>`
	gridColumn.innerHTML = bloque
	divContent.appendChild(gridColumn)
}

const products = (categorias, productos, admin) => {
	categorias.map( categoria => {
		const div = document.querySelector(`.productos.${categoria.seo} .productos__grid`)
		productos.map( producto => {
			if(producto.category === categoria.seo) item(div, producto, admin)
		})
	})
}

export const templates = {
	sections, products, item
}