let isDarkMode = true;

function initializeModeToggle() {
    const modeIcon = document.getElementById('modeIcon');
    modeIcon.style.fill = '#F5E0DC'; // Set initial color for dark mode
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', initializeModeToggle);

function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('modeIcon');
    const watermark = document.querySelector('.watermark');
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    const menuLines = document.querySelectorAll('.menu-line');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (isDarkMode) {
        // Switch to Light Mode (Catppuccin Latte)
        body.style.background = 'linear-gradient(to bottom, #EFF1F5, #EFF1F5)';
        body.style.color = '#4C4F69';
        watermark.style.color = 'rgba(0, 0, 0, 0.5)';
        title.style.color = '#4C4F69';
        description.style.color = '#4C4F69';
        menuLines.forEach(line => {
            line.style.backgroundColor = '#4C4F69';
        });
        dropdownMenu.style.backgroundColor = '#FFFFFF';
        dropdownMenu.style.borderColor = '#DC8A78';
        document.querySelectorAll('.dropdown-menu a').forEach(link => {
            link.style.color = '#4C4F69';
        });

        // Change icon to moon
        modeIcon.setAttribute('d', 'M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z');
        modeIcon.style.fill = '#4C4F69';
    } else {
        // Switch to Dark Mode (Catppuccin Mocha)
        body.style.background = 'linear-gradient(to bottom, #1E1E28, #1E1E28)';
        body.style.color = '#F5E0DC';
        watermark.style.color = 'rgba(255, 255, 255, 0.5)';
        title.style.color = '#F5E0DC';
        description.style.color = '#F5E0DC';
        menuLines.forEach(line => {
            line.style.backgroundColor = '#F5E0DC';
        });
        dropdownMenu.style.backgroundColor = '#302D41';
        dropdownMenu.style.borderColor = '#1E1E28';
        document.querySelectorAll('.dropdown-menu a').forEach(link => {
            link.style.color = '#F5E0DC';
        });

        // Change icon to sun
        modeIcon.setAttribute('d', 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z');
        modeIcon.style.fill = '#F5E0DC';
    }

    isDarkMode = !isDarkMode;
}

function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
}