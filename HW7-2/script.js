var aeg1 = {
	name: 'Автомат Cyma АКС-74',
	articul: 'CM040',
	price: '10000руб',
	country: 'Китай',
	photo:'img-1.jpeg'
}


aeg1.goodAdd = function(){

var div1 = document.getElementById('aka');

var photocont = document.createElement('div');
div1.className = 'col-7';
div1.appendChild(photocont);

var photo1 = document.createElement('img');
photocont.className = 'avtm';
photocont.appendChild(photo1);
photo1.src = aeg1.photo;

var name1 = document.createElement("div");
div1.appendChild(name1);
name1.className = "col-7 name1";
name1.innerHTML = aeg1.name;

var articul1 = document.createElement("div");
div1.appendChild(articul1);
articul1.className = "col-7 name1";
articul1.innerHTML = 'Наименование модели: ' + aeg1.articul;

var country1 = document.createElement("div");
div1.appendChild(country1);
country1.className = "col-7 name1";
country1.innerHTML = 'Страна-изготовитель: ' + aeg1.country;


var price1 = document.createElement("div");
div1.appendChild(price1);
price1.className = "col-7 name1";
price1.innerHTML = 'Цена: ' + aeg1.price;

}

aeg1.goodAdd();
