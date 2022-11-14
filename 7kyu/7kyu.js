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
function stray(numbers) {
	  let arr = numbers.sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}
function breakChocolate(n, m) {
	  return n * m === 0 ? 0 : n * m - 1;
}
function number(array) {
	  return array.map((n, i) => `${i + 1}: ${n}`);
}

function solution(nums){
	  return nums === null ? [] : nums.sort((a, b) => a - b);
}
var a = "code";
var b = "wa.rs";
var name = a + b;

function oddCount(n){
	  return Math.floor(n / 2);
}
function arithmetic(a, b, operator){
	  return operator === 'add' ? a + b : operator === 'subtract' ? a - b : operator === 'multiply' ? a * b : a / b;
}
function calculateYears(principal, interest, tax, desired) {
	  let years = 0;
	  while (principal < desired) {
		principal += principal * interest * (1 - tax);
		years++;
	  }
	  return years;
}

function nbDig(n, d) {
	  let arr = [];
	  for (let i = 0; i <= n; i++) {
		arr.push(Math.pow(i, 2));
	  }
	  return arr.join('').split('').filter(n => n == d).length;
}

function solution(a, b){
	  return a.length < b.length ? a + b + a : b + a + b;
}
function dontGiveMeFive(start, end){
	  let arr = [];
	  for (let i = start; i <= end; i++) {
		arr.push(i);
	  }
	  return arr.filter(n => !n.toString().includes('5')).length;
}
function factorial(n){
	  if (n < 0 || n > 12) throw new RangeError();
	  return n === 0 ? 1 : n * factorial(n - 1);
}
function fixTheMeerkat(arr) {
	  return arr.reverse();
}
const isAnagram = function (test, original) {
	return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('');
};
const sequenceSum = (begin, end, step) => {
	let sum = 0;
	for (let i = begin; i <= end; i += step) {
		sum += i;
	}
	return sum;
}
function createArray(number){
	var newArray = [];

	for(var counter = 1; counter <= number; counter++){
	  newArray.push(counter);
	}

	return newArray;
}
function divisibleBy(numbers, divisor){
	  return numbers.filter(n => n % divisor === 0);
}
function removeUrlAnchor(url){
	  return url.split('#')[0];
}
function checkAlive (health) {
	  return health > 0;
}
function capitalizeWord(word) {
	  return word[0].toUpperCase() + word.slice(1);
}
function sortByLength (array) {
	  return array.sort((a, b) => a.length - b.length);
}
function stringy(size) {
	  let str = '';
	  for (let i = 0; i < size; i++) {
		str += i % 2 === 0 ? '1' : '0';
	  }
	  return str;
}
function sumDigits(number) {
	  let  a =  Math.abs(number).toString().split('').reduce((a, b) => +a + +b);
	  return parseInt(a)
}
const capitals = function (word) {
	  let arr = [];
	  for (let i = 0; i < word.length; i++) {
		if (word[i] === word[i].toUpperCase()) {
		  arr.push(i);
		}
	  }
	  return arr;
}
function twoOldestAges(ages){
	return ages.sort((a, b) => a - b).slice(-2);
}
function solution(digits){
	  let arr = [];
	  for (let i = 0; i < digits.length; i++) {
		arr.push(digits.slice(i, i + 5));
	  }
	  return Math.max(...arr);
}
                            
const flip=(d, a)=>{
	  return d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a);
}
                              
function smallEnough(a, limit){
	  return a.every(n => n <= limit);
}
                                    
function maxMultiple(divisor, bound){
	  return bound - bound % divisor;

}
                                                  
function nthEven(n){
	  return n * 2 - 2;
}
                                  
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
	  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}
                                                    
function mxdiflg(a1, a2) {
	  if (a1.length === 0 || a2.length === 0) return -1;
	  let arr = [];
	  for (let i = 0; i < a1.length; i++) {
		for (let j = 0; j < a2.length; j++) {
		  arr.push(Math.abs(a1[i].length - a2[j].length));
		}
	  }
	  return Math.max(...arr);
}
                                    
function noOdds( values ){
	  return values.filter(n => n % 2 === 0);
}
                                                                                
function squareOrSquareRoot(array) {
	  return array.map(n => Math.sqrt(n) % 1 === 0 ? Math.sqrt(n) : Math.pow(n, 2));
}
                                                      
function inAscOrder(arr) {
	  return arr.join('') === arr.sort((a, b) => a - b).join('');
}
                                                                    
function mergeArrays(arr1, arr2) {
	  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}
                                          
function triangular( n ) {
	  return n < 0 ? 0 : n * (n + 1) / 2;
}

                                                
var replaceDots = function(str) {
	  return str.replace(/\./g, '-');
}
                                                                
function getChar(c){
	  return String.fromCharCode(c);
}
                                                  
function mouthSize(animal) {
	  return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}
var gimme = function (inputArray) {
	  return inputArray.indexOf(inputArray.slice().sort((a, b) => a - b)[1]);

}

                                
function pyramid(n) {
	  let arr = [];
	  for (let i = 1; i <= n; i++) {
		arr.push(Array(i).fill(1));
	  }
	  return arr;
}

                                                  
function spinWords(string){
	  return string.split(' ').map(n => n.length >= 5 ? n.split('').reverse().join('') : n).join(' ');
}
                                                            
function toCamelCase(str){
	  return str.replace(/[-_][a-z]/gi, n => n.slice(1).toUpperCase());
}
                                          
function longestConsec(strarr, k) {
	  if (k <= 0 || k > strarr.length) return '';
	  let arr = [];
	  for (let i = 0; i < strarr.length; i++) {
		arr.push(strarr.slice(i, i + k).join(''));
	  }
	  return arr.sort((a, b) => b.length - a.length)[0];
}
                                                  
function parse( data ){
	  let arr = [];
	  let sum = 0;
	  for (let i = 0; i < data.length; i++) {
		if (data[i] === 'i') sum++;
		if (data[i] === 'd') sum--;
		if (data[i] === 's') sum = Math.pow(sum, 2);
		if (data[i] === 'o') arr.push(sum);
	  }
	  return arr;
}
