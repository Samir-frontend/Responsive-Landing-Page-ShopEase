// ===== HAMBURGER MENU =====
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Close menu when nav link clicked (mobile)
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

// ===== SEARCH =====
function searchProduct() {
  const query = document.getElementById("searchInput").value.trim();
  const result = document.getElementById("searchResult");
  if (query === "") {
    result.style.color = "red";
    result.innerText = "⚠ Please enter a product name to search.";
  } else {
    result.style.color = "#222";
    result.innerText = `🔍 Showing results for: "${query}"`;
  }
}

// Enter key for search
document.getElementById("searchInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") searchProduct();
});

// ===== BUY NOW BUTTON =====
document.querySelectorAll(".buy-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    const productName = this.closest(".product").querySelector("h3").innerText;
    const price = this.closest(".product").querySelector(".price").innerText;

    // Change button text temporarily
    this.innerText = "✅ Added!";
    this.style.background = "#28a745";
    const self = this;
    setTimeout(() => {
      self.innerText = "Buy Now";
      self.style.background = "#007bff";
    }, 1500);

    // Show alert
    alert(`🛒 "${productName}" (${price}) added to cart!`);
  });
});

// ===== SMOOTH SCROLL for nav links =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') {
      e.preventDefault();
    }
  });
});

// ===== SCROLL TO TOP on logo click =====
document.querySelector('.logo').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CONTACT FORM =====
function submitForm() {
  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const message = document.getElementById("userMessage").value.trim();
  const formMsg = document.getElementById("formMsg");

  if (name === "" || email === "" || message === "") {
    formMsg.style.color = "red";
    formMsg.innerText = "⚠ Please fill all fields!";
    return;
  }

  formMsg.style.color = "#28a745";
  formMsg.innerText = `✅ Thank you ${name}! Your message has been sent.`;

  // Clear form
  document.getElementById("userName").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userMessage").value = "";
}