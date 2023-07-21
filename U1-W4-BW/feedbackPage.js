const stars = document.querySelectorAll(".stars .star");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.remove("disabled") : star.classList.add("disabled");
    });
  });
});
