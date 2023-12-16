/**Удали все нечетные цифры в двухмерном массиве.
Полученный результат выведи в консоль */

const numbers = [
	[1, 2, 3, 4, 5],
	[11, 20, 33, 40, 55],
	[111, 200, 333, 400, 555],
]

for (let i = 0; i < numbers.length; i++) {
	for (let k = 0; k < numbers[i].length; k++) {
		if (numbers[i][k] % 2 !== 0) {
			numbers[i].splice(k, 1)
		}
	}
}
console.log(numbers)
