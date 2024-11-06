let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    navbar.classList.add("hidden");
  } else {
    // Scroll ke atas
    navbar.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Untuk menghindari angka negatif
});

const button = document.querySelector(".button");
const navbarhp = document.querySelector(".navbar-side");

button.addEventListener("click", () => {
  navbarhp.classList.toggle("active"); // Toggle kelas "active"
});
