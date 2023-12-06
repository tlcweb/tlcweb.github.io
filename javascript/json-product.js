// Data produk dalam bentuk JSON
const products = [
  // KATEGORY SAFETY
  {
    name: "LAVIO AXEL",
    image: "../img-product/axel/1.jpg",
    description: "Pria - Safety Boots",
    lazy: "true",
    price: {
      current: "RP 220.000",
      original: "300.000",
    },
    link: "../product/axel.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO GIBSON",
    image: "../img-product/gibson/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/gibson.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO GALEN",
    image: "../img-product/galen/1.jpg",
    description: "Pria - Safety Boots",

    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/galen.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO PASCAL",
    image: "../img-product/pascal/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/pascal.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO ELEKTRA",
    image: "../img-product/elektra/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/elektra.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO GENEVA HIGH",
    image: "../img-product/geneva-high/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/geneva-high.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO GENEVA LOW",
    image: "../img-product/geneva-low/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/geneva-low.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO LEACHER",
    image: "../img-product/leacher/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/leacher.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO FAIRY",
    image: "../img-product/fairy/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/fairy.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO BIRDIE",
    image: "../img-product/fairy/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/birdie.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO E95",
    image: "../img-product/e95/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/e95.html",
    category: "safety", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  //END SAFETY

  // SNEAKERS
  {
    name: "LAVIO E95",
    image: "../img-product/e95/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/e95.html",
    category: "sneakers", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO E95",
    image: "../img-product/e95/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/e95.html",
    category: "sneakers", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO E95",
    image: "../img-product/e95/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/e95.html",
    category: "sneakers", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO E95",
    image: "../img-product/e95/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/e95.html",
    category: "sneakers", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  // END SNEAKER

  // CASUAL
  {
    name: "LAVIO E95",
    image: "../img-product/e95/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/e95.html",
    category: "casual", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO E95",
    image: "../img-product/e95/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/e95.html",
    category: "casual", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO E95",
    image: "../img-product/e95/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/e95.html",
    category: "casual", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  {
    name: "LAVIO E95",
    image: "../img-product/e95/1.jpg",
    description: "Pria - Safety Boots",
    price: {
      current: "RP 229.000",
      original: "320.000",
    },
    link: "../product/e95.html",
    category: "casual", // Kategori produk
    addedDate: new Date("2023-01-15"),
  },
  // END CASUAL
];
