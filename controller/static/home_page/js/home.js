let isDarkMode = true;

function toggleMode() {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');
    const watermark = document.querySelector('.watermark');
    const title = document.querySelector('.title');
    const description = document.querySelector('.description');
    const menuLines = document.querySelectorAll('.menu-line');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (isDarkMode) {
        // Switch to Light Mode (Catppuccin Latte)
        body.style.background = 'linear-gradient(to bottom, #EFF1F5, #EFF1F5)';
        body.style.color = '#4C4F69';
        modeToggle.textContent = 'Switch to Dark Mode';
        modeToggle.style.backgroundColor = '#99d1db';
        modeToggle.style.borderColor = '#4C4F69';
        modeToggle.style.color = '#4C4F69';
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
    } else {
        // Switch to Dark Mode (Catppuccin Mocha)
        body.style.background = 'linear-gradient(to bottom, #1E1E28, #1E1E28)';
        body.style.color = '#F5E0DC';
        modeToggle.textContent = 'Switch to Light Mode';
        modeToggle.style.backgroundColor = '#DDB6F2';
        modeToggle.style.borderColor = '#1E1E28';
        modeToggle.style.color = '#1E1E28';
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
    }

    isDarkMode = !isDarkMode;
}

function toggleMenu() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
}
