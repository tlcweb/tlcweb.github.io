// Fungsi untuk mengambil konten header
function fetchHeader() {
  fetch("../foothead/header2.html") // Ganti dengan path yang sesuai
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // Menyisipkan konten header ke dalam elemen dengan id "header-container"
      document.getElementById("header-container").innerHTML = data;

      // Kode JavaScript untuk mengontrol toggle menu
      const menuToggle = document.querySelector(".menu-toggle input");
      const navbar = document.querySelector(".navbar ul");

      menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("geser");
      });

      // Setelah header dimuat, panggil fungsi untuk memuat footer
      fetchFooter();
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation:", error);
    });
}

// Fungsi untuk mengambil konten footer
function fetchFooter() {
  fetch("../foothead/footer2.html") // Ganti dengan path yang sesuai
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // Menyisipkan konten footer ke dalam elemen dengan id "footer-container"
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation:", error);
    });
}

// Panggil fungsi fetchHeader untuk memuat header saat halaman dimuat
window.onload = function () {
  fetchHeader();
};
