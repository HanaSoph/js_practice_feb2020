function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squared = [];
  let array = (Object.values(nums));
  for (let i = 0; i < array.length; i++) {
    squared.push(array[i] * array[i]);
  }
  return squared
}

// access each value in the array
// print each individual value
// times that by itself
// return the new number into a new array

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join('');
}

//access each string in the array but skip the first word in the array (loop from the 1st index)
//capitalise from the second word in the array
//combine them to be 1 string 

//support from: https://gomakethings.com/converting-a-string-to-title-case-with-vanilla-javascript/

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0
  for (let i = 0; i < people.length; i++) {
    let total = people[i].subjects.length
    count = count + total
  }
  return count
}

//loop through the array's objects
//access the subjects values (object.values())
//add to counter for every index in the subject array 
//return the total count of subjects 

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
