/**Ну и вишенка на торт: раз наш парень оказался «в нужное время в нужном месте», пора бы его женить):
Под surname добавь married: true. И разумеется проверь, что женат только один парень… (Т.е. необходимо создать глубокую копию объекта passportMarried , и добавить в него новый ключ: значение).*/

let passportMarried = {
	name: 'Petr',
	surname: 'Petrov',
	address: {
		country: 'USA',
		city: 'Bobryisk',
	},
}

let clonePassportMarried = structuredClone(passportMarried)
clonePassportMarried.married = true
console.log(passportMarried)
console.log(clonePassportMarried)
