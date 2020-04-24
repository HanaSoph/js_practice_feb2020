const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  // itterate through the array to find n
  // find the index of n
  // plus 1 to that index place
  // return that number
  // or return null

  const index = nums.indexOf(n)
  if (index === -1) {
    return null
  }
  if (nums[index + 1]) {
    return (nums[index + 1])
  }
  else { return null }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }

  return {
    1: sum,
    0: str.length - sum,
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  const reversed = n.toString().split('').reverse().join('');
  return Math.sign(n) * parseInt(reversed);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  //loop through the array of arrays
  //count total number in each array
  //add that number to the sum
  let sum = 0

  arrs.forEach((array) => {
    let addThese = array.reduce((a, b) => a + b, 0)
    sum += addThese;
  });
  return sum
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length < 2) {
    return arr
  }
  return [arr.pop()].concat((arr.slice(1, arr.length)), arr.shift());
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  // loop through the object
  // remove/ignore all numbers
  // if the string is found return true
  // else return false
  // don't forget to make the string .toLowerCase
  
  let termLower = searchTerm.toLowerCase();

  for (let key in haystack){
    if (typeof haystack[key] === 'string' && haystack[key].toLowerCase().includes(termLower)) {
      return true
  }}
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  const frequencies = {};
  const strArr = str.split(" ")

  for (let i = 0; i < strArr.length; i++) {
    const word = strArr[i].toLowerCase().replace(/[^a-zA-Z ]/g, "");
    if (frequencies[word] === undefined) {
      frequencies[word] = 1;
    } else {
      frequencies[word] += 1;
    }}
    return frequencies
  };

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
