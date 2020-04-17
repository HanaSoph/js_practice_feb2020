function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNums = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      smallNums.push(nums[i]);
    }
  }
  return smallNums
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let beginsWith = []
  for (let i = 0; i < names.length; i++){
    if (names[i].charAt(0) === char) {
      beginsWith.push(names[i]);
    }
  }
  return beginsWith
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbWords = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].slice(0,3) === "to ") {
      verbWords.push(words[i]);
    }
  }
  return verbWords;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let integers = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 1 === 0) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let cities = []
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squared = []
  for (let i = 0; i < nums.length; i++) {
    squared.push(+(Math.sqrt(nums[i]).toFixed(2)));
  }
  return squared;
}


function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let match = []
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().match(str.toLowerCase())) {
      match.push(sentences[i])
    }
  }
  return match;
}


function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longestSide = []
  for (let i = 0; i < triangles.length; i++) {
    longestSide.push(Math.max(...triangles[i]));
  }
  return longestSide;
}

//loop through triangle sizes by accessing each array within the array
//capture the largest number in that array
//add that to a new array
//return new array

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
