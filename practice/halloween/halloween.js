// Spooky background sound on page load
window.addEventListener('load', () => {
    const backgroundMusic = new Audio('spooky-background.mp3');
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
    backgroundMusic.play();
});

// Spooky title hover effect
document.querySelector('h1').addEventListener('mouseover', function () {
    this.style.color = '#FF8C00';
    this.style.textShadow = '0 0 15px #FF4500, 0 0 25px #FFD700';
});

document.querySelector('h1').addEventListener('mouseout', function () {
    this.style.color = '';
    this.style.textShadow = '';
});

// Randomly add bats flying across the screen
function addFlyingBat() {
    const bat = document.createElement('div');
    bat.textContent = '🦇';
    bat.style.position = 'absolute';
    bat.style.fontSize = `${Math.random() * 1.5 + 1}rem`;
    bat.style.color = '#FF8C00';
    bat.style.top = `${Math.random() * window.innerHeight}px`;
    bat.style.left = `${window.innerWidth}px`;
    bat.style.animation = `flyAcross ${Math.random() * 3 + 2}s linear infinite`;

    document.body.appendChild(bat);

    // Remove the bat after it flies across the screen
    setTimeout(() => bat.remove(), 5000);
}

// Add a bat every 2 seconds
setInterval(addFlyingBat, 2000);

// CSS Animation for bats
const style = document.createElement('style');
style.textContent = `
    @keyframes flyAcross {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100vw); }
    }
`;
document.head.appendChild(style);

// Flicker effect for all section headers on hover
document.querySelectorAll('h2').forEach(header => {
    header.addEventListener('mouseover', () => {
        header.style.animation = 'flicker 1s infinite alternate';
    });
    header.addEventListener('mouseout', () => {
        header.style.animation = '';
    });
});

// Flicker animation for h2 headers
style.textContent += `
    @keyframes flicker {
        0% { color: #FF4500; text-shadow: 0 0 10px #FF4500; }
        50% { color: #FFD700; text-shadow: 0 0 20px #FFD700; }
        100% { color: #FF4500; text-shadow: 0 0 10px #FF4500; }
    }
`;

// Glowing footer effect on click
document.querySelector('footer').addEventListener('click', () => {
    document.querySelector('footer').style.animation = 'glow 2s infinite alternate';
});

// Glow animation
style.textContent += `
    @keyframes glow {
        0% { color: #FF4500; text-shadow: 0 0 10px #FF4500, 0 0 20px #FF4500; }
        100% { color: #FFD700; text-shadow: 0 0 20px #FFD700, 0 0 40px #FFD700; }
    }
`;