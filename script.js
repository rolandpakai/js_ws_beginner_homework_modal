const modal = document.getElementById('my-modal');
const modalButton = document.getElementById('modal-btn');
const closeButton = document.getElementsByClassName('close')[0];

function openModal() {
    modal.style.display = 'block';
};

function closeModal() {
    modal.style.display = 'none';
}

modalButton.addEventListener("click",openModal);
closeButton.addEventListener("click", closeModal);

function outsideClick(event) {
    if(event.target == modal) {
        closeModal();
    }
}

document.addEventListener("click",outsideClick);