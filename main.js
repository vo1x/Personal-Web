const dynamicText = document.getElementById('dynamic-text');
const phrases = ["Student.","Developer.", "Designer."];
const gradients = [
    "linear-gradient(90deg, #007CF0, #00DFD8)",
    "linear-gradient(90deg, #FF5733, #FFC300)",
    "linear-gradient(90deg, #FF3366, #8A00E1)"
];
let currentIndex = 0;
let charIndex = 0;
let typingInterval;

function updateText() {
    dynamicText.style.backgroundImage = gradients[currentIndex];

    if (charIndex < phrases[currentIndex].length) {
        dynamicText.textContent += phrases[currentIndex][charIndex];
        charIndex++;
        typingInterval = setTimeout(updateText, 50); 
    } else {
        clearTimeout(typingInterval);
        setTimeout(() => {
            dynamicText.textContent = ""; 
            charIndex = 0;
            currentIndex = (currentIndex + 1) % phrases.length;
            updateText();
        }, 2000); 
    }
}

updateText();