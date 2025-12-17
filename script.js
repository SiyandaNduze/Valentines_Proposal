const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

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

// Confetti
function startConfetti() {
const duration = 3000;
const end = Date.now() + duration;


const interval = setInterval(() => {
if (Date.now() > end) {
clearInterval(interval);
}
confetti({
particleCount: 50,
spread: 70,
origin: { y: 0.6 }
});
}, 250);
}

// No button dodge
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseenter', () => {
const x = Math.random() * 200 - 100;
const y = Math.random() * 200 - 100;
noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
