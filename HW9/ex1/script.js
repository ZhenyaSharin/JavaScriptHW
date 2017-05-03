(function() {

window.good = function(name, price) {
		this.name = name;
		this.price = price;
		}
	
	var baskt = {
		products: [],
		cnt: 0,
		sum: 0,
		goodAdd: function(name, price) {
			var newgd = new good(name, price);
			this.products.push(newgd);
		},
		cntCount: function() {
			this.cnt = this.products.length;
			return this.cnt;
		},
		sumWhole: function() {
			for (var i = 0; i < this.products.length; i++) {
				this.sum = this.products[i].price + this.sum;
			}
			return this.sum;
		}
	};
		
} ());