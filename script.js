const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Fetch the header HTML
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(data => {
            // Insert the header HTML into the placeholder
            document.getElementById('header-placeholder').innerHTML = data;

            // Optional: Add event listener for mobile menu toggle
            const menuToggle = document.getElementById("menu-toggle");
            const mobileMenu = document.getElementById("mobile-menu");

            if (menuToggle && mobileMenu) {
                menuToggle.addEventListener("click", () => {
                    mobileMenu.classList.toggle("hidden");
                });
            }
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
});