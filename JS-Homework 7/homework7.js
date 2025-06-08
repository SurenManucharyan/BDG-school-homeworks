const people = [
  { name: "Anna", country: "Germany" },
  { name: "John", country: "USA" },
  { name: "Maria", country: "Germany" },
  { name: "Lee", country: "South Korea" },
  { name: "Tom", country: "USA" },
];

class Homework_7 {
  constructor() {}

  simpleTimeout() {
    setTimeout(() => {
      console.log("Hello after 5 seconds");
    }, 5000);
  }

  simpleInterval() {
    let count1 = 0;
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        count1++;
        console.log(Date.now());
      }, 1000 * i);
    }
  }

  stopAnInterval() {
    let id = setInterval(() => {
      console.log("Ping!");
    }, 1000);
    setTimeout(() => {
      clearInterval(id);
    }, 5000);
  }

  countdowmTimer() {
    let count = 5;
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        console.log(count);
        count--;
      }, 1000 * i);
    }
  }

  countByCountry(array) {
    let countOfPeople = {};
    array.forEach((el) => {
      if (el.country in countOfPeople) {
        countOfPeople[el.country]++;
      } else {
        countOfPeople[el.country] = 1;
      }
    });
    console.log(countOfPeople);
  }

  countByCountryUseReduce(array) {
    array.reduce((acc, el) => {
      if (!acc[el.country]) {
        acc[el.country] = 1;
      } else {
        acc[el.country]++;
      }
      return acc;
    }, {});
  }
}

let task = new Homework_7();
task.countByCountryUseReduce(people);
