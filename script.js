const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

/* =========================
   PETAL GENERATOR
   ========================= */

const petalsContainer = document.querySelector('.petals');
const petalImages = [
  'images/petal1.png',
  'images/petal2.png',
  'images/petal3.png'
];

function createPetal() {
  const petal = document.createElement('img');
  petal.src = petalImages[Math.floor(Math.random() * petalImages.length)];
  petal.classList.add('petal');

  const sizeClass = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
  petal.classList.add(sizeClass);

  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDelay = Math.random() * 5 + 's';

  petalsContainer.appendChild(petal);

  setTimeout(() => petal.remove(), 35000);
}

setInterval(createPetal, 900);


/* Toggle envelope ONLY when envelope itself is pressed */
envelope.addEventListener('pointerdown', (e) => {
  // If the letter was tapped, ignore
  if (e.target.closest('.letter')) return;

  envelope.classList.toggle('open');
});

/* Prevent letter from triggering envelope */
letter.addEventListener('pointerdown', (e) => {
  e.stopPropagation();
});


/* PREVENT LETTER FROM CLOSING ENVELOPE */
letter.addEventListener('click', stopEvent);
letter.addEventListener('touchstart', stopEvent);

function stopEvent(e) {
  e.stopPropagation();
}

// EmailJS setup
(function () {
emailjs.init('0KWDiFIo55gMNwXDY'); // replace
})();


function sendResponse(answer) {
    if (answer === 'Yes') {
startConfetti();
}

emailjs.send('service_to7lzhh', 'template_u5k1paq', {
response: answer
})
.then(() => {
alert('Response sent! 💌');
})
.catch(err => {
alert('Error sending email');
console.error(err);
});
}

function startConfetti() {
  // Heart confetti
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.6 },
    shapes: ['heart'],
    colors: ['#ff4d6d', '#ff758f', '#ffb3c6']
  });

  // Ring
  const ring = document.createElement('div');
  ring.className = 'ring';
  ring.textContent = '💍';
  document.body.appendChild(ring);

  // Sparkles
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = 50 + Math.random() * 10 - 5 + 'vw';
    sparkle.style.top = 50 + Math.random() * 10 - 5 + 'vh';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }

  setTimeout(() => ring.remove(), 2000);
}

// No button dodge
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseenter', () => {
const x = Math.random() * 200 - 100;
const y = Math.random() * 200 - 100;
noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
