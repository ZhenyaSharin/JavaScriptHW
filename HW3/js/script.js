
// Сумма от m до n

function summa(m, n) {
	if (n === m) return m;
	if (n > m)
	return n + summa(m + 1, n);
	if (n < m)
	return m + summa(m, n + 1);
}

console.log('Сумма чисел от m до n=', summa(9, 8));

// Факториал

function fact(n) {
	if (n === 1) return 1;
	return n + fact(n - 1);
}

console.log('Факториал n=', fact(9));
