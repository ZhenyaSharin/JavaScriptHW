'use strict'

//Человек, интересы
var objStudnt = {
	name: 'Ivan',
	surname: 'Petrov',
	age: 21,
	interests: ['programming', 'music', 'anime']
}

console.log(objStudnt.name + objStudnt.surname + '.' + objStudnt.age );
console.log('Интересы: ' + objStudnt.interests[0] + ',' + objStudnt.interests[1] + ',' + objStudnt.interests[2] + '.');



//Объединение массивов


var a = [1, 3, 5];
var b = [2, 3, 7];

var arr = a.concat(b);

console.log(arr);

var obj = {
	};
 for(var i=0; i<arr.length; i++) {
 	obj[arr[i]]=true;
 }
 arr=[];

 for(var key in obj) {
 	arr.push(parseInt(key));
 }


console.log(arr);


