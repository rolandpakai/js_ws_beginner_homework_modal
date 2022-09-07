
const modalBtn = document.getElementById("modal-btn");
const modalBox = document.getElementsByClassName("modal")[0];
const closeBtn = document.getElementsByClassName("close")[0];

function openModal () {
    modalBox.style.display = 'block';
}

function closeModal () {
    modalBox.style.display = 'none';
}

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

function outsideClick(e) {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
}

document.addEventListener("click", outsideClick);