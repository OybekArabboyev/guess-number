const input = document.querySelector("input");
input.focus();

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

function messageFunc(message) {
  document.querySelector(".message").textContent = message;
}

function gameOver() {
  input.setAttribute("disabled", true);
  document.querySelector(".check").style.display = "none";
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = Number(input.value);

  if (!inputVal) {
    messageFunc("Введите число...");
  } else if (inputVal === secretNumber) {
    messageFunc("Вы угадали число!🥳 ");
    document.body.style.background = "green";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("h1").textContent = "Well done";
    gameOver();

    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (inputVal !== secretNumber) {
    if (score > 1) {
      messageFunc(
        secretNumber < inputVal
          ? "Мой число меньше...!"
          : "Мое число больше...!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      messageFunc("Siz yutqazdingiz..!");
      document.querySelector(".score").textContent = 0;
      gameOver();
      document.body.style.background = "red"
    }
  }
  input.value = "";
});

const again = document.querySelector(".again");
again.addEventListener("click", ()=>{
  score = 20
  document.querySelector(".score").textContent = score
  messageFunc("Начинайте угадывать...")
  input.focus()
  input.removeAttribute("disabled", true)
  document.body.style.background = "#222"
  document.querySelector(".check").style.display = "inline-block";
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
})