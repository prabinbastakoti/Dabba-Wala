const items = [
  {
    img: '/1.jpg',
    title: 'Kiwi Classic Box',
    main: 'Kiwi Burger',
    side: 'Kumara Fries aith Aioli',
    snack: 'Lolly Cake',
    drink: 'Bottled Water',
    price: 'NZ$12.99',
  },
  {
    img: '/2.jpg',
    title: 'Seafood Feast Lunch Box',
    main: 'Pāua Fritters',
    side: 'Garden Salad with Balsamic Dressing',
    snack: 'Whitebait Fritters',
    drink: 'Sparkling Mineral Water',
    price: 'NZ$15.99',
  },
  {
    img: '/3.jpg',
    title: 'Vegetarian Delight Lunch Box',
    main: 'Vegetarian Hangi',
    side: 'Quinoa Salad with Roasted Vegetables',
    snack: 'Vegetable Spring Rolls with Sweet Chili Sauce',
    drink: 'Freshly Squeezed Orange Juice',
    price: 'NZ$11.99',
  },
  {
    img: '/4.jpg',
    title: 'Sweet Treat Lunch Box',
    main: 'Hokey Pokey Ice Cream',
    side: 'Kiwi Pavlova Roll',
    snack: 'Chocolate Fish',
    drink: 'Iced Green Tea',
    price: 'NZ$10.99',
  },
  {
    img: '/5.jpg',
    title: 'Gourmet Lamb Lunch Box',
    main: 'Mānuka Honey Glazed Lamb Rack with Mint Sauce',
    side: 'Roasted Seasonal Vegetables',
    snack: 'Bluff Oysters',
    drink: 'Sparkling Apple Cider',
    price: 'NZ$17.99',
  },
  {
    img: '/6.jpg',
    title: 'Healthy Green Lunch Box',
    main: 'Grilled Chicken Salad',
    side: 'Edamame Salad',
    snack: 'Fresh Fruit Salad',
    drink: 'Coconut Water',
    price: 'NZ$13.99',
  },
  {
    img: '/7.jpg',
    title: 'Pacific Rim Lunch Box',
    main: 'Teriyaki Salmon with Steamed Rice',
    side: 'Seaweed Salad',
    snack: 'Sushi Rolls (assorted)',
    drink: 'Green Tea',
    price: 'NZ$14.99',
  },
  {
    img: '/8.jpg',
    title: 'Classic Kiwi Pie Lunch Box',
    main: 'Steak and Cheese Pie',
    side: 'Classic Potato Salad',
    snack: 'Kiwi Onion Dip with Vegetable Sticks',
    drink: 'Lemon Lime Bitters',
    price: 'NZ$9.99',
  },
  {
    img: '/9.jpg',
    title: 'Mexican Fiesta Lunch Box',
    main: 'Chicken Quesadilla',
    side: 'Mexican Street Corn Salad',
    snack: 'Tortilla Chips with Salsa and Guacamole',
    drink: 'Jarritos Soda (ass)',
    price: 'NZ$13.99',
  },
  {
    img: '/10.jpg',
    title: 'Italian Pasta Lunch Box',
    main: 'Spaghetti Carbonara',
    side: 'Caprese Salad',
    snack: 'Garlic Breadsticks',
    drink: 'Chianti Wine',
    price: 'NZ$16.99',
  },
];

const menuContainer = document.querySelector('.Menucontainer');

items.forEach((thing, index) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const image = document.createElement('img');
  image.src = thing.img;

  const h2 = document.createElement('h2');
  h2.innerHTML = thing.title;

  const p1 = document.createElement('p');
  p1.innerHTML = 'Main: ' + thing.main;

  const p2 = document.createElement('p');
  p2.innerHTML = 'Side: ' + thing.side;

  const p3 = document.createElement('p');
  p3.innerHTML = 'Snack: ' + thing.snack;

  const p4 = document.createElement('p');
  p4.innerHTML = 'Drink: ' + thing.drink;

  const p5 = document.createElement('p');
  p5.classList.add('price');
  p5.innerHTML = thing.price;

  const button1 = document.createElement('button');
  button1.classList.add('btn');
  button1.classList.add('add-to-cart');
  button1.innerHTML = 'Add to Cart';

  const button2 = document.createElement('button');
  button2.classList.add('btn');
  button2.innerHTML = 'Buy Now';

  menuItem.appendChild(image);
  menuItem.appendChild(h2);
  menuItem.appendChild(p1);
  menuItem.appendChild(p2);
  menuItem.appendChild(p3);
  menuItem.appendChild(p4);
  menuItem.appendChild(p5);
  menuItem.appendChild(button1);
  menuItem.appendChild(button2);

  menuContainer.appendChild(menuItem);
});

// Retrieve existing cart items from local storage or initialize an empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Update the cart count displayed in the header
updateCartCount(cartItems.length);

// Function to handle adding items to the cart
function addToCart(itemName, itemPrice) {
  // Retrieve existing cart items from local storage or initialize an empty array
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the new item to the cart
  cartItems.push({ name: itemName, price: itemPrice });

  // Save the updated cart items back to local storage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update the cart count displayed in the header
  updateCartCount(cartItems.length);

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

  // Display a confirmation message
  alert('Item added to cart!');
}

// Function to update the cart count displayed in the header
function updateCartCount(count) {
  const cartCountElement = document.querySelector('.number');
  if (cartCountElement) {
    cartCountElement.innerHTML = count;
  }
}

// Add event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const itemContainer = button.parentElement;
    const itemName = itemContainer.querySelector('h2').textContent;
    const itemPrice = parseFloat(
      itemContainer.querySelector('.price').textContent.replace('NZ$', '')
    );
    addToCart(itemName, itemPrice);
  });
});

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

const hideCart = () => {
  const toggleCart = document.querySelector('.toggleCart');
  toggleCart.classList.remove('active');
};

const successPurchase = () => {
  // Save the updated cart items back to local storage
  localStorage.removeItem('cartItems');

  // Update the cart count displayed in the header
  updateCartCount(0);

  // Display a confirmation message
  alert('Thank you for purchasing!');
};
