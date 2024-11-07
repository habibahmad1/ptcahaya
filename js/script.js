let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
const up = document.querySelector(".button-up");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const documentHeight = document.documentElement.scrollHeight; // Tinggi dokumen
  const threshold = documentHeight * 0.7; // 80% dari tinggi dokumen

  // Logika untuk navbar
  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah
    navbar.classList.add("hidden");
  } else {
    // Scroll ke atas
    navbar.classList.remove("hidden");
  }

  // Logika untuk tombol scroll to top
  if (scrollTop > threshold) {
    up.classList.add("show"); // Tampilkan tombol
  } else {
    up.classList.remove("show"); // Sembunyikan tombol
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Untuk menghindari angka negatif
});

const button = document.querySelector(".button");
const navbarhp = document.querySelector(".navbar-side");

button.addEventListener("click", () => {
  navbarhp.classList.toggle("active"); // Toggle kelas "active"
});

// Menangani klik pada tombol scroll to top
up.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll ke atas dengan halus
};
