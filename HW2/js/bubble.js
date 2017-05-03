//сортировка методом пузыря
	var arr=[1, 3, 10, 8, 9, 4, 13, 6];
  //сортировка методом пузыря

var a; 
    for (var i = arr.length - 1; i > 0; i--) {  
        var count=0;
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                a = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = a;
                count++;
            }
        }  
        if(count==0){
          break;
        } 
    }
console.log('отсортированный ' + arr);