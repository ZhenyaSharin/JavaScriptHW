 (function() {
'use strict'

	console.log('func')

	var m;
	var n;
	if (m === n) return m;
	else if (n > m)	{
		for (var i = 1; i <= (n-m); i++) {
			m = m + i;
		}	
	}
	else if (m > n) {
		for (var i = 1; i <= (m-n); i++) {
			n = n + i;
		}
	}
}

console.log(summaMn(5, 8));


}())