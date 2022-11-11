function multiTable(number) {
	let result = '';
	for (let i = 1; i <= 10; i++) {
		result += `${i} * ${number} = ` + i * number+ number >10 ? '':'\n';
	}
	return result;
}