// filter 
function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const smallNums = nums.filter(function (num) {
    return num < 1;
  })
  return smallNums
}

  // filter
  function findNamesBeginningWith(names, char) {
    if (!names) throw new Error("names is required");
    if (!char) throw new Error("char is required");

    const beginsWith = names.filter(function (name){
      return (name.charAt(0) === char);
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

    const integers = nums.filter(function (num) {
      return num % 1 === 0
    })
    return integers
  }

  // for each
  function getCities(users) {
    if (!users) throw new Error("users is required");

    let cities = []

    users.forEach(function (user) {
      cities.push(user.data.city.displayName)
    })
    return cities
  }


  // map
  function getSquareRoots(nums) {
    if (!nums) throw new Error("nums is required");

    const squared = nums.map(function (num){
      const square = (+(Math.sqrt(num).toFixed(2)))
      return square
    })
    
  return squared
  }

  // filter or for each
  function findSentencesContaining(sentences, str) {
    if (!sentences) throw new Error("sentences is required");
    if (!str) throw new Error("str is required");
    
    const sentenceFilter = sentences.filter(function (sentence){
      return (sentence.toLowerCase().match(str.toLowerCase()))
    })
    return sentenceFilter
  }

// for each
  function getLongestSides(triangles) {
    if (!triangles) throw new Error("triangles is required");

   let longestSide = []

    triangles.forEach(function (triangle) {
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
