function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");    
    icon.classList.toggle("open");    
}

function closeMenuOnClickOutside(event) {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    
    if (menu.classList.contains("open") && 
        !hamburgerMenu.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
}

function closeMenuOnScroll() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update checkbox state
    const toggleCheckboxes = document.querySelectorAll('.dark-mode-toggle input[type="checkbox"]');
    toggleCheckboxes.forEach(checkbox => {
        checkbox.checked = isDarkMode;
    });
}

function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        
        // Update checkbox state for all toggles
        const toggleCheckboxes = document.querySelectorAll('.dark-mode-toggle input[type="checkbox"]');
        toggleCheckboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
    }
}

function initMobileOptimizations() {
    // Add event listeners for mobile menu
    document.addEventListener('click', closeMenuOnClickOutside);
    window.addEventListener('scroll', closeMenuOnScroll);
    
    // Handle touch events better on mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadDarkModePreference();
    initMobileOptimizations();
});
