function addToCart(type, id, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const product = {
    id,
    name: `${type === 'women' ? "Women's" : "Men's"} Dress ${id}`,
    price,
    image: `images/${type}/dress${id}.jpg`
  };
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

function buyNow(type, id) {
  const productData = {
    women: {
      1: { name: "Baggy Jeans", image: "images/women/baggy jean.webp", price: 999 },
      2: { name: "Blue Lace Gown", image: "images/women/blue lace gown.webp", price: 899 },
      3: { name: "Bridal Gown", image: "images/women/bridal gown.webp", price: 9999 },
      4: { name: "Cocktail Dress", image: "images/women/cocktail dress.webp", price: 1550 },
      5: { name: "Dazzle Evening Dress", image: "images/women/dazzle evening dress.webp", price: 1729 },
      6: { name: "Designer Party Wear", image: "images/women/designer party wear.webp", price: 2899 },
      7: { name: "Embroidered Ethnic Dress", image: "images/women/embroidered ethinic dress.webp", price: 5999 },
      8: { name: "Flared Ethnic Dress", image: "images/women/flared ethinic dress.webp", price: 1859 },
      9: { name: "Half Saree", image: "images/women/half saree.webp", price: 2999 },
      10: { name: "Light Pink Party Wear", image: "images/women/light pink party wear.webp", price: 1529 },
      11: { name: "Midnight Blue", image: "images/women/midnight blue.webp", price: 1119 },
      12: { name: "Multi Color Dress", image: "images/women/miss chase womens multi colour.webp", price: 899 },
      13: { name: "Neck Crop", image: "images/women/neck crop.webp", price: 399 },
      14: { name: "Red Bridal Gown", image: "images/women/red bridal gown.jpg", price: 1999 },
      15: { name: "Stylish Ravishing", image: "images/women/stylish ravishing.webp", price: 1239 },
      16: { name: "Short Gown", image: "images/women/short gown.jpg", price: 759 },
      17: { name: "Traditional Saree", image: "images/women/traditional saree.webp", price: 1899 },
      18: { name: "Western Saree", image: "images/women/western saree.webp", price: 1599 }
    },
    men: {
      1: { name: "blue slim fit jean", image: "images/women/men/blue slim fit jean.webp", price: 799 },
      2: { name: "rigid baggy fit denim jeans", image: "images/women/men/rigid baggy fit denim jeans.webp", price: 1199 },
      3: { name: "shorts night suit set", image: "images/women/men/shorts night suit set.webp", price: 899 },
      4: { name: "white night suit set", image: "images/women/men/white night suit set.webp", price: 1050 },
      5: { name: "Black suit", image: "images/women/men/black suit.jpg", price: 1929 },
      6: { name: "Blue baggy jean", image: "images/women/men/blue baggy jean.jpg", price: 1089 },
      7: { name: "Embroidered Dress", image: "images/women/men/embroidered dress.webp", price: 3999 },
      8: { name: "Designer shirts ", image: "images/women/men/designer shirts.jpg", price: 1959 },
      9: { name: "Grey suit", image: "images/women/men/grey suit.jpg", price: 1899 },
      10: { name: "Indian ethinic Wear", image: "images/women/men/indian ethinic wear.jpg", price: 1529 },
      11: { name: "Korean style", image: "images/women/men/korean style wear.jpg", price: 1119 },
      12: { name: "Men formal shirts", image: "images/women/men/men formal shirts.jpg", price: 999 },
      13: { name: "Nobera men t-shirt", image: "images/women/men/nobera men t-shirt.jpg", price: 469 },
      14: { name: "Pure cotton shirt", image: "images/women/men/pure cotton shirt.jpg", price: 699 },
      15: { name: "Short set", image: "images/women/men/short set.jpg", price: 739 },
      16: { name: "Shorts", image: "images/women/men/shorts.jpg", price: 299 },
      17: { name: "Solid color long", image: "images/women/men/solid color long.jpg", price: 799 },
      18: { name: "Solid men T-shirt", image: "images/women/men/solid men T-shirt.jpg", price: 599 },
      19: { name: "White shirt", image: "images/women/men/white shirt.jpg", price: 999 },
      20: { name: "White T-shirt", image: "images/women/men/white T-shirt.jpg", price: 499 },
    }
  };

  const productInfo = productData[type][id];
  if (!productInfo) {
    alert("Product not found!");
    return;
  }

  let quantity = prompt("Enter quantity:", "1");
  quantity = parseInt(quantity);
  if (!quantity || quantity <= 0) {
    alert("Please enter a valid quantity.");
    return;
  }

  const total = productInfo.price * quantity;
  const confirmPurchase = confirm(
    `You are buying:\n\n${productInfo.name}\nQuantity: ${quantity}\nPrice per item: Rs. ${productInfo.price}\nTotal: Rs. ${total}\n\nProceed to payment?`
  );

  if (!confirmPurchase) return;

  const product = {
    id,
    name: productInfo.name,
    price: productInfo.price,
    quantity: quantity,
    image: `images/${type}/dress${id}.jpg`
  };

  localStorage.setItem("checkout", JSON.stringify(product));
  localStorage.removeItem("cart");
  window.location.href = "payment.html";
}
cart.forEach((item, index) => {
  const row = document.createElement("div");
  row.className = "cart-item";

  row.innerHTML = `
    <img src="${item.image}" width="100" height="130" />
    <div class="details">
      <h3>${item.name || "No Name"}</h3>
      <p>Price: ₹${item.price || "N/A"}</p>
      <input type="number" id="qty-${index}" min="1" value="1" />
      <input type="checkbox" class="select-item" data-index="${index}" />
    </div>
  `;

  cartContainer.appendChild(row);
});
