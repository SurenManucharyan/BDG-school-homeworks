function checkQuotes(array, str1, str2) {
  let answer;
  let currentArray = array.slice(array.indexOf(str1), array.length);
  for (let i = array.indexOf(str1); i < array.length; i++) {
    if (array[i] === str1 && currentArray.includes(str2)) {
      return (answer = true);
    } else {
      return (answer = false);
    }
  }
}

function checkQuotes2(text) {
  let array = [];
  for (let i = 0; i < text.length; i++) {
    if(text[i] === "("  || text[i] === "[" || text[i] === "}"){
      array.push(text[i]);
    }else{
      if(array.length === 0){
        return false;
      }


      
    }
    
  }
}

let str = "(){}[]";
console.log("Task2\n");
let answer = checkQuotes2(str);

