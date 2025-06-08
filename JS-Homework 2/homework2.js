console.log("Task1 - Հաշվել զանգվածի տարրերի գումարը");
const task1Numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < task1Numbers.length; i++) {
  sum += task1Numbers[i];
}
console.log("Sum of array components is " + sum);

console.log("\nTask2 - Գտնել զանգվածի ամենամեծ թիվը");
const task2Numbers = [3, 7, 2, 9, 1];
let max = -Infinity;
for (let i = 0; i < task2Numbers.length; i++) {
  if (task2Numbers[i] > max) {
    max = task2Numbers[i];
  }
}
console.log("The biggest number in this array is " + max);

console.log("\nTask3 - Ստեղծել զանգված, որը պարունակում է միայն զույգ թվերը");
const task3Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenArr = [];
for (let i = 0; i < task3Numbers.length; i++) {
  if (task3Numbers[i] % 2 == 0) {
    evenArr.push(task3Numbers[i]);
  }
}
console.log(evenArr);

console.log("\nTask4 - Հաշվել, թե քանի տարր կա զանգվածում, որը մեծ է 10-ից");
const task4Numbers = [4, 12, 7, 15, 3, 21];
let count = 0;
for (let i = 0; i < task4Numbers.length; i++) {
  if (task4Numbers[i] > 10) {
    count++;
  }
}
console.log(`In this array we have ${count} number bigger than 10`);

console.log("\nTask5 - Տպել զանգվածի տարրերը շրջված հերթականությամբ");
const task5Numbers = ["a", "b", "c", "d", "e", "f"];
let reversedArr = [];
console.log(task5Numbers);
for (let i = task5Numbers.length - 1; i >= 0; i--) {
  reversedArr.push(task5Numbers[i]);
}
console.log(reversedArr);

console.log(
  "\nTask6 - Ստեղծել նոր զանգված, որի յուրաքանչյուր տարրը նախորդ զանգվածի տարրի քառակուսին է"
);
const task6Numbers = [1, 2, 3, 4];
let newArr = [];
for (let i = 0; i < task6Numbers.length; i++) {
  newArr[i] = task6Numbers[i] ** 2;
}
console.log(newArr);

console.log("\nTask7 - Ջնջել կրկնվող արժեքները զանգվածից");
const task7Numbers = [1, 2, 2, 3, 3, 3, 4];
let unrepeatableArray = [];
for (let i = 0; i < task7Numbers.length; i++) {
  if (task7Numbers[i] === task7Numbers[i + 1]) {
    continue;
  }
  unrepeatableArray.push(task7Numbers[i]);
}
console.log(unrepeatableArray);

console.log("\nTask8 - Գտնել առաջին տարրը, որը բազմապատիկ է 7-ի");
const task8Numbers = [5, 10, 14, 22, 35];
for (let i = 0; i < task8Numbers.length; i++) {
  if (task8Numbers[i] % 7 === 0) {
    console.log(task8Numbers[i]);
    break;
  }
}
