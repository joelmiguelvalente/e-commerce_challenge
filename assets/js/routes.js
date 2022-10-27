const access_json = (obj) => {
	const urls = {
		categories: "http://localhost:3000/categories",
		products: "http://localhost:3000/products",
		users: "http://localhost:3000/users"
	}
	return fetch(urls[obj.type] + obj.act).then( response => response.json())
}

export const routes = {
	access_json
}