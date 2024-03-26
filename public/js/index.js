const hideCart = () => {
  const toggleCart = document.querySelector('.toggleCart');
  toggleCart.classList.remove('active');
};

const successPurchase = () => {
  // Save the updated cart items back to local storage
  localStorage.removeItem('cartItems');

  // Display a confirmation message
  alert('Thank you for purchasing!');
};

const showCart = () => {
  const toggleCart = document.querySelector('.toggleCart');
  toggleCart.classList.add('active');

  // Retrieve existing cart items from local storage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  const leftSection = document.querySelector('.leftSection');
  leftSection.innerHTML = '';

  if (cartItems.length > 0) {
    cartItems.forEach((item, index) => {
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('itemContainer');

      const number = document.createElement('h1');
      number.innerHTML = index + 1;

      const heading = document.createElement('h1');
      heading.innerHTML = item.name;

      const price = document.createElement('h2');
      price.classList.add('price');
      price.innerHTML = 'NZ $' + item.price;

      itemContainer.appendChild(number);
      itemContainer.appendChild(heading);
      itemContainer.appendChild(price);

      leftSection.appendChild(itemContainer);
    });
  }
};

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const cartCountElement = document.querySelector('.number');
if (cartCountElement) {
  cartCountElement.innerHTML = cartItems.length;
}
