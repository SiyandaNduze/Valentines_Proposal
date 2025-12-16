// Open envelope
const envelope = document.getElementById('envelope');
envelope.addEventListener('click', () => {
envelope.classList.toggle('open');
});


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


// // Music autoplay on interaction
// const music = document.getElementById('music');
// document.body.addEventListener('click', () => {
// music.play();
// }, { once: true });)
// .then(() => {
// alert('Response sent! 💌');
// })
// .catch(err => {
// alert('Error sending email');
// console.error(err);
// });
// }