function myComment() {
	var inputText = container.getElementsByTagName('input')[0].value;
	if (inputText.length != 0) {

		// var div1 = document.createElement('div1');

 	// 	var newPic = document.createElement('img');
 	// 	div1.appendChild(newPic);
 	// 	newPic.src = '2.jpg';


		// var newLi = document.createElement('li');
		// newLi.innerHTML = inputText;
		// var ul = document.getElementsByTagName('ul')[0];
		// ul.appendChild(newLi);
		var div1 = document.createElement('div');
		div1.className = 'comment';

		var newPic = document.createElement('img');
		div1.appendChild(newPic);
		newPic.src = '2.jpg';

		var newCom = document.createElement('p');
		newCom.innerHTML ='Guest: ' + inputText;
		div1.appendChild(newCom);

		var ToDiv = document.getElementById('messages');
		ToDiv.appendChild(div1);



	}
	var clearValue = document.getElementsByTagName('input')[0].value="";
}