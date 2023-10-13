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

  })
}