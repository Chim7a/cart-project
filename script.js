const CART_CONTAINER = document.querySelector(".cart-container");
const decreaseBtn = document.querySelector(".minus-btn");
const increaseBtn = document.querySelector(".add-btn");
// const itemQuantity = document.querySelector(".item-quantity");
const totalPrice = document.querySelector(".total-price");

let CART = [
  {
    id: 1,
    name: "Television",
    brand: "LG",
    price: 450,
    quantity: 1,
  },
  {
    id: 44,
    name: "Sneakers",
    brand: "Nike",
    price: 200,
    quantity: 1,
  },
  {
    id: 11,
    name: "Kettle",
    brand: "Sharp",
    price: 60,
    quantity: 1,
  },
  {
    id: 33,
    name: "Iphone 16",
    brand: "Apple",
    price: 1299,
    quantity: 1,
  },
  {
    id: 19,
    name: "Camera",
    brand: "Sony",
    price: 15000,
    quantity: 1,
  },
];

function displayCart(params) {
  CART_CONTAINER.innerHTML = CART.map((eachCartItem) => {
    return `
  <div class="cart-item">
        <!-- Product image and name -->
        <div class="product">
          <img
            src="https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width="70px"
            height="70px"
          />
          <div class="product-name">
            <h3>${eachCartItem.name}</h3>
            <p>${eachCartItem.brand}</p>
          </div>
        </div>

        <!-- Product price and Quantity -->

        <div class="product-price">
          <!-- Price of item -->
          <p class="item-price">$${eachCartItem.price}</p>

          <!-- Delete item -->
          <button class="delete-btn">
            Delete
          </button>

          <!-- Product counter -->
          <div class="product-counter">
          
            <!-- Minus button -->
            <button onclick="decreaseQuantity(${eachCartItem.id})" class="minus-btn">
              -
            </button>

            <!-- Item Quantity -->
            <p class="item-quantity">${eachCartItem.quantity}</p>

            <!-- Add item Button -->
            <button onclick="increaseQuantity(${eachCartItem.id})"  class="add-btn">
              +
            </button>
          </div>
        </div>
      </div>
  `;
  }).join("");
  totalCost();
}

displayCart();

function increaseQuantity(id) {
  let itemCounter = 1;

  CART.map((cartItem) => {
    if (cartItem.id === id) {
      itemCounter += cartItem.quantity++;
    }
  });
  displayCart();
}

function decreaseQuantity(id) {
  let itemCounter = 1;

  CART.map((cartItem) => {
    if (cartItem.id === id && cartItem.quantity > 1) {
      itemCounter += cartItem.quantity--;
    }
  });
  displayCart();
}

function totalCost() {
  let total = 0;
  for (let index = 0; index < CART.length; index++) {
    total += CART[index].price * CART[index].quantity;
  }
  return (totalPrice.innerHTML = `$${total}`);
}

totalCost();
