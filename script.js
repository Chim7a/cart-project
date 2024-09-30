const itemQuantity = document.getElementById("item-quantity");
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addItem);
const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", minusItem);
let items = 1;

// Add quantity of items
function addItem() {
  if (addBtn) {
    items++;
    itemQuantity.innerText = `${items}`;
  }
}
addItem();

// Minus quantity of items

function minusItem() {
  if (items > 0) {
    items--;
    itemQuantity.innerText = `${items}`;
  }
}

minusItem();

// DOMContentLoaded

// if (document.readyState === "loading") {
//   document.addEventListener("DOMContentLoaded", addItem);
// } else {
//   addItem();
// }
