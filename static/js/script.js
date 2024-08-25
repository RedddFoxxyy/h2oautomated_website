let isDarkMode = true;

function toggleMode() {
    const body = document.body;
    const messageBox = document.getElementById('messageBox');
    const parentBox = document.querySelector('.parent-box');
    const arrowButtons = document.querySelectorAll('.arrow-button');
    const modeToggle = document.getElementById('modeToggle');
    const watermark = document.querySelector('.watermark');
    const videoBoxes = document.querySelectorAll('.video-box');
    const videoStreams = document.querySelectorAll('.video-stream');
    const videoHeadings = document.querySelectorAll('.video-heading');
    const telemetryHeading = document.querySelectorAll('.telemetry-heading');

    if (isDarkMode) {
        // Switch to Light Mode (Catppuccin Latte)
        body.style.background = 'linear-gradient(to bottom, #EFF1F5, #EFF1F5)';
        body.style.color = '#4C4F69';
        messageBox.style.backgroundColor = '#FFFFFF';
        messageBox.style.color = '#4C4F69';
        messageBox.style.borderColor = '#DC8A78';
        parentBox.style.backgroundColor = '#FFFFFF';
        parentBox.style.borderColor = '#DC8A78';
        arrowButtons.forEach(button => {
            button.style.backgroundColor = '#99d1db'; // Updated color
            button.style.color = '#4C4F69';
            button.style.borderColor = '#4C4F69';
        });
        modeToggle.textContent = 'Switch to Dark Mode';
        modeToggle.style.backgroundColor = '#99d1db'; // Updated color
        modeToggle.style.borderColor = '#4C4F69';
        modeToggle.style.color = '#4C4F69';
        watermark.style.color = 'rgba(0, 0, 0, 0.5)'; // Semi-transparent black
        videoBoxes.forEach(box => {
            box.style.backgroundColor = '#FFFFFF';
            box.style.borderColor = '#DC8A78';
        });
        videoStreams.forEach(stream => {
            stream.style.backgroundColor = '#FFFFFF';
            stream.style.borderColor = '#DC8A78';
        });
        videoHeadings.forEach(heading => {
            heading.style.color = '#4C4F69'; // Match video box text color in light mode
        });
        telemetryHeading.forEach(heading => {
            heading.style.color = '#4C4F69'; // Match telemetry text color in light mode
        });
    } else {
        // Switch to Dark Mode (Catppuccin Mocha)
        body.style.background = 'linear-gradient(to bottom, #1E1E28, #1E1E28)';
        body.style.color = '#F5E0DC';
        messageBox.style.backgroundColor = '#1E1E28';
        messageBox.style.color = '#F5E0DC';
        messageBox.style.borderColor = '#1E1E28';
        parentBox.style.backgroundColor = '#302D41';
        parentBox.style.borderColor = '#1E1E28';
        arrowButtons.forEach(button => {
            button.style.backgroundColor = '#DDB6F2'; // Mocha purple
            button.style.color = '#1E1E28';
            button.style.borderColor = '#1E1E28';
        });
        modeToggle.textContent = 'Switch to Light Mode';
        modeToggle.style.backgroundColor = '#DDB6F2'; // Mocha purple
        modeToggle.style.borderColor = '#1E1E28';
        modeToggle.style.color = '#1E1E28';
        watermark.style.color = 'rgba(255, 255, 255, 0.5)'; // Semi-transparent white
        videoBoxes.forEach(box => {
            box.style.backgroundColor = '#302D41';
            box.style.borderColor = '#1E1E28';
        });
        videoStreams.forEach(stream => {
            stream.style.backgroundColor = '#1E1E28';
            stream.style.borderColor = '#1E1E28';
        });
        videoHeadings.forEach(heading => {
            heading.style.color = '#F5E0DC'; // Default text color
        });
        telemetryHeading.forEach(heading => {
            heading.style.color = '#F5E0DC'; // Match telemetry text color in dark mode
        });
    }

    isDarkMode = !isDarkMode;
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

// Add event listener for keyboard events
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
