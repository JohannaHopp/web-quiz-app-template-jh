console.clear();

const bookmarkButton = document.querySelector('[data-js="card__bookmark"]');
const answerButton = document.querySelector('[data-js="card1__button-answer"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');

bookmarkButton.addEventListener("click", (event) => {
  event.target.classList.toggle("bookmark--active");
});

answerButton.addEventListener("click", (event) => {
  cardAnswer.classList.toggle("card__answer--active");
  if (cardAnswer.classList.contains("card-answer")) {
    event.target.textContent = "hide answer";
  } else {
    event.target.textContent = "show answer";
  }
});
