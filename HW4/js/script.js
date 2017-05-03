'use strict'

//сумма цифр

var chis = '124515';

var arr = chis.split('');

var sum = 0;

for (var i=0; i<arr.length; i++) {
	sum += parseInt(arr[i]);
}

console.log(sum);

// //вхождение

var s = 'obnbjnjnxsjncnancnxnjkCnC';

var sw = s.replace(/c/g,'cc');

var sw1 = sw.replace(/C/g, 'CC')

console.log(sw1);

// проверка на наличие в пароле

var passw = prompt('введите пароль');

var res1 = /.{9,}/.test(passw);
if (res1 === false) {
	console.log('пароль не соответствует требованиям');
} else {
	var res2 = /[A-Za-z]/.test(passw);
	if (res2 === false) {
		console.log('пароль не соответствует требованиям');
	} else {
		var res3 = /\d{2,}/.test(passw);
		if (res3 === false) {
			console.log('пароль не соответствует требованиям');
		} else { 
			var res4 = /\W/.test(passw);
			if (res4 === false) {
				console.log('пароль не соответствует требованиям');
			} else console.log('пароль принят...');
		}
	}
}