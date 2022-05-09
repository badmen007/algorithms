
// 方法一
const longestCommonPrefix = (strings) => {
  let re = ''
  if(!strings.length) return;
  for(let i = 0; i < strings[0].length; i++) {
    for(let j = 1; j < strings.length; j++) {
      if(strings[j][i] !== strings[0][i]) return re || 'prefix is not exist';
    }
    re += strings[0][i]
  }
}


// 方法二 
const longestCommonPrefix = (strings) => {
  let re = strings && strings[0];
  for(let i = 0; i < strings.length; i++) {
    let regexp = new RegExp('^' + re);
    while(!regexp.test(strings[i]) && re.length) {
      re = re.slice(0, re.length-1);
      regexp = new RegExp('^' + re);
    }
  }
  return re || 'prefix is not exist';
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
