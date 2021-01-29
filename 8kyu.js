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
