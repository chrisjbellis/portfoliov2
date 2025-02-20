$(document).ready(function() {
    $('#header-container').load('/header.html', function() {
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
    });
});