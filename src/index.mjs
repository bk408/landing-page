import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
  const products = document.getElementById("products");

  const logInBtn = document.getElementById("login-button");
  const logInSection = document.getElementById("login-section");

  logInBtn.addEventListener("click", () => {
    window.location.hash = "#/login";
    renderPage();
  });

  function renderPage() {
    const hash = window.location.hash;

    if (hash === "#/login") {
      logInSection.style.display = "block";
    } else {
      logInSection.style.display = "none";
    }
  }

  window.addEventListener("load", renderPage);
  window.addEventListener("hashchange", renderPage);

  async function fetchProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);

      // render the product

      data.forEach((item) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-details");

        productDiv.innerHTML = `
       <h3> ${item.title} </h3>
       <img src="${item.image}" alt="${item.title}" />
      `;

        products.appendChild(productDiv);
      });
    } catch (error) {
      console.log(error);
    }
  }

  fetchProducts();
});
