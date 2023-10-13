const coffeeList = document.getElementById('coffee-list');
const coffeeSearch = document.getElementById('coffee-search');
const addToCartButton = document.getElementById('add-to-cart');
const cartPopup = document.getElementById('cart-popup');

let coffeeData = []; // Initialize an empty array to store coffee data

// Function to fetch coffee data from the JSON file
async function fetchCoffeeData() {
    try {
        const response = await fetch('db/db.json'); // fetching the data from the JSON file
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        coffeeData = await response.json();
        displayCoffeeItems(coffeeData.coffee); //getting the coffe data from the JSON file
    } catch (error) {
        console.error('Error fetching coffee data:', error);
    }
}

// Display coffee items
function displayCoffeeItems(coffeeItems) {
    coffeeList.innerHTML = '';

    coffeeItems.forEach(coffee => {
        const coffeeItem = document.createElement('div');
        coffeeItem.classList.add('coffee-item');
        /**
         * Create HTML structure for coffee items and append to coffeeList
         *  
         * Include title, price, description, and an "Add to Cart" button for each item
         *  */ 
         
        coffeeItem.innerHTML = `
            <img src="${coffee.image}" alt="${coffee.title}" />
            <h3>${coffee.title}</h3>
            <p>ksh. ${coffee.price} </p>
            <p>${coffee.description}</p>
            <button class="add-to-cart-button" data-id="${coffee.id}">Add to Cart</button>
        `;
        coffeeList.appendChild(coffeeItem);
    });
}

// Filter coffee items based on search input
function filterCoffeeItems(searchTerm) {
    const filteredCoffee = coffeeData.coffee.filter(coffee =>
        coffee.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayCoffeeItems(filteredCoffee);
}

// Add a coffee item to the cart
coffeeList.addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart-button')) {
        const coffeeId = parseInt(e.target.getAttribute('data-id'));
        /**
         * Implement cart functionality here, e.g., using an array to store selected items
         * Show the cart popup message 
         * */ 
        
        cartPopup.style.display = 'block';
        setTimeout(() => {
            cartPopup.style.display = 'none';
        }, 3000);
    }
});

// Search for coffee items when typing in the search bar
coffeeSearch.addEventListener('input', (e) => {
    filterCoffeeItems(e.target.value);
});

// Initialize the coffee list by fetching data from the JSON file
fetchCoffeeData();


//Activating the waitlist as awaiting for the push notification
const waitlistB = document.getElementById('waitlist');

waitlistB.addEventListener('click', function(){
    waitlistB.disabled = true;

    waitlistB.textContent = "Adding to the waitlist";

    alert("Thank you, you have now been added to the wait list")
})