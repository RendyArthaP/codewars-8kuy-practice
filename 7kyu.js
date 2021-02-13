// Create palindrome
const huruf = "abcdefghijklmnopqrstuvwxyz"

function solve(s) {
  // Answer 1
  var str = s.length;
  var mid = Math.floor(str / 2);

  for(let i = 0; i <= mid; i++) {
    const huruf1 = huruf.indexOf(s[i])
    const huruf2 = huruf.indexOf(s[mid - 1 - i])
    const totalHuruf = Math.abs(huruf1 - huruf2)

    if(totalHuruf > 2 || totalHuruf === 1) {
      return false
    }
  }
    return true

  // Answer 2
  const middle = s.length / 2;

  for (let i = 0; i < middle; i++) {
    const first = s[i].charCodeAt()
    const last = s[s.length - (i + 1)].charCodeAt()
    const distance = Math.abs(last - first)
    if (distance > 2 || distance === 1) return false
  }
  return true

  // Answer 3
  let arr = s.split('').map(v => v.charCodeAt(0))
  let a = arr.slice(0,arr.length/2)
  let b = arr.slice(Math.ceil(arr.length/2)).reverse()
  let temp
  for (let i = 0; i < a.length; ++i) {
    temp = Math.abs(a[i] - b[i])
    if (temp !== 0 && temp !== 2) return false
  }
  return true
}

// You're square
var isSquare = function(n){
  // Answer 1
  if(Math.sqrt(n) % 1 === 0) {
    return true
  } else {
    return false
  }
  
  // Answer 2
  Number.isInteger(Math.sqrt(n));
}