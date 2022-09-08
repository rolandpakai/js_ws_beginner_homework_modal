const clickHereButton = document.getElementById('modal-btn');
const modal = document.getElementById('my-modal');
const closeElement= document.getElementsByClassName('close')[0];

clickHereButton.addEventListener('click', openModal);

closeElement.addEventListener('click', closeModal);

function openModal() {
    modal.style.display = 'block';
};

function closeModal() {
    modal.style.display = 'none';
};

window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
});