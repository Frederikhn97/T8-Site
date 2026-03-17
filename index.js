const burgerBtn = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");

burgerBtn.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
});

document.getElementById("darkmode-toggle").addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("dark");
});
