
function duplicateLetters(...args) {
  const hashObj = {};
  const arr = args[0].split('');
  let maxFrequency = -Infinity;
  arr.forEach(element => {
    if(hashObj.hasOwnProperty(element))
       hashObj[element] += 1;
    else
        hashObj[element] = 1;
    maxFrequency = Math.max(maxFrequency , hashObj[element]);
  });
  return ( maxFrequency > 1 ) ? maxFrequency : false;
}

export {
  duplicateLetters
}
