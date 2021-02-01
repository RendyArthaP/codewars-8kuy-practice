// Create palindrome
const huruf = "abcdefghijklmnopqrstuvwxyz"

function solve(s) {
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
}