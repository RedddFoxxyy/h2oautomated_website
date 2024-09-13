let isDarkMode = localStorage.getItem('isDarkMode') !== 'false';

function initializeModeToggle() {
    applyMode();
}

document.addEventListener('DOMContentLoaded', initializeModeToggle);

initializeModeToggle();

function applyMode() {
    const body = document.body;
    const modeIcon = document.querySelector('.mode-icon');
    const title = document.querySelectorAll('.title');
    const watermark = document.querySelector('.watermark');
    const modeIc = document.getElementById('modeIcon');
    const tab = document.querySelectorAll('th , td');

    if (!isDarkMode) {
        /* querySelectorAll returns an array so all the elements are looped to change the colour of each */
        for (let i = 0; i < title.length; i++) {
            title[i].style.color = '#DC8A78';
        }
        body.style.background = 'linear-gradient(to bottom, #EFF1F5, #EFF1F5)';
        body.style.color = '#4C4F69';
        for (let m = 0; m < tab.length; m++) {
            tab[m].style.border = '1px solid #99d1db';
        }
        watermark.style.color = 'rgba(0, 0, 0, 0.5)';
        modeIc.setAttribute('d', 'M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z');
        modeIcon.style.fill = '#4C4F69';
    } else {
        for (let i = 0; i < title.length; i++) {
            title[i].style.color = '#DDB6F2';
        }
        body.style.background = 'linear-gradient(to bottom, #1E1E28, #1E1E28)';
        body.style.color = '#F5E0DC';
        for (let m = 0; m < tab.length; m++) {
            tab[m].style.border = '1px solid #DDB6F2';
        }
        watermark.style.color = 'rgba(255, 255, 255, 0.5)';
        modeIc.setAttribute('d', 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z');
        modeIcon.style.fill = '#F5E0DC';
    }
}

function toggleMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    applyMode();
}
