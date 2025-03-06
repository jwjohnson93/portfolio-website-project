function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");    
    icon.classList.toggle("open");    
}

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update checkbox state
    const toggleCheckbox = document.querySelector('.dark-mode-toggle input[type="checkbox"]');
    if (toggleCheckbox) {
        toggleCheckbox.checked = isDarkMode;
    }
}

function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        
        // Update checkbox state
        const toggleCheckbox = document.querySelector('.dark-mode-toggle input[type="checkbox"]');
        if (toggleCheckbox) {
            toggleCheckbox.checked = true;
        }
    }
}

document.addEventListener('DOMContentLoaded', loadDarkModePreference);
