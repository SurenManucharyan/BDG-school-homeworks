let arrOfQuestions = [
  " 2 + 2*2 = ? ",
  " 2*2 + 2*2 = ? ",
  " (2 + 2) * 2 = ? ",
  " (2 + 2) * (2 + 2) = ? ",
];

let arrOfAnswers = [
  [
    {
      value: 28,
      isCorrect: false,
    },
    {
      value: 6,
      isCorrect: true,
    },
    {
      value: 8,
      isCorrect: false,
    },
    {
      value: 4,
      isCorrect: false,
    },
  ],
  [
    {
      value: 8,
      isCorrect: true,
    },
    {
      value: 16,
      isCorrect: false,
    },
    {
      value: 10,
      isCorrect: false,
    },
    {
      value: 4,
      isCorrect: false,
    },
  ],
  [
    {
      value: 20,
      isCorrect: false,
    },
    {
      value: 16,
      isCorrect: false,
    },
    {
      value: 6,
      isCorrect: false,
    },
    {
      value: 8,
      isCorrect: true,
    },
  ],
  [
    {
      value: 16,
      isCorrect: true,
    },
    {
      value: 6,
      isCorrect: false,
    },
    {
      value: 8,
      isCorrect: false,
    },
    {
      value: 14,
      isCorrect: false,
    },
  ],
];
let questionsDiv = document.createElement("div");
questionsDiv.style.width = "500px";
questionsDiv.style.height = "300px";
questionsDiv.style.border = "2px solid grey";
questionsDiv.style.display = "none";
document.body.append(questionsDiv);

let question = document.createElement("span");
question.style.marginTop = "30px";
question.style.fontSize = "30px";
question.style.textAlign = "center";
question.style.display = "block";
question.textContent = "Nothing";
questionsDiv.append(question);

let answersDiv = document.createElement("div");
answersDiv.style.display = "grid";
answersDiv.style.gridTemplateColumns = "auto auto";
answersDiv.style.marginTop = "20px";
answersDiv.style.padding = "20px";
questionsDiv.append(answersDiv);

let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");
let button4 = document.createElement("button");

let arrayStylesOfButtons = [button1, button2, button3, button4];
arrayStylesOfButtons.forEach((el) => {
  el.style.borderRadius = "100px";
  el.style.border = "1px solid black";
  el.style.margin = "10px auto ";
  el.style.width = "200px";
  el.style.height = "50px";
  el.style.fontSize = "30px";
  el.addEventListener("mouseover", () => {
    el.style.backgroundColor = "#3D3D3D";
  });
  el.addEventListener("mouseout", () => {
    el.style.backgroundColor = "#F0F0F0";
  });
  el.addEventListener("click", () => {
    el.style.backgroundColor = "yellow";
  });
  answersDiv.append(el);
});

let startDiv = document.createElement("div");
startDiv.style.width = "500px";
startDiv.style.height = "300px";
startDiv.style.border = "2px solid grey";
startDiv.style.display = "block";
document.body.append(startDiv);

let welcomeText = document.createElement("p");
welcomeText.textContent = "Welcome to our game!!!";
welcomeText.style.marginTop = "30px";
welcomeText.style.fontSize = "30px";
welcomeText.style.textAlign = "center";
welcomeText.style.display = "block";
startDiv.prepend(welcomeText);

let startButton = document.createElement("button");
startButton.style.borderRadius = "100px";
startButton.style.border = "1px solid black";
startButton.style.width = "200px";
startButton.style.height = "50px";
startButton.style.marginLeft = "30%";
startButton.style.marginTop = "10%";
startButton.style.fontSize = "40px";
startButton.textContent = "Push";
startButton.addEventListener("mouseover", () => {
  startButton.style.background =
    "linear-gradient(to right, #1A2980 0%, #26D0CE  51%, #1A2980  100%)";
  startButton.textContent = "Start";
});
startButton.addEventListener("mouseout", () => {
  startButton.style.background = "#F0F0F0";
  startButton.textContent = "Push";
});
startButton.addEventListener("click", () => {
  startDiv.style.display = "none";
  questionsDiv.style.display = "block";
});
startDiv.append(startButton);

for (let i = 0; i < 4; i++) {}
