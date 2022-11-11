function getPlanetName(id){
  var name;
  switch(id){
	case 1:
	  name = 'Mercury'
	  break;
	case 2:
	  name = 'Venus'
	  break;
	case 3:
	  name = 'Earth'
	  break;
	case 4:
	  name = 'Mars'
	  break;
	case 5:
	  name = 'Jupiter'
	  break;
	case 6:
	  name = 'Saturn'
	  break;
	case 7:
	  name = 'Uranus'
	  break;
	case 8:
	  name = 'Neptune'
	  break;
  }

  return name;
}
/find the stray number
function stray(numbers) {
	  let arr = numbers.sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}
/breaking chocolate problem
function breakChocolate(n, m) {
	  return n * m === 0 ? 0 : n * m - 1;
}
/[] --> [] , ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
function number(array) {
	  return array.map((n, i) => `${i + 1}: ${n}`);
}
/sort numbers
function solution(nums){
	  return nums === null ? [] : nums.sort((a, b) => a - b);
}
// basic variable assignment
var a = "code";
var b = "wa.rs";
var name = a + b;

//count odd numbers below n
function oddCount(n){
	  return Math.floor(n / 2);
}
//make a function that does arithmetic!
function arithmetic(a, b, operator){
	  return operator === 'add' ? a + b : operator === 'subtract' ? a - b : operator === 'multiply' ? a * b : a / b;
}
//money, money, money
function calculateYears(principal, interest, tax, desired) {
	  let years = 0;
	  while (principal < desired) {
		principal += principal * interest * (1 - tax);
		years++;
	  }
	  return years;
}

//Count The Digit - 7kyu
function nbDig(n, d) {
	  let arr = [];
	  for (let i = 0; i <= n; i++) {
		arr.push(Math.pow(i, 2));
	  }
	  return arr.join('').split('').filter(n => n == d).length;
}

//Short long short - 7kyu
function solution(a, b){
	  return a.length < b.length ? a + b + a : b + a + b;
}
//dont give me five - 7kyu
function dontGiveMeFive(start, end){
	  let arr = [];
	  for (let i = start; i <= end; i++) {
		arr.push(i);
	  }
	  return arr.filter(n => !n.toString().includes('5')).length;
}
//factorial - 7kyu throw error
function factorial(n){
	  if (n < 0 || n > 12) throw new RangeError();
	  return n === 0 ? 1 : n * factorial(n - 1);
}
//my head is at the wrong end - 7kyu
function fixTheMeerkat(arr) {
	  return arr.reverse();
}
//anagram detection - 7kyu
const isAnagram = function (test, original) {
	return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
};
//sum of sequence - 7kyu
const sequenceSum = (begin, end, step) => {
	let sum = 0;
	for (let i = begin; i <= end; i += step) {
		sum += i;
	}
	return sum;
}
//unfinished loop - bug fixing - 7kyu
function createArray(number){
	var newArray = [];

	for(var counter = 1; counter <= number; counter++){
	  newArray.push(counter);
	}

	return newArray;
}
//fiind numbers which are divisible by given number - 7kyu
function divisibleBy(numbers, divisor){
	  return numbers.filter(n => n % divisor === 0);
}
//remove anchor from URL - 7kyu
function removeUrlAnchor(url){
	  return url.split('#')[0];
}
//if else syntax debug Grasshopper - 7kyu
function checkAlive (health) {
	  return health > 0;
}
// Capitalization and Mutability - 7kyu
function capitalizeWord(word) {
	  return word[0].toUpperCase() + word.slice(1);
}
//sort array by string length - 7kyu
function sortByLength (array) {
	  return array.sort((a, b) => a.length - b.length);
}
//Stringy Strings - 7kyu
function stringy(size) {
	  let str = '';
	  for (let i = 0; i < size; i++) {
		str += i % 2 === 0 ? '1' : '0';
	  }
	  return str;
}
//Summing a number's digits - 7kyu
function sumDigits(number) {
	  let  a =  Math.abs(number).toString().split('').reduce((a, b) => +a + +b);
	  return parseInt(a)
}
//Find the capitals - 7kyu
const capitals = function (word) {
	  let arr = [];
	  for (let i = 0; i < word.length; i++) {
		if (word[i] === word[i].toUpperCase()) {
		  arr.push(i);
		}
	  }
	  return arr;
}
