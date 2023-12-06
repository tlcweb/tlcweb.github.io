// IMAGE SIDE
// Ambil semua elemen thumbnail
const thumbnails = document.querySelectorAll(".thumb");

// Ambil elemen gambar utama
const mainImage = document.getElementById("main");

// Variabel untuk melacak thumbnail yang dipilih
let selectedThumbnail = null;

// Tambahkan event listener untuk setiap thumbnail
thumbnails.forEach((thumbnail) => {
  // Ketika thumbnail diklik
  thumbnail.addEventListener("click", () => {
    // Ganti gambar utama dengan gambar thumbnail yang diklik
    mainImage.src = thumbnail.src;

    // Simpan thumbnail yang dipilih
    selectedThumbnail = thumbnail;
  });

  // Ketika thumbnail dihover
  thumbnail.addEventListener("mouseover", () => {
    // Ganti gambar utama dengan gambar thumbnail yang dihover jika belum ada thumbnail yang dipilih
    if (!selectedThumbnail) {
      mainImage.src = thumbnail.src;
    }
  });

  // Ketika thumbnail diunhover
  thumbnail.addEventListener("mouseout", () => {
    // Kembalikan gambar utama ke gambar thumbnail yang dipilih jika thumbnail telah dipilih, atau ke gambar asli jika belum ada thumbnail yang dipilih
    if (selectedThumbnail) {
      mainImage.src = selectedThumbnail.src;
    } else {
      mainImage.src = mainImageOriginalSrc;
    }
  });
});

// Simpan URL gambar utama asli
const mainImageOriginalSrc = mainImage.src;

// JUMLAH PESANAN
let jumlahPesanan = 0;

function tambahPesanan() {
  jumlahPesanan++;
  updateTampilan();
}

function kurangPesanan() {
  if (jumlahPesanan > 0) {
    jumlahPesanan--;
    updateTampilan();
  }
}

function updateTampilan() {
  document.getElementById("jumlah-pesanan").textContent = jumlahPesanan;
}

// SIZE CHART
const sizeChartParagraph = document.querySelector(".size-chart");
const chart2Paragraph = document.querySelector(".chart-2");
const modal = document.getElementById("modal");
const closeButton = document.querySelectorAll(".close");

sizeChartParagraph.addEventListener("click", () => {
  showModal();
});

chart2Paragraph.addEventListener("click", () => {
  showModal();
});

closeButton.forEach((button) => {
  button.addEventListener("click", () => {
    hideModal();
  });
});

function showModal() {
  modal.style.display = "block";
}

function hideModal() {
  modal.style.display = "none";
}

// SLIDER IMAGE
const slider = document.querySelector(".main2");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const totalSlides = 7; // Ubah jumlah total gambar sesuai dengan jumlah gambar yang Anda miliki

function showSlide(index) {
  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }
  currentIndex = index;
  slider.style.transform = `translateX(-${currentIndex * (700 / totalSlides)}%)`;

  // Mengaktifkan/menonaktifkan tombol "Sebelumnya" dan "Berikutnya" sesuai dengan indeks saat ini
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === totalSlides - 1;
}

prevButton.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

showSlide(currentIndex);

// Tambahkan event listener untuk thumbnail di .colors
const colorThumbnails = document.querySelectorAll(".colors img");

colorThumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    switch (index) {
      case 0:
        showSlide(4); // Ketika .thumb1 di klik, gambar di .img-side akan bergulir menjadi gambar dengan class .main2 (urutan ke-5)
        break;
      case 1:
        showSlide(5); // Ketika .thumb2 di klik, gambar di .img-side akan bergulir menjadi gambar dengan class .main3 (urutan ke-6)
        break;
      case 2:
        showSlide(6); // Ketika .thumb3 di klik, gambar di .img-side akan bergulir menjadi gambar dengan class .main4 (urutan ke-7)
        break;
      default:
      // Kode untuk thumbnail lainnya jika ada
    }
  });
});

// Ambil elemen-elemen yang diperlukan
const container = document.querySelector(".product-page");
const left = document.querySelector(".product-content");
const right = document.querySelector(".product-title-side");

// Menghitung tinggi div kanan
const rightHeight = right.offsetHeight;

// Tambahkan event listener untuk mengubah posisi "sticky" pada div kanan
left.addEventListener("scroll", () => {
  if (left.getBoundingClientRect().bottom <= 0) {
    right.style.position = "sticky";
    right.style.top = "0";
  } else {
    right.style.position = "static";
  }
});

const boxes = document.querySelectorAll(".number");
const colorBoxes = document.querySelectorAll(".colors");
let currentBox = null;
let currentColorBox = null;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Menghapus kelas "gray" dari kotak sebelumnya (jika ada)
    if (currentBox) {
      currentBox.classList.remove("number-hover");
    }

    // Menambahkan kelas "gray" ke kotak yang di klik
    box.classList.add("number-hover");

    // Mengatur kotak yang di klik sebagai kotak saat ini
    currentBox = box;
  });
});

colorBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Menghapus kelas "gray" dari kotak warna sebelumnya (jika ada)
    if (currentColorBox) {
      currentColorBox.classList.remove("number-hover");
    }

    // Menambahkan kelas "gray" ke kotak warna yang di klik
    box.classList.add("number-hover");

    // Mengatur kotak warna yang di klik sebagai kotak warna saat ini
    currentColorBox = box;
  });
});

// Ambil elemen span
const spanID = document.querySelector(".j2 span");

// Fungsi untuk memeriksa lebar layar dan menambahkan ID
function periksaLebarLayar() {
  if (window.innerWidth < 500) {
    spanID.setAttribute("id", "jumlah-pesanan"); // Tambahkan ID ke elemen span
  } else {
    spanID.removeAttribute("id"); // Hapus ID dari elemen span
  }
}

// Tambahkan event listener ke perubahan ukuran layar
window.addEventListener("resize", periksaLebarLayar);

// Panggil fungsi saat halaman dimuat untuk mengatur ID awal
periksaLebarLayar();
