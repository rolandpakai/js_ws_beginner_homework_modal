// DOM Manipulation

// Variables
const openBtn = document.getElementById('modal-btn');
const modalContainer = document.getElementById('my-modal');
const closeBtn = document.getElementsByClassName('close');

// Event Listeners
openBtn.addEventListener("click", function() {
    modalContainer.style.display = 'block';
});

closeBtn[0].addEventListener("click", function() {
    modalContainer.style.display = 'none';
});

window.addEventListener("click", function(e) {
    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});