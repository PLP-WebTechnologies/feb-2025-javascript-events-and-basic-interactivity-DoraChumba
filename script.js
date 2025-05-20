document.addEventListener('DOMContentLoaded', () => {
    const clickButton = document.getElementById('clickButton');
    const message = document.getElementById('message');

    // Button Click Event
    clickButton.addEventListener('click', () => {
        message.textContent = 'Button was clicked!';
    });

    // Hover Effect (handled by CSS)

    // Keypress Detection
    document.addEventListener('keypress', (event) => {
        if (event.key === 'a') {
            message.textContent = 'You pressed the "A" key!';
        }
    });

    // Double-Click or Long Press Secret Action
    let isLongPress = false;

    clickButton.addEventListener('mousedown', () => {
        isLongPress = false;
        setTimeout(() => {
            if (!isLongPress) {
                message.textContent = 'Long press detected!';
            }
        }, 1000); // 1000ms = 1 second
    });

    clickButton.addEventListener('mouseup', () => {
        isLongPress = true;
    });

    clickButton.addEventListener('dblclick', () => {
        message.textContent = 'Double-click detected!';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const changeButton = document.getElementById('changeButton');
    const changeText = document.getElementById('changeText');

    // Button that changes text and color
    let colorIndex = 0;
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff'];
    changeButton.addEventListener('click', () => {
        changeText.textContent = 'Text changed!';
        changeText.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    });

    // Accordion
    function toggleAccordion(index) {
        const content = document.getElementById(`accordionContent${index}`);
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('validationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const usernameFeedback = document.getElementById('usernameFeedback');
    const emailFeedback = document.getElementById('emailFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');

    // Real-time feedback for username
    username.addEventListener('input', () => {
        if (username.value.trim() === '') {
            usernameFeedback.textContent = 'Username is required.';
        } else {
            usernameFeedback.textContent = '';
        }
    });

    // Real-time feedback for email
    email.addEventListener('input', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailFeedback.textContent = 'Please enter a valid email address.';
        } else {
            emailFeedback.textContent = '';
        }
    });

    // Real-time feedback for password
    password.addEventListener('input', () => {
        if (password.value.length < 8) {
            passwordFeedback.textContent = 'Password must be at least 8 characters long.';
        } else {
            passwordFeedback.textContent = '';
        }
    });

    // Form submission validation
    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Username validation
        if (username.value.trim() === '') {
            usernameFeedback.textContent = 'Username is required.';
            isValid = false;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailFeedback.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Password validation
        if (password.value.length < 8) {
            passwordFeedback.textContent = 'Password must be at least 8 characters long.';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});