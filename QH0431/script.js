document.getElementById("joinButton").addEventListener("click", function() {
    document.getElementById("joinUsModal").style.display = "flex";
});

document.getElementById("loginButton").addEventListener("click", function() {
    document.getElementById("loginModal").style.display = "flex";
});

document.querySelectorAll(".close-button").forEach(function(button) {
    button.addEventListener("click", function() {
        document.getElementById("loginModal").style.display = "none";
        document.getElementById("joinUsModal").style.display = "none";
        document.getElementById("faqModal").style.display = "none";
    });
});

window.addEventListener("click", function(event) {
    if (event.target === document.getElementById("loginModal")) {
        document.getElementById("loginModal").style.display = "none";
    }
    if (event.target === document.getElementById("joinUsModal")) {
        document.getElementById("joinUsModal").style.display = "none";
    }
    if (event.target === document.getElementById("faqModal")) {
        document.getElementById("faqModal").style.display = "none";
    }
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

document.getElementById("loginButton").addEventListener("click", function() {
    openModal("loginModal");
});

document.getElementById("joinButton").addEventListener("click", function() {
    openModal("joinUsModal");
});

document.getElementById("faqButton").addEventListener("click", function() {
    openModal("faqModal");
});

document.querySelectorAll(".close-button").forEach(function(button) {
    button.addEventListener("click", function() {
        closeModal("loginModal");
        closeModal("joinUsModal");
        closeModal("faqModal");
    });
});

window.addEventListener("click", function(event) {
    if (event.target.classList.contains("modal")) {
        closeModal("loginModal");
        closeModal("joinUsModal");
        closeModal("faqModal");
    }
});

document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const attendance = formData.get('attendance');
    alert(`You have selected: ${attendance}`);
});



const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
