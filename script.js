let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

// Display cart
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

// Razorpay Test-Mode Payment Integration
function payNow() {
  if (total === 0) {
    alert("Cart is empty!");
    return;
  }

  var options = {
    key: "rzp_test_xxxxxxxxx", // Razorpay TEST key (placeholder)
    amount: total * 100,      // Amount in paise
    currency: "INR",
    name: "GreenFashion",
    description: "Test Mode Payment",

    handler: function (response) {
      alert("Payment flow completed (Test Mode)");
      console.log("Payment ID:", response.razorpay_payment_id);

      cart = [];
      total = 0;
      renderCart();
    },

    theme: {
      color: "#2e7d32"
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}







