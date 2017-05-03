'use script'

var arr=[1, 3, 10, 8, 9, 4, 13, 6];
//среднее арифметическое

var summ = 0;
var sred;
for (var i=0; i<arr.length; i++) {
	summ +=arr[i];
}
sred = summ/arr.length;
console.log('среднее арифметическое =', sred);

//минимальный элемент массива

var elmin = arr[0];
for (var i=0; i<arr.length; i++) {
	if (elmin > arr[i]) {
		elmin = arr[i];
	}
}
console.log('минимальный элемент =', elmin);


//максимальный элемент 

var elmax = arr[0];
for (var i=0; i<arr.length; i++) {
if (elmax < arr[i]) {
	elmax = arr[i];
	}
}
console.log('максимальный элемент=', elmax);


//удалить последний элемент

var len = arr.length;
delete arr[len];
console.log('без последнего ' + arr);

//удалить первый элемент
var shifted = arr.shift();
console.log('без первого ' + arr);