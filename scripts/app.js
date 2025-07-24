console.log("E-Commerce Website Loaded");
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
const productGrid = document.getElementById("productGrid");

async function loadProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <h3>${product.title.slice(0, 40)}...</h3>
        <p>₹ ${product.price.toFixed(2)}</p>
        <button onclick="addToCart('${product.title}')">Add to Cart</button>
      `;

      productGrid.appendChild(card);
    });
  } catch (error) {
    console.error("Failed to load products:", error);
    productGrid.innerHTML = `<p style="color:red;">Error loading products.</p>`;
  }
}

function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

loadProducts();
