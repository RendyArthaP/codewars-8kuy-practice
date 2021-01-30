// 8kyu

// Incorrect division method
const solve = () => {
  return x / y
}

// Difference of Volumes of Cuboids
function volume(c) { 
  return c.reduce((x,y) => x*y)
}
function findDifference(a, b) {
  return Math.abs(volume(a) - volume(b))
}

// Find the first non-consecutive number
function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i+1]) {
      return arr[i+1] 
    } 
  }
  return null
}

// FIXME: Replace all dots
var replaceDots = function(str) {
  return str.replace(/\./g,'-')
}

// Quarter of the year
const quarterOf = (month) => {
  if(month <= 3) {
    return 1
  } else if(month <= 6) {
    return 2
  } else if(month <= 9) {
    return 3
  } else if(month <= 12) {
    return 4
  }
}

// Grasshopper - Grade book
function getGrade (s1, s2, s3) {
  if(((s1 + s2 + s3) / 3) >= 90) {
    return "A"
  } else if(((s1 + s2 + s3) / 3) >= 80) {
    return "B"
  } else if(((s1 + s2 + s3) / 3) >= 70) {
    return "C"
  } else if(((s1 + s2 + s3) / 3) >= 60) {
    return "D"
  } else if(((s1 + s2 + s3) / 3) <= 60) {
    return "F"
  }
}

// get character from ASCII Value
function getChar(c){
  return String.fromCharCode(c)
}

// Invert Array Values
function invert(array) {
  var newArray = [];
  for(let i = 0; i < array.length; i++) {
    newArray.push(-array[i])
  }
  return newArray;
}

// Bartender, drinks
function getDrinkByProfession(param){
  switch(param.toLowerCase()){
    case 'jabroni':
      return 'Patron Tequila'
      break;
    case 'school counselor':
      return 'Anything with Alcohol'
      break;
   case 'programmer':
     return 'Hipster Craft Beer'
     break;
   case 'bike gang member':
     return 'Moonshine'
     break;
   case 'politician':
     return 'Your tax dollars'
     break;
   case 'rapper':
     return 'Cristal'
     break;
   default:
     return 'Beer'
  }
}

// Return Negative 
function makeNegative(num) {
  return -Math.abs(num);
}

// Gravity Flip
const flip=(d, a)=>{
  if(d === 'R') 
    return a.sort((a,b)=>a-b);
  if(d === 'L') 
    return a.sort((a,b)=>b-a);
}

// Sum If Positive
function positiveSum(arr) {
  var total = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      total += arr[i]
    }
  }
  return total;
}

// Calculate BMI
function bmi(weight, height) {
  var totalBmi = weight / Math.pow(height, 2)
  
  if(totalBmi <= 18.5) {
    return "Underweight"
  } else if(totalBmi <= 25) {
    return "Normal"
  } else if(totalBmi <= 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

// Beginner Series #1 School Paperwork
