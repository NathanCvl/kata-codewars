                                    
var isSquare = function(n){
	  return Math.sqrt(n) % 1 === 0;
}
                                    
function descendingOrder(n){
	  return Number(n.toString().split('').sort((a, b) => b - a).join(''));
}
                                
function filter_list(l) {
	  return l.filter(n => typeof n === 'number');
}
                    
function isIsogram(str){
	  return new Set(str.toLowerCase()).size === str.length;
}

                              
function XO(str) {
	  let x = 0;
	  let o = 0;
	  str.toLowerCase().split('').forEach(n => n === 'x' ? x++ : n === 'o' ? o++ : null);
	  return x === o;
}
                              
function findShort(s){
	  return Math.min(...s.split(' ').map(n => n.length));
}
                                            
String.prototype.toJadenCase = function () {
	  return this.split(' ').map(n => n[0].toUpperCase() + n.slice(1)).join(' ');
}
                    
function accum(s) {
	  return s.split('').map((n, i) => n.toUpperCase() + n.toLowerCase().repeat(i)).join('-');
}

                                      
function DNAStrand(dna){
	  return dna.split('').map(n => n === 'A' ? 'T' : n === 'T' ? 'A' : n === 'C' ? 'G' : 'C').join('');
}
                                                                  
function sumTwoSmallestNumbers(numbers) {
	  return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b);
}
                                
function GetSum( a,b )
{
	  return a === b ? a : a < b ? a + GetSum(a + 1, b) : a + GetSum(a - 1, b);
}
                                    
function maskify(cc) {
	  return cc.length < 4 ? cc : cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}
                              
function friend(friends){
	  return friends.filter(n => n.length === 4);
}
                                        
function isTriangle(a,b,c)
{
	  return a + b > c && a + c > b && b + c > a;
}
                                  
function addBinary(a,b) {
	  return (a + b).toString(2);
}
                        
function longest(s1, s2) {
	  return [...new Set(s1 + s2)].sort().join('');
}
                                                  
function validatePIN (pin) {
	  return /^(\d{4}|\d{6})$/.test(pin);
}
                                        
function rowSumOddNumbers(n) {
			  return Math.pow(n, 3);
}
                                                            
function findNextSquare(sq) {
	  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}
                                            
function openOrSenior(data){
	  return data.map(n => n[0] >= 55 && n[1] > 7 ? 'Senior' : 'Open');
}
                                
function printerError(s) {
	  return `${s.split('').filter(n => n > 'm').length}/${s.length}`;
}
                                
const binaryArrayToNumber = arr => {
	  return parseInt(arr.join(''), 2);
}
                                                          
const number = function (busStops) {
	return busStops.reduce((a, b) => a + b[0] - b[1], 0);
};
                              
function oddOrEven(array) {
	  return array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';
}
                                        
function solution(str, ending){
	  return str.endsWith(ending);
}
                                                          
function isDivisible(n, x, y) {
	  return n % x === 0 && n % y === 0;
}
                                
function reverseWords(str){
	  return str.split(' ').map(n => n.split('').reverse().join('')).join(' ');
}

                                        
function divisors(integer) {
	  let arr = [];
	  for (let i = 2; i < integer; i++) {
		  if (integer % i === 0) {
			  arr.push(i);
		  }
	  }
	  return arr.length ? arr : `${integer} is prime`;
}
                                                
function greet(name){
	return name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`;
}
                                                                          
function SeriesSum(n) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		sum += 1 / (1 + i * 3);
	}
	return sum.toFixed(2);
}
                                                      
function getAverage(marks) {
		return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
	}
function getDivisorsCnt(n) {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			count++;
		}
	}
	return count;
}
                                                    
function minMax(arr) {
		return [Math.min(...arr), Math.max(...arr)];
	}

                                                        
function removeSmallest(numbers) {
	return numbers.filter((n, i) => i !== numbers.indexOf(Math.min(...numbers)));
}
	function bonusTime(salary, bonus) {
		return bonus ? `£${salary * 10}` : `£${salary}`;
}


