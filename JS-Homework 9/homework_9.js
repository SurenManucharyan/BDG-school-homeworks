const people = [
  { name: "Alice", age: 17, salary: 400 },
  { name: "Bob", age: 22, salary: 500 },
  { name: "Charlie", age: 16, salary: 1500 },
  { name: "David", age: 30, salary: 600 },
  { name: "Charlie", age: 15, salary: 1400 },
  { name: "David", age: 32, salary: 300 },
  { name: "Charlie", age: 18, salary: 100 },
  { name: "David", age: 29, salary: 200 },
];
console.log("Task 1 \n");

console.log("Task 1.1 \n");
let a = people.filter((el) => el.age >= 18);
console.log(a);

console.log("Task 1.2 \n");
function sortedByAge(array) {
  const result = Object.groupBy(array, ({ age }) => age);
  return result;
}
console.log(sortedByAge(people));

console.log("Task 1.3 \n");
function avarageSalary(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].salary;
  }
  return sum / array.length;
}
console.log(avarageSalary(people));

console.log("Task 1.4 \n");
function sumOfSalary(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i].salary;
  }
  return sum;
}
console.log(sumOfSalary(people));

console.log("Task 2 \n");
class Countdown {
  constructor(seconds) {
    this.seconds = seconds;
    this.intervalId = null;
  }

  start() {
    this.intervalId = setInterval(() => {
      console.log(this.seconds);
      this.seconds--;
      if (this.seconds < 0) {
        this.stop();
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}
const timer = new Countdown(5);
timer.start();

console.log("Task 3 \n");

function getFibonacci(length) {
  let arr = [0, 1];
  if (length === 0) {
    return 0;
  }
  for (let i = 0; i < length; i++) {
    let sum = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(sum);
  }
  return arr[length];
}

// Recursive Fibonacci
// function recursiveFibonacci(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n <= 2) {
//     return 1;
//   }
//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// Loop Fibonacci

// function loopFibonacci(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n <= 2) {
//     return 1;
//   }

//   let a = 0;
//   let b = 1;
//   for (let i = 2; i <= n; i++) {
//     let sum = a + b;
//     a = b;
//     b = sum;
//   }
//   return b;
// }

console.log(getFibonacci(0)); // 0
console.log(getFibonacci(1)); // 1
console.log(getFibonacci(5)); // 5
console.log(getFibonacci(10)); // 55
