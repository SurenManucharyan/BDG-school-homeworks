console.log("Task 1\n");

let arr = [1, 2, 2, 3, 4, 4];
let set = new Set(arr);
console.log(set);

console.log("Task 2\n");

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);
let common = false;
for (let value of set1) {
  if (set2.has(value)) {
    common = true;
  }
}
console.log(common);

console.log("Task 3\n");

const sentence = "hello world hello JavaScript world ";
let wordsArray = sentence.split(" ");
const set3 = new Set(wordsArray);
console.log(set3.size);

console.log("Task 4\n");

function f(string = "hi hi hello") {
  const arrayOfWords = string.split(" ");
  let map = new Map();
  arrayOfWords.forEach((el) => {
    if (!map.has(el)) {
      map.set(el, 1);
    } else {
      let count = map.get(el);
      map.set(el, ++count);
    }
  });
  return map;
}
console.log(f());

console.log("Task 5\n");

const userRoles = new Map();
userRoles.set("Alice", "admin");
userRoles.set("Bob", "editor");

for (let elem of userRoles) {
  if (elem.includes("admin")) {
    console.log(`${elem[0]} is admin`);
  } else {
    console.log(`${elem[0]} is simple user`);
  }
}

console.log("Task 6\n");

let usersNames = null;
async function usersName() {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const usersData = await result.json();
    usersNames = usersData.map((user) => user.name);
    console.log(usersNames);
  } catch (err) {
    Promise.reject();
  }
}

usersName();

let userPosts = null;
async function usersPosts(id) {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const usersData = await result.json();
    let userPosts = usersData.filter((user) => {
      if (user.userId === id) {
        return user;
      }
    });
    console.log(userPosts);
  } catch (err) {
    Promise.reject();
  }
}

usersPosts(1);
