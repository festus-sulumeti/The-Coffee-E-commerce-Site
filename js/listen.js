
//Activating the waitlist as awaiting for the push notification
const waitlistB = document.getElementById('waitlist');

waitlistB.addEventListener('click', function(){
    waitlistB.disabled = true;

    waitlistB.textContent = "Adding to the waitlist";

    alert("Thank you, you have now been added to the waiting list")
})

//Activating the waitlist as awaiting for the push notification
const waitlis = document.getElementById('waitli');

waitlis.addEventListener('click', function(){
    waitlis.disabled = true;

    waitlis.textContent = "Adding to the waitlist";

    alert("Thank you, you have now been added to the waiting list")
})

//after filling the form, the user is alerted that they have been added to the waitlist
const coffeeForm = document.getElementById('coffeeForm');
const confirmationMessage = document.getElementById('confirmationMessage');

coffeeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name && email && message) {
        confirmationMessage.style.display = 'block';
        confirmationMessage.textContent = "Thank you for your coffee updates";
        coffeeForm.style.display = 'none';
    } else {
        confirmationMessage.style.display = 'block';
        confirmationMessage.textContent = "Please fill in all the fields.";
    }
});
