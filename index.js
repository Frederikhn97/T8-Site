// const params = new URLSearchParams(window.location.search);
// const category = params.get("category");

// const productContainer = document.querySelector(".product-gallery");

// const productURL = `https://dummyjson.com/products/category/${category}`;

// function getProducts() {
//   fetch(productURL)
//     .then((res) => res.json())
//     .then((data) => showProducts(data.products));
// }

// function showProducts(products) {
//   productContainer.innerHTML = "";

//   products.forEach((product) => {
//     productContainer.innerHTML += `
//   <article class="product">
//     <img src="${product.thumbnail}" alt="${product.title}">
//     <h3 class="product-title">${product.title}</h3>
//     <p class="brand">${product.brand}</p>
//     <p class="price">${product.price} $</p>
//     <button class="mybutton">KØB NU</button>
//   </article>
// `;
//   });
// }

// getProducts();

///////////////////////////////////////////////////////

////////////////////////////////////////////////<

// const container = document.querySelector(".productlist");
// const fetchUrl = "https://dummyjson.com/products/category";

// function getCategories() {
//   fetch(fetchUrl).then((res) => res.json().then((categories) => showCategories(categories)));
// }
// Sebastian;
// function showCategories(categories) {
//   categories.forEach((category) => {
//     listContainer.innerHTML += `

// `;
//   });
// }

// getCategories();
