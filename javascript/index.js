console.clear();

const bookmarkButton = document.querySelector(
  '[data-js="card1__button-answer"]'
);
const answerButton1 = document.querySelector(
  '[data-js="card2__button-answer"]'
);

bookmarkButton.addEventListener("click", (event) => {
  event.target.classList.toggle("bookmark--active");
});
