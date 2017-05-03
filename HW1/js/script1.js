'use sqript'
var numb = parseInt(prompt('введите число'));
if ((numb > 999) || (numb < (-999))) {
	console.log('Вы ввели неверное значение')
} else if (numb === 0) {
	console.log('Не целое число, нулевое значение')
} else if ((numb < 0) && (numb > (-10))) {
	console.log('однозначное отрицательное число')
} else if ((numb <= (-10)) && (numb > (-100))) {
	console.log('двузначное отрицательное число')
} else if ((numb <= (-100)) && (numb >= (-999))) {
	console.log('трёхзначное отрицательное число')
} else if ((numb >= 0) && (numb < 10)) {
	console.log('однозначное положительное число')
} else if ((numb >= 10) && (numb < 100)) {
	console.log('двузначное положительное число')
} else if ((numb >= 100) && (numb <= 999)) {
	console.log('трёхзначное положительное число')
}