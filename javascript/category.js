document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-img");

  const lazyLoad = function () {
    lazyImages.forEach(function (img) {
      if (img.getBoundingClientRect().top < window.innerHeight && img.dataset.src && JSON.parse(img.dataset.lazy)) {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        img.dataset.lazy = false; // Atur atribut lazy menjadi false setelah dimuat
      }
    });
  };

  lazyLoad();

  window.addEventListener("scroll", lazyLoad);
});

// Fungsi untuk menampilkan produk berdasarkan kategori
function showProducts(category) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Bersihkan konten sebelum menampilkan produk baru

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts = products.filter((product) => {
    return product.category === category;
  });

  // Tampilkan produk yang telah difilter
  filteredProducts.forEach((product) => {
    productList.innerHTML += `
  <a href="${product.link}">
    <img src="${product.image}" alt="" />
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <h4>${product.price.current} <span class="price-1">${product.price.original}</span></h4>
  </a>
`;
  });
}

// Tambahkan event listener untuk setiap elemen kategori
document.getElementById("safety").addEventListener("click", function () {
  showProducts("safety");
});

document.getElementById("sneakers").addEventListener("click", function () {
  showProducts("sneakers");
});

document.getElementById("casual").addEventListener("click", function () {
  showProducts("casual");
});

// Tampilkan produk kategori 'Safety' sebagai konten default
showProducts("safety");
