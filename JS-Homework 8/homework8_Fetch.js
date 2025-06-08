let array = null;

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((fetchResult) => {
    return fetchResult.json();
  })
  .then((res) => {
    array = res;
  });

let button = document.createElement("button");
button.style.width = "100px";
button.style.height = "50px";
let ul = document.createElement("ul");
button.addEventListener("click", () => {
  array.forEach((el) => {
    let li = document.createElement("li");
    li.textContent = el.id;
    li.addEventListener("click", () => {
      console.log(el.title);
    });
    ul.append(li);
  });
});
document.body.append(button);
document.body.append(ul);
