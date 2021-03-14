// 8kyu

// Incorrect division method
const solve = () => {
  return x / y;
};

// Difference of Volumes of Cuboids
function volume(c) {
  return c.reduce((x, y) => x * y);
}

function findDifference(a, b) {
  return Math.abs(volume(a) - volume(b));
}

// Find the first non-consecutive number
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i + 1];
    }
  }
  return null;
}

// FIXME: Replace all dots
var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};

// Quarter of the year
const quarterOf = month => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};

// Grasshopper - Grade book
function getGrade(s1, s2, s3) {
  if ((s1 + s2 + s3) / 3 >= 90) {
    return "A";
  } else if ((s1 + s2 + s3) / 3 >= 80) {
    return "B";
  } else if ((s1 + s2 + s3) / 3 >= 70) {
    return "C";
  } else if ((s1 + s2 + s3) / 3 >= 60) {
    return "D";
  } else if ((s1 + s2 + s3) / 3 <= 60) {
    return "F";
  }
}

// get character from ASCII Value
function getChar(c) {
  return String.fromCharCode(c);
}

// Invert Array Values
function invert(array) {
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(-array[i]);
  }
  return newArray;
}

// Bartender, drinks
function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

// Return Negative
function makeNegative(num) {
  return -Math.abs(num);
}

// Gravity Flip
const flip = (d, a) => {
  if (d === "R") return a.sort((a, b) => a - b);
  if (d === "L") return a.sort((a, b) => b - a);
};

// Sum If Positive
function positiveSum(arr) {
  var total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i];
    }
  }
  return total;
}

// Calculate BMI
function bmi(weight, height) {
  var totalBmi = weight / Math.pow(height, 2);

  if (totalBmi <= 18.5) {
    return "Underweight";
  } else if (totalBmi <= 25) {
    return "Normal";
  } else if (totalBmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

// Beginner Series #1 School Paperwork
function paperwork(n, m) {
  if (n < 0 || m < 0) {
    return 0;
  } else {
    return n * m;
  }
}

// Smallest unused ID
function nextId(ids) {
  const newIds = ids
    .filter((item, position, self) => self.indexOf(item) === position)
    .sort((x, y) => x - y);

  if (newIds[0] !== 0) {
    return 0;
  }

  for (let i = 0, j = 1; i <= newIds.length; i += 1, j += 1) {
    if (newIds[i] - newIds[j] !== -1) {
      return (newIds[i] += 1);
    }
  }
}

// Super Duper Easy
function problem(x) {
  var num = x * 50 + 6;

  if (typeof x === "string") {
    return "Error";
  } else {
    return num;
  }
}

// Are Arrow Function odd?
function odds(values) {
  return values.filter(value => value % 2);
}

// Parse nice int from char problem
function getAge(inputString) {
  return parseInt(inputString.charAt(0));
}

// CSV representation of array
function toCsvText(arrays) {
  // Answer 1
  let result = "";

  arrays.map((array, indexArray) => {
    array.map((arr, indexArr) => {
      result += arr;
      if (indexArr < array.length - 1) {
        result += ",";
      } else if (indexArray < arrays.length - 1) {
        result += "\n";
      }
    });
  });
  return result;

  // Answer 2
  return array.join("\n");

  // Answer 3
  array.map(row => row.join(",")).join("\n");
}

// N-th Power
function index(array, n) {
  if (array.length <= n || 0 > n) {
    return -1;
  } else {
    return Math.pow(array[n], n);
  }
}

// Aspect Ratio Cropping - Part 1
function aspectRatio(x, y) {
  return [Math.ceil(y * (16 / 9)), y];
}

// My head is at the wrong end!
function fixTheMeerkat(arr) {
  return arr.reverse();
}

// Do I get Bonus?
function bonusTime(salary, bonus) {
  // Answer 1
  var totalBonus = (salary * 10).toString();
  var logo = "£";
  var resultWithBonus = logo.concat(totalBonus);
  var resultSalary = logo.concat(salary).toString();

  if (bonus == true) {
    return resultWithBonus;
  } else if (bonus === false) {
    return resultSalary;
  }

  // Answer 2
  return bonus ? `£${10 * salary}` : `£${salary}`;

  // Answer 3
  return "£" + salary * (bonus ? 10 : 1);

  // Answer 4
  return "£" + (bonus ? salary * 10 : salary);
}

// Grasshopper - Basic Function Fixer
function addFive(num) {
  var total = num + 5;
  return total;
}

// Convert a Boolean to a String
function booleanToString(b) {
  // Answer 1
  return b.toString();

  // Answer 2
  return String(b);
}

// NBA full 48 minutes average
function pointsPer48(ppg, mpg) {
  if (ppg === 0 || mpg === 0) {
    return 0;
  } else {
    return Number(((ppg / mpg) * 48).toFixed(1));
  }
}

// Find the position!
function position(letter) {
  // Answer 1
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;

  // Answer 2
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return "Position of alphabet: " + (alphabet.indexOf(letter) + 1);
}

// Sum of differences in array

// kumpulan array yang angkanya tidak berurutan.
// hitung jumlah keseluruhannya dengan rumus (a-b)+(b-c)
// penjumlahan tersebut angka paling besar harus berada di depan, dan kecil di belakang
function sumOfDifferences(arr) {
  // Answer 1
  const sortArr = arr.sort((a, b) => b - a);
  let sum = 0;

  for (let i = 1; i < sortArr.length; i++) {
    sum += sortArr[i - 1] - sortArr[i];
  }
  return sum;

  // Answer 2
  arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);

  // Answer 3
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;

  // Answer 4
  arr.sort((a, b) => b - a).shift() - arr.pop() || 0;

  // Answer 5
  if (arr.length == 0) return 0;
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1] - arr[0];
}

