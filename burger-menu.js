document.addEventListener("DOMContentLoaded", function() {
    // Load the header.html content into the header-container
    fetch('/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            // Ensure the burger menu script runs after the header is loaded
            const burgerIcon = document.getElementById('burger-icon');
            const navContainer = document.getElementById('nav-container');

            if (burgerIcon && navContainer) {
                burgerIcon.addEventListener('click', function() {
                    navContainer.classList.toggle('show');
                    burgerIcon.classList.toggle('active'); // Toggle the active class on click
                    console.log('Burger icon clicked, nav-container class toggled');
                    console.log('navContainer classes:', navContainer.classList);
                });
            } else {
                console.error('Burger icon or nav container not found in the DOM.');
            }
        })
        .catch(error => console.error('Error loading header.html:', error));
});