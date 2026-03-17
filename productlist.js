const listContainer = document.querySelector(".productlist");
const heading = document.querySelector(".tekst");
let allProducts = [];

function getProducts() {
  fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((data) => {
      allProducts = data.products;
      showProducts(allProducts);
    });
}

function showProducts(products) {
  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `
      
    
       <article class="product">
              
        <img src="${product.thumbnail}">
        
         <h2>${product.title}</h2>
        <p class="price">${product.price},-</p>
        <p>${product.description}</p>
      
     
      </article>
    `;
  });
}
console.log();
getProducts();