// Get the mean of an array

// Menjumlahkan seluruh angka dalam array,
// lalu mencari rata-rata berdasarkan panjang array.
// Pembulatan ke bawah
function getAverage(marks) {
  // Answer 1
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }
  return Math.floor(total / marks.length);

  // Answer 2
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);

  // Answer 3
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

// Lario and Muigi Pipe Problem

// Mencari angka awal, dan akhir.
// Buat urutan angka yang hilang dengan mengganti menjadi array baru
function pipeFix(numbers) {
  // Answer 1
  const angkaMax = Math.max.apply(null, numbers);
  let result = [];

  for (let i = Math.min.apply(null, numbers); i <= angkaMax; i++) {
    result.push(i);
  }
  return result;

  // Answer 2
  var first = numbers[0];
  var last = numbers[numbers.length - 1];

  var arr = [];
  for (var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;

  // Answer 3
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i + 1] - 1 && i < numbers.length - 1) {
      numbers.splice(i + 1, 0, numbers[i] + 1);
    }
  }
  return numbers;
}

// Drink About

// Membuat statement
// Membuat perbandingan lebih kecil
// lalu return sesuai kebutuhan
function peopleWithAgeDrink(old) {
  if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
}

// Palindrome Strings
function isPalindrome(line) {
  // Answer 1
  let normalize = line.toString().toLowerCase();
  let result = "";
  console.log(normalize);
  for (let i = 0; i < normalize.length; i++) {
    result = normalize[i] + result;
  }
  if (result === normalize) {
    return true;
  } else {
    return false;
  }

  // Answer 2
  return line.toString() == line.toString().split("").reverse().join("");
}

// How much water do i need?
function howMuchWater(water, load, clothes){
  // Answer 1
  if(clothes > load * 2) return 'Too much clothes'
  if(clothes < load) return 'Not enough clothes'
  
  return +((water * 1.1 ** (clothes - load)).toFixed(2))

  // Answer 2
  clothes > 2 * load ? 'Too much clothes' 
  : clothes < load ? 'Not enough clothes' 
  : Math.round(water * Math.pow(1.1, clothes-load)*100)/100;

  // Answer 3
  if(clothes >= 2 * load){
    return 'Too much clothes';
  } else if(clothes < load){
    return 'Not enough clothes';
  } else {
    return Math.round(water * Math.pow(1.1,(clothes-load))*100)/100;
  }
}

