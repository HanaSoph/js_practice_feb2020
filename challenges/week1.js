function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  const capitalize = word.charAt(0).toUpperCase();
  const remaining = word.slice(1);
  return capitalize + remaining;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  const initialOne = firstName.charAt(0);
  const initialTwo = lastName.charAt(0);
  return initialOne + "." + initialTwo;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  let vatCost = originalPrice * vatRate / 100
  let answer = originalPrice + vatCost
  return Math.floor(answer * 100) / 100;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  let percentage = reduction / 100
  let discount = originalPrice * percentage
  let answer = originalPrice - discount
  return Math.round(answer * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let position;
  let length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }
  return str.substring(position, position + length)
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  var newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var newArray = [];
  // for (var i = words.length - 1; i >= 0; i--) {
  //   newArray.push(reverseWord(words[i]));
  // }
  words.forEach(word => {
    newArray.push(reverseWord(word));
  })
  return newArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let counter = 0
  users.forEach(user => {
    if (user.type == "Linux") {
      counter++
    }
  })
  return counter
}

/*
loop through the array of objects
count the object specified (type: linux)
return that total amount
*/

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
