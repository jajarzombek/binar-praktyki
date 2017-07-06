class List {
	constructor(list) {
		this.list = list;
		this.getSquare = this.getSquare.bind(this);
	}

	getSquare() {
		return this.list.map(number => number * number);
	}

	getHigherThan(number) {
		return this.list.filter(num => num > number);
	}

	getSum() {
		return this.list.reduce((a, b) => a + b);
	}

	partyTime(number) {
		return this.list
			.filter(num => num > number)
			.map(num => num * num)
			.reduce((a, b) => a + b);
	}
}

export default List;
