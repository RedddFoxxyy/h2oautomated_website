let isDarkMode = localStorage.getItem('isDarkMode') !== 'false';

function initializeModeToggle() {
    applyMode();
}

document.addEventListener('DOMContentLoaded', initializeModeToggle);

function applyMode() {
    const body = document.body;
    const messageBox = document.getElementById('messageBox');
    const parentBox = document.querySelector('.parent-box');
    const arrowButtons = document.querySelectorAll('.arrow-button');
    const modeToggle = document.getElementById('modeToggle');
    const modeIcon = document.getElementById('modeIcon');
    const watermark = document.querySelector('.watermark');
    const videoBoxes = document.querySelectorAll('.video-box');
    const videoStreams = document.querySelectorAll('.video-stream');
    const videoHeadings = document.querySelectorAll('.video-heading');
    const telemetryHeading = document.querySelectorAll('.telemetry-heading');
    const homeIcon = document.querySelector('.home-icon svg');

    if (!isDarkMode) {
        body.style.background = 'linear-gradient(to bottom, #EFF1F5, #EFF1F5)';
        body.style.color = '#4C4F69';
        messageBox.style.backgroundColor = '#FFFFFF';
        messageBox.style.color = '#4C4F69';
        messageBox.style.borderColor = '#DC8A78';
        parentBox.style.backgroundColor = '#FFFFFF';
        parentBox.style.borderColor = '#DC8A78';
        arrowButtons.forEach(button => {
            button.style.backgroundColor = '#99d1db';
            button.style.color = '#4C4F69';
            button.style.borderColor = '#4C4F69';
        });
        modeToggle.style.backgroundColor = 'transparent';
        watermark.style.color = 'rgba(0, 0, 0, 0.5)';
        videoBoxes.forEach(box => {
            box.style.backgroundColor = '#FFFFFF';
            box.style.borderColor = '#DC8A78';
        });
        videoStreams.forEach(stream => {
            stream.style.backgroundColor = '#FFFFFF';
            stream.style.borderColor = '#DC8A78';
        });
        videoHeadings.forEach(heading => {
            heading.style.color = '#4C4F69';
        });
        telemetryHeading.forEach(heading => {
            heading.style.color = '#4C4F69';
        });
        homeIcon.style.fill = '#4C4F69';

        modeIcon.setAttribute('d', 'M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z');
        modeIcon.style.fill = '#4C4F69';
    } else {
        body.style.background = 'linear-gradient(to bottom, #1E1E28, #1E1E28)';
        body.style.color = '#F5E0DC';
        messageBox.style.backgroundColor = '#1E1E28';
        messageBox.style.color = '#F5E0DC';
        messageBox.style.borderColor = '#1E1E28';
        parentBox.style.backgroundColor = '#302D41';
        parentBox.style.borderColor = '#1E1E28';
        arrowButtons.forEach(button => {
            button.style.backgroundColor = '#DDB6F2';
            button.style.color = '#1E1E28';
            button.style.borderColor = '#1E1E28';
        });
        modeToggle.style.backgroundColor = 'transparent';
        watermark.style.color = 'rgba(255, 255, 255, 0.5)';
        videoBoxes.forEach(box => {
            box.style.backgroundColor = '#302D41';
            box.style.borderColor = '#1E1E28';
        });
        videoStreams.forEach(stream => {
            stream.style.backgroundColor = '#1E1E28';
            stream.style.borderColor = '#1E1E28';
        });
        videoHeadings.forEach(heading => {
            heading.style.color = '#F5E0DC';
        });
        telemetryHeading.forEach(heading => {
            heading.style.color = '#F5E0DC';
        });
        homeIcon.style.fill = '#F5E0DC';

        modeIcon.setAttribute('d', 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z');
        modeIcon.style.fill = '#F5E0DC';
    }
}

function toggleMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('isDarkMode', isDarkMode);
    applyMode();
}

function upArrowClicked() {
    document.getElementById('messageBox').innerText = "Forward led on";
}

function downArrowClicked() {
    document.getElementById('messageBox').innerText = "Backward led on";
}

function leftArrowClicked() {
    document.getElementById('messageBox').innerText = "Left led on";
}

function rightArrowClicked() {
    document.getElementById('messageBox').innerText = "Right led on";
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
            document.getElementById('upArrow').click();
            break;
        case 'ArrowDown':
            document.getElementById('downArrow').click();
            break;
        case 'ArrowLeft':
            document.getElementById('leftArrow').click();
            break;
        case 'ArrowRight':
            document.getElementById('rightArrow').click();
            break;
    }
});