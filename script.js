const CART_CONTAINER = document.querySelector(".cart-container");
console.log(CART_CONTAINER);

let CART = [
  {
    id: 1,
    name: "Television",
    brand: "LG",
    price: 5620,
  },
  {
    id: 44,
    name: "Sneakers",
    brand: "Nike",
    price: 80,
  },
  {
    id: 11,
    name: "Kettle",
    brand: "Sharp",
    price: 70,
  },
  {
    id: 33,
    name: "Iphone 16",
    brand: "Apple",
    price: 999,
  },
  {
    id: 19,
    name: "Camera",
    brand: "Sony",
    price: 2000,
  },
];

function displayCart(params) {
  let cartElement = [];

  CART.map((eachCartItem) => {
    CART_CONTAINER.innerHTML += `
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
          <p class="item-price">${eachCartItem.price}</p>

          <!-- Delete item -->
          <button class="delete-btn">
            Delete
          </button>

          <!-- Product counter -->
          <div class="product-counter">
          
            <!-- Minus button -->
            <button class="minus-btn">
              -
            </button>

            <!-- Item Quantity -->
            <p class="item-quantity"></p>

            <!-- Add item Button -->
            <button class="add-btn">
              +
            </button>
          </div>
          <!-- Total Price  -->

          <p class="total-price"></p>
        </div>
      </div>
  `;
  });
  console.log(CART);
}

displayCart();
