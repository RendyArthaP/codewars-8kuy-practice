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
  let result = '';

  arrays.map((array, indexArray) => {
   array.map((arr, indexArr) => {
     result += arr;
     if(indexArr < array.length - 1) {
       result += ',';
     } else if(indexArray < arrays.length - 1) {
       result += '\n';
     }
   })
  })
  return result

  // Answer 2
  return array.join('\n');

  // Answer 3
  array.map(row => row.join(',')).join('\n');
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
  return arr.reverse()
}

// Do I get Bonus?
function bonusTime(salary, bonus) {
  // Answer 1
  var totalBonus = (salary * 10).toString();
  var logo = '£';
  var resultWithBonus = logo.concat(totalBonus);
  var resultSalary = logo.concat(salary).toString()

  if(bonus == true) {
    return resultWithBonus;
  } else if(bonus === false) {
    return resultSalary;
  }

  // Answer 2
  return bonus ? `£${10 * salary}` : `£${salary}`;

  // Answer 3
  return '£' + salary * (bonus ? 10 : 1);

  // Answer 4
  return '£'+(bonus ? salary*10:salary)
}

// Grasshopper - Basic Function Fixer
function addFive(num) {
  var total = num + 5
  return total
}

// Convert a Boolean to a String
function booleanToString(b){
  // Answer 1
  return b.toString();

  // Answer 2
  return String(b);
}

// NBA full 48 minutes average
function pointsPer48(ppg, mpg) {
  if(ppg === 0 || mpg === 0) {
    return 0
  } else {
    return Number((ppg / mpg *48).toFixed(1))
  }
}

// Find the position!
function position(letter){
  // Answer 1
  return `Position of alphabet: ${letter.charCodeAt()-96}` 

  // Answer 2
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}

// Sum of differences in array
function sumOfDifferences(arr) {
  // Answer 1
  const sortArr = arr.sort((a,b) => b-a)
  let sum = 0;

  for(let i = 1; i < sortArr.length; i++) {
    sum += sortArr[i - 1] - sortArr[i]
  }
  return(sum)

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
  if (arr.length==0)
    return 0
  arr.sort((a,b)=>a-b)
  return arr[arr.length-1]-arr[0]
}

// Get the mean of an array
function getAverage(marks){
  // Answer 1
  let total = 0;
  for(let i = 0; i < marks.length; i++) {
    total += marks[i]
  }
  return Math.floor(total / marks.length)

  // Answer 2
  return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);

  // Answer 3
  return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

// Lario and Muigi Pipe Problem
function pipeFix(numbers){
  // Answer 1
  const angkaMax = Math.max.apply(null, numbers)
  let result = [];

  for(let i = Math.min.apply(null, numbers); i <= angkaMax; i++) {
    result.push(i)
  }
  return result;

  // Answer 2
  var first = numbers[0];
  var last = numbers[numbers.length-1];
  
  var arr = [];
  for(var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;

  // Answer 3
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i+1]-1 && i < numbers.length-1 ) {
      numbers.splice(i+1,0,numbers[i]+1);
    } 
  }
  return numbers;
}

// Drink About
function peopleWithAgeDrink(old) {
  if(old < 14) {
    return ('drink toddy')
  } else if(old < 18) {
    return ('drink coke')
  } else if(old < 21) {
    return ('drink beer')
  } else {
    return ('drink whisky')
  }
};