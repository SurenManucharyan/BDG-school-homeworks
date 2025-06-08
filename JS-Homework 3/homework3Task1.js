function splitStringElementsToArray(array) {
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index].split("");
  }
  return array;
}

function shortestElementLength(array) {
  let min = Infinity;
  for (let index = 0; index < array.length; index++) {
    if (array[index].length < min) {
      min = array[index].length;
    }
  }
  return min;
}

function fromArrayToString(array) {
  let str = "";
  for (let index = 0; index < array.length; index++) {
    str += array[index];
  }
  return str;
}

function longestCommonPrefix(array) {
  let circleLength = shortestElementLength(array);
  array = splitStringElementsToArray(array);
  let firstElementOfArray = array[0];
  let minLength = Infinity;
  for (let i = 1; i < array.length; i++) {
    let processElement = array[i];
    let count = 0;
    for (let j = 0; j < circleLength; j++) {
      if (firstElementOfArray[0] !== processElement[0]) {
        return "";
      } else if (firstElementOfArray[j] === processElement[j]) {
        count++;
      } else {
        break;
      }
    }
    if (count < minLength) {
      minLength = count;
    }
  }
  firstElementOfArray.splice(minLength);
  firstElementOfArray = fromArrayToString(firstElementOfArray);
  return firstElementOfArray;
}

let arrayOfStrings = ["flowers", "flower", "flowe", "flow"];
console.log(
  "Task1 \nThe longest common generic prefix for all words is - " +
    longestCommonPrefix(arrayOfStrings)
);
