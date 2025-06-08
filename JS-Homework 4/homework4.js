console.log("Task1");

function numbersFromInterval(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let newArrayFromInterval = numbersFromInterval(
  [2, 66, 3, 9],
  (item) => item >= 1 && item <= 3
);
console.log(newArrayFromInterval);

console.log("Task2");

function arraysCompare(array) {
  let startItem = array[0];
  let bool = true;
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < startItem.length; j++) {
      let currentElement = array[i];
      if (
        startItem.length === currentElement.length &&
        startItem[j] === currentElement[j]
      ) {
        bool = true;
      } else {
        return false;
      }
    }
  }
  return bool;
}

let arr = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arraysCompare(arr));

console.log("Task3");

function splitArrayToLittleArrays(array, len) {
  let newArray = [];
  let elementArraysLength = 0;
  let elementArray = [];
  for (let i = 0; i < array.length; i++) {
    if (elementArraysLength < len) {
      elementArray.push(array[i]);
      elementArraysLength++;
    }
    if (elementArraysLength === len) {
      newArray.push(elementArray);
      elementArray = [];
      elementArraysLength = 0;
    }
    if (
      i === array.length - 1 &&
      elementArraysLength < len &&
      elementArraysLength.length
    ) {
      newArray.push(elementArray);
    }
  }
  return newArray;
}

console.log(splitArrayToLittleArrays([1, 2, 3, 4, 5, 6, 7, 8], 2));
