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
  for (let i = 0; i < menu.length; i++) {
    if (menu[i].ingredients.includes(ingredient)) {
      return true
    }
  }
  return false
}

//loop through the array
//access the ingredients values
//if the specified word is found return true
//other wise fo through the entire array and return false

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  
  let commonNums = []
  for (var i = 0; i < arr1.length; i++){ 
    for (var j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]) {
        if (!commonNums.includes(arr1[i])) {
        commonNums.push(arr1[i])
        }
      }
    } 
  }
  return commonNums.sort()
}

//start with the first number in the first array
//compare this with the numbers in the second array (with a loop)
  //if the numbers match -> return all the matching numbers in a new array
  //if the number don't match -> move on to the next number
//once the first number is compared, move onto the second number and repeat until the end of both arrays
//sort the new array in ascending order
//plus make sure the values are unique 

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
