'use strict';

function randomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  const guess = document.querySelector(".guess");
  const theNumber = document.querySelector(".number");
  const title = document.querySelector(".title");
  const bg_green = document.querySelector("body");
  const highscore = document.querySelector(".highscore");
  const score = document.querySelector(".score");
  const message = document.querySelector(".message");
  const again = document.querySelector(".again");
  const check = document.querySelector(".check");

  let randomNum = randomNumber();
  console.log(randomNum);

  guess.addEventListener("input", function() {
    if (guess.value.trim() !== "") {
      check.disabled = false;
    } else {
      check.disabled = true;
    }
  });

  again.addEventListener("click", function() {
    score.innerHTML = "20";
    message.innerHTML = "Start guessing...";
    bg_green.style.backgroundColor = '#222';
    title.innerHTML = "Guess My Number!";
    theNumber.innerHTML = "?";
    randomNum = randomNumber();
    console.log(randomNum);
    guess.value = "";
    check.disabled = true;
    again.disabled = true;
  });

  check.addEventListener("click", function() {
    if (guess.value == randomNum) {
      theNumber.innerHTML = randomNum;
      title.innerHTML = "You Win";
      message.innerHTML = "Congratulations! You Win!";
      bg_green.style.backgroundColor = 'green';

      if (Number(highscore.innerHTML) < Number(score.innerHTML)) {
        highscore.innerHTML = score.innerHTML;
      }
      again.disabled = false;
      check.disabled = true;
    } else {
      score.innerHTML = Number(score.innerHTML) - 1;
      check.disabled = true;
      again.disabled = true;
      
      if (guess.value < randomNum) {
        message.innerHTML = "Your Number Is Low";
      } else {
        message.innerHTML = "Your Number Is High";
      }

      if (Number(score.innerHTML) <= 0) {
        message.innerHTML = "You Failed";
        title.innerHTML = "You Failed";
        bg_green.style.backgroundColor = 'red';
        again.disabled = false;
        check.disabled = true;
      }
    }
  });



