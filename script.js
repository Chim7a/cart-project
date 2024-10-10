const CART_CONTAINER = document.querySelector(".cart-container");
const decreaseBtn = document.querySelector(".minus-btn");
const increaseBtn = document.querySelector(".add-btn");
const totalPrice = document.querySelector(".total-price");

let CART = [
  {
    id: 1,
    name: "Television",
    brand: "LG",
    price: 450,
    quantity: 1,
    likes: false,
  },
  {
    id: 44,
    name: "Sneakers",
    brand: "Nike",
    price: 200,
    quantity: 1,
    likes: false,
  },
  {
    id: 11,
    name: "Kettle",
    brand: "Sharp",
    price: 60,
    quantity: 1,
    likes: false,
  },
  {
    id: 33,
    name: "Iphone 16",
    brand: "Apple",
    price: 1299,
    quantity: 1,
    likes: false,
  },
  {
    id: 19,
    name: "Camera",
    brand: "Sony",
    price: 15000,
    quantity: 1,
    likes: false,
  },
];

function displayCart() {
  CART_CONTAINER.innerHTML = CART.map((eachCartItem) => {
    return `
  <div class="cart-item">
        <!-- Product image and name -->
        <div class="product">
    <button onclick="likeProduct(${eachCartItem.id})" class="like-btn">
      <svg
      class=${eachCartItem.likes === true ? "like-svg-red" : "like-svg"}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-heart"
      >
        <path
          d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
        />
      </svg>
    </button>
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
          <button onclick="deleteItem(${eachCartItem.id})" class="delete-btn">
            Delete
          </button>

          <!-- Product counter -->
          <div class="product-counter">
          
            <!-- Minus button -->
            <button onclick="decreaseQuantity(${
              eachCartItem.id
            })" class="minus-btn">
              -
            </button>

            <!-- Item Quantity -->
            <p class="item-quantity">${eachCartItem.quantity}</p>

            <!-- Add item Button -->
            <button onclick="increaseQuantity(${
              eachCartItem.id
            })"  class="add-btn">
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

function deleteItem(id) {
  let updatedCart = [];
  for (let i = 0; i < CART.length; i++) {
    if (CART[i].id !== id) {
      updatedCart.push(CART[i]);
    }
  }

  CART = updatedCart;
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

function likeProduct(id) {
  CART.map((cartItem) => {
    if (cartItem.id === id) {
      cartItem.likes == true
        ? (cartItem.likes = false)
        : (cartItem.likes = true);
    }
  });
  displayCart();
}