// Is he gonna survive? 
function hero(bullets, dragons){
  // Answer 1
  if(bullets >= dragons*2) {
    return true
  } else {
    return false
  }

  // Answer 2
  return (bullets >= dragons * 2) ? true : false;
}

// A wolf in sheep's clothing
function warnTheSheep(queue) {
  // Answer 1
  const index = queue.indexOf('wolf')
  return index === queue.length-1 
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${queue.length-1-index}! You are about to be eaten by a wolf!`

  // Answer 2
  const position = queue.reverse().indexOf('wolf');
  return position === 0 
    ? 'Pls go away and stop eating my sheep' 
    : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}

// Filling an array(part1)
const arr = N => {
  // Answer 1
  var emptyArray = [];
  for(let i = 0; i < N; i++) {
    emptyArray.push(i)
  }

  // Answer 2
  Array.from({length: N}, (_, i) => i);
}

// USD => CNY
function usdcny(usd) {
  const chineseConverter = usd * 6.75
  return chineseConverter.toFixed(2) + ' Chinese Yuan'.toString()
}

// Sum The Strings
function sumStr(a,b) {
  // Answer 1
  return String(Number(a)+Number(b));

  // Answer 2
  return (+a+ +b)+'' 

  // Answer 3
  return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}

// For Twins2: Math Operations
function iceBrickVolume(radius, bottleLength, rimLength) {
  // Answer 1
  return 2 * radius * radius * (bottleLength - rimLength)

  // Answer 2
  if (radius > 0 && bottleLength > 0 && rimLength < bottleLength) {
    let brickHeight = bottleLength - rimLength;
    return brickHeight * 2 * Math.pow(radius, 2);
  }
}

// Convert to binary
function toBinary(n) {
  // Answer 1
  return +n.toString(2)
}

// Take the derivative
function derive(coefficient,exponent) {
  // Answer 1
  return `${coefficient * exponent}x^${exponent-1}`

  // Answer 2
  return (a * b) + "x^" + (b - 1);
}

// Function2 - Squaring an argument
function square(n) {
  // Answer 1
  return n*n

  // Answer 2
  var num = Math.pow(num, 2);
  return num;
}

// Dollar and Cents
function formatMoney(amount){
  return '$' + amount.toFixed(2)
}

// Will there be enough space?
function enough(cap, on, wait) {
  // Answer 1
  return (on + wait > cap) ? on + wait - cap : 0;

  // Answer 2
  return Math.max(wait + on - cap, 0);

  // Anwer 3
  if (on + wait < cap){
    return 0;
  } else {
    return (on + wait) - cap;
  }
}

// Beginner - Reduce but Grow
function grow(x){
  // Answer 1
  return x.reduce((a, b) => a * b)

  // Answer 2
  eval(x.join("*"))

  // Answer 3
  let res = 1;
  for (let i = 0; i < x.length; i++) {
    res *= x[i];
  }
  return res;
}

// Beginner - Lost Without a Map
function maps(x){
  return x.map(y => y * 2)
}

// Transportation on vacation
function rentalCarCost(d) {
  // Answer 1
  const base = 40
  if (d >= 7) return d * base - 50
  if (d >= 3) return d * base - 20
  return d * base
}

// Century from year
function century(year) {
  // Answer 1
  const result = String(year / 100).split('.')
  return result.length === 2 ? Number(result[0]) + 1 : Number(result[0])

  // Anwer 2
  return Math.ceil(year/100)
}

// Pre-FizzBuzz Workout #1
function preFizz(n) {
  // Answer 1
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;

  // Answer 2
  return [...Array(n)].map((_, i) => ++i)
}

// Grasshopper - Summation
var summation = function (num) {
  // Answer 1
  var result = 0
  for(let i = 0; i <= num; i++) {
    result += i
  }
  return result

  // Answer 2
  return num * (num + 1) / 2
}

// Grashopper - Personalized message
function greet(name, owner) {
  if(name === owner) {
    return "Hello boss"
  } else {
    return "Hello guest"
  }
}

// Function 3 - multiplying two numbers
function multiply(a, b) {
  return a * b
}

// Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  // Answer 1
  return birds.filter( bird => !geese.includes(bird));

  // Answer 2
  return birds.filter( bird => geese.indexOf(bird) < 0 );
};

// Convert boolean values to strings 'Yes' or 'No'.
function boolToWord( bool ){
  // Answer 1
  if(bool === true) {
    return ("Yes")
  } else {
    return ("No")
  }

  // Answer 2
  return bool ? 'Yes':'No';
}

// Reversed Strings
function solution(str){
  // Answer 1
  var strArray = str.split("")
  var revArray = strArray.reverse()
  var joinString = revArray.join("")

  return joinString

  // Answer 2
  return str.split('').reverse().join('');
}

// Stringy Strings
function stringy(size) {
  // Answer 1
  var str='';
  for( var i=1; i<=size; i++ )
    str+=i%2;
  return str;

  // Answer 2
  return [...new Array(size)].map((element, i) => (i % 2 === 0 ? 1 : 0)).join('')
}

// Grasshopper - Variable Assignment Debug
var a = "dev"
var b = "Lab"

var name = a + b

// Fake Binary
function fakeBin(x) {
  // Answer 1
  var stringNum = x.split('')
  return stringNum.map(num => (Number(num) >= 5 ? 1 : 0)).join('')

  // Answer 2
  return x.replace(/\d/g, d => d < 5 ? 0 : 1);
}

// Reverse Words
function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}

// Function1 - hello world
function greet() {
  return "hello world!" 
 }

// Grasshopper - Terminal game move function
 function move (position, roll) {
  //  Answer 1
  return (position + roll) + roll

  // Answer 2
  return position + roll * 2
}

// UEFA EURO 2016
function uefaEuro2016(teams, scores){
  // Answer 1
  if(scores[0] > scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
  } else if(scores[0] < scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
  } else if(scores[0] === scores[1]) {
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  }

  // Answer 2
  `At match ${teams[0]} - ${teams[1]}, ${scores[0] === scores[1] ? `teams played draw.` : `${scores[0] > scores[1] ? teams[0] : teams[1]} won!`}`;
}

// Total pressure calculation
function solution(M1, M2, m1, m2, V, T) {
  M1 = m1 * 0.001/M1;
  M2 = m2 * 0.001/M2;
  T = T + 273.15;
  var R = 0.082;

return (((M1 + M2) * R * T) / V) * 1000;
}

// Convert number to string
function numberToString(num) {
  // Answer 1
  return num.toString()

  // Answer 2
  return String(num);
}

// You Can't Code Under Pressure #1
function doubleInteger(i) {
  return i * 2
}

// Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  // Answer 1
  return Math.floor(s * (100000 / 3600))

  // Answer 2
  Math.floor(s / 0.036);

  // Answer 3
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;
  
  return Math.floor((s*centimetersInKilometers)/secsInHour);
}

// Opposites attract
function lovefunc(flower1, flower2) {
  // Answer 1
  return flower1 % 2 !== flower2 % 2

  // Answer 2
  return (flower1 + flower2) % 2 === 1
}

// Miles per gallon to kilometers per liter
function converter (mpg) {
  return Number((mpg * 0.3540060435382138).toFixed(2))
}

// Beginner Series #2 Clock
function past(h, m, s) {
  // Answer 1
  return (h * 3600 + m * 60 + s) * 1000

  // Answer 2
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  
  return Math.round(setTime - midnight);
}

// Sum mixed array
// Answer 1
const sumMix = x => x.reduce((total, value) => total + Number(value), 0)

// Answer 2
function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

// The feast of many beasts
function feast(beast, dish) {
  // Answer 1
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]

  // Answer 2
  return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
}

// Regular Ball Super Ball
// Answer 1
class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType
  }
}

// Answer 2
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

// Squash the bugs
// Answer 1
const findLongest = string => Math.max(...string.split(' ').map(word => word.length)) 

// Answer 2
function findLongest(str) {
  var spl = str.split(" "),
      longest = 0;
  
  for (var i in spl) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }

  return longest;
}

// Find Maximum and Minimum Values of a List
// Answer 1
const min = list => Math.min(...list)
const max = list => Math.max(...list)

// Answer 2
var min = function(list){
  return Math.min.apply(null,list);
}

var max = function(list){
  return Math.max.apply(null,list);
}
