function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") {
    return true;
  } else {
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  let bus = people / 40
  let numOfBus = Math.ceil(bus)
  return numOfBus
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count = 0
  arr.forEach(animal => {
    if (animal === "sheep") {
      count++
    }
  })
  return count
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  
  if (person.address.city != "Manchester") {
    return false
  }

  if (person.address.postCode.startsWith("M")) {
    return true
  } else {
    return false
  }
}


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
