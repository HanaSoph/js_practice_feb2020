// filter 
function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  let smallNums = []

  nums.forEach(function (num) {
    if (num < 1) {
      smallNums.push(num);
    }
  });

  return smallNums
}
/*
let smallNums = []
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < 1) {
    smallNums.push(nums[i]);
  }
}
return smallNums
}
*/

// filter
function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let beginsWith = []

  names.forEach(function (name) {
    if (name.charAt(0) === char) {
      beginsWith.push(name);
    }
  })
  return beginsWith
}


// for each
function findVerbs(words) {
  if (!words) throw new Error("words is required");
  
  let verbWords = []

  words.forEach(function (word) {
    if (word.slice(0, 3) === "to ") {
      verbWords.push(word);
    }
  })
  return verbWords;
}

// filter
function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  let integers = []

  nums.forEach(function(num){
    if (num % 1 === 0) {
      integers.push(num);
    }
  })
  return integers;
}

// for each
function getCities(users) {
  if (!users) throw new Error("users is required");
  
  let cities = []
  
  users.forEach(function (user){
    cities.push(user.data.city.displayName)
  })
  return cities
}


// map
function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  let squared = []

  nums.forEach(function (num){
    squared.push(+(Math.sqrt(num).toFixed(2)));
  })
  return squared;
}

// filter or for each
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  let match = []

  sentences.forEach(function(sentence) {
    if (sentence.toLowerCase().match(str.toLowerCase())) {
      match.push(sentence)
    }
})
  return match
}

// filter or for each
function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  let longestSide = []

  triangles.forEach(function(triangle){
    longestSide.push(Math.max(...triangle))
  })
  return longestSide
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
