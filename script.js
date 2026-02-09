document.addEventListener('DOMContentLoaded', function() {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const celebration = document.getElementById('celebration');
    const buttonContainer = document.querySelector('.button-container');

    // Track if answer has been given
    let answered = false;

    // Yes button click handler
    yesButton.addEventListener('click', function() {
        if (!answered) {
            answered = true;
            celebration.classList.remove('hidden');
            buttonContainer.style.display = 'none';
            createHeartsRain();
        }
    });

    // No button hover handler - make it run away!
    noButton.addEventListener('mouseenter', function() {
        if (!answered) {
            moveNoButton();
        }
    });

    // Also handle touch for mobile devices
    noButton.addEventListener('touchstart', function(e) {
        if (!answered) {
            e.preventDefault();
            moveNoButton();
        }
    });

    // Function to move the No button to a random position
    function moveNoButton() {
        const container = buttonContainer;
        const containerRect = container.getBoundingClientRect();
        
        // Get random position within a reasonable range
        const maxX = 200;
        const maxY = 100;
        const randomX = (Math.random() - 0.5) * maxX;
        const randomY = (Math.random() - 0.5) * maxY;
        
        // Apply the random position
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    // Function to create falling hearts animation
    function createHeartsRain() {
        const heartsRain = document.querySelector('.hearts-rain');
        const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️'];
        
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                heart.style.position = 'absolute';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = '-50px';
                heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
                heart.style.opacity = '0.8';
                heart.style.animation = `fall ${Math.random() * 2 + 2}s linear`;
                heartsRain.appendChild(heart);

                // Remove heart after animation
                setTimeout(() => {
                    heart.remove();
                }, 4000);
            }, i * 100);
        }
    }

    // Add CSS animation for falling hearts
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                top: 100%;
                transform: translateY(100px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
});
