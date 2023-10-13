const coffeeList = document.getElementById('coffee-list');
const coffeeSearch = document.getElementById('coffee-search');
const addToCartButton = document.getElementById('add-to-cart');
const cartPopup = document.getElementById('cart-popup');

let coffeeData = []; //Initializing the empty array to store the coffee data

// starting the fetching process from the json file
async function fetchCoffeeData() {
  try{
    const response = await fetch('db/db.json');
    if (!response.ok){
      throw new Error('Network response was not ok');
    }
    coffeeData = await response.json();
    displayCoffeeItems(coffeeData.coffee);
  } catch (error){
    console.error('Error fetching coffee data', error)
  }
}

//Displaying the coffee content items
function displayCoffeeItems(coffeItems){
  coffeeList.innerHTML = '';

  coffeItems.forEach(coffee => {
    const coffeeItem = document.createElement('div');
    coffeeItem.classList.add('coffee-item');
    /**
     * Creating the HTML structure for the coffee items and appending the coffeeList
     * include the title, price, description and the button
     */

    coffeeItem.innerHTML = `
       <img src="${coffee.image}" alt="${coffee.title}"/>
       <h3>${coffee.title}</h3>
       <p>$${coffee.price}</p>
       <p>${coffee.description}</p>
       <button class="add-to-cart-button" data-id="${coffee.id}">Add to cart</button>
    `;

    coffeeList.appendChild(coffeeItem);
  });
}

//filtering the coffee items basing on the search input

function filterCoffeeItems(searchTerm){
  const filteredCoffee = coffeeData.coffee.filter(coffee => 
    coffee.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayCoffeeItems(filteredCoffee);
}

//Adding the coffee item to the cart
