function getRealFloor(n) {
	if (n === 0 || n === 1 ) return 0;
	if (n<0) return  0;
	if (n<13) return n-1
	else return  n-2
}