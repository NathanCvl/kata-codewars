function highAndLow(numbers){
	  let arr = numbers.split(' ').sort((a, b) => a - b);
  return `${arr[arr.length - 1]} ${arr[0]}`;
}



function getMiddle(s) {
	  return s.length % 2 === 0 ? s[s.length / 2 - 1] + s[s.length / 2] : s[Math.floor(s.length / 2)];
}