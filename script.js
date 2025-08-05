// Sample product data
const products = [
  {
    id: 1,
    title: "Minimalist Watch",
    price: 129.99,
    image: "watch",
  },
  {
    id: 2,
    title: "Essential Tote Bag",
    price: 79.99,
    image: "tote.jpg",
  },
  {
    id: 3,
    title: "Ceramic Mug",
    price: 24.99,
    image: "mug.jpg",
  },
  {
    id: 4,
    title: "Linen Throw Pillow",
    price: 39.99,
    image: "pillow.jpg",
  },
];

// Cart functionality
let cartCount = 0;
const cartCountElement = document.querySelector(".cart-count");

function updateCartCount() {
  cartCountElement.textContent = cartCount;
}

// Populate featured products
const featuredProductsContainer = document.getElementById("featured-products");

products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.classList.add("product");

  productElement.innerHTML = `
      <div class="product-img"><img src=${product.image}></div>
      <h3 class="product-title">${product.title}</h3>
      <p class="product-price">$${product.price}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;

  featuredProductsContainer.appendChild(productElement);
});

// Add event listeners to Add to Cart buttons
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    cartCount++;
    updateCartCount();

    // Animation feedback
    this.textContent = "Added ✓";
    setTimeout(() => {
      this.textContent = "Add to Cart";
    }, 1500);
  });
});

// Newsletter form submission
const newsletterForm = document.querySelector(".email-form");
newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector(".email-input").value;

  if (email && email.includes("@")) {
    alert("Thank you for subscribing!");
    this.reset();
  } else {
    alert("Please enter a valid email address.");
  }
});

// Smooth scroll for navigation
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // Would typically scroll to the section
    console.log("Navigating to:", this.textContent);
  });
});

document.querySelector(".btn").addEventListener("click", function () {
  console.log("Test");
  window.location.href = "successPage.html";
});
