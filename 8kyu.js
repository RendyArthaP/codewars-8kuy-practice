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
