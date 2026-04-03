// ============================================
//  ShopEasy — js/script.js
//  File location: js/script.js
// ============================================

console.log("ShopEasy Loaded ✅");

// ── SEARCH ──────────────────────────────────
function handleSearch() {
  var input = document.getElementById("searchInput");
  if (!input) return;
  var query = input.value.trim();
  if (query === "") {
    alert("Please enter a search term.");
    return;
  }
  alert('Searching for: "' + query + '"');
}

// Search on Enter key
document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("searchInput");
  if (input) {
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") handleSearch();
    });
  }
});

// ── CART ────────────────────────────────────
function addToCart() {
  var size = document.getElementById("sizeSelect");
  var qty  = document.getElementById("qtyInput");

  if (size && size.value === "") {
    alert("Please select a size first.");
    return;
  }

  var selectedSize = size ? size.value : "N/A";
  var quantity     = qty  ? qty.value  : 1;

  alert("✅ Added to cart!\nSize: " + selectedSize + "\nQuantity: " + quantity);
}

// ── BUY NOW ─────────────────────────────────
function buyNow() {
  var size = document.getElementById("sizeSelect");
  if (size && size.value === "") {
    alert("Please select a size first.");
    return;
  }
  alert("Redirecting to checkout...");
}

// ── QUANTITY ─────────────────────────────────
function changeQty(delta) {
  var input = document.getElementById("qtyInput");
  if (!input) return;
  var val = parseInt(input.value) + delta;
  if (val < 1)  val = 1;
  if (val > 99) val = 99;
  input.value = val;
}

// ── SORT PRODUCTS ───────────────────────────
function sortProducts(value) {
  console.log("Sorting by:", value);
  // In a real project this would re-order the product cards
  if (value) {
    alert("Sorted by: " + value);
  }
}

// ── PAGINATION ──────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  var pageBtns = document.querySelectorAll(".page-btn");
  pageBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      pageBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
