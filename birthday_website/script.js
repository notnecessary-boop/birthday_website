// Smooth Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Message Wall
const form = document.getElementById("messageForm");
const board = document.getElementById("messageBoard");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("timeline-item");
    msgDiv.innerHTML = `<strong>${name}</strong>: ${message}`;
    board.appendChild(msgDiv);

    form.reset();
});

// Surprise Easter Egg
const giftBtn = document.getElementById("giftButton");
const giftMsg = document.getElementById("giftMessage");

giftBtn.addEventListener("click", () => {
    giftMsg.style.display = "block";
    giftBtn.style.display = "none";
    launchConfetti();
});

// Confetti
function launchConfetti() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) return clearInterval(interval);

        const particleCount = 50 * (timeLeft / duration);
        confetti({
            particleCount,
            origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 },
            ...defaults,
        });
    }, 250);
}

// Load confetti library
const confettiScript = document.createElement("script");
confettiScript.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
document.body.appendChild(confettiScript);