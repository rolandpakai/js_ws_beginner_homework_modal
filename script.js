
const modalBtn = document.getElementById("modal-btn");
const modalBox = document.getElementsByClassName("modal");
const closeBtn = document.getElementsByClassName("close");

function openModal (){
    modalBox[0].style.display = 'block';
}

function closeModal (){
    modalBox[0].style.display = 'none';
}

modalBtn.addEventListener("click", openModal);
closeBtn[0].addEventListener("click", closeModal);

function outsideClick(e) {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
}

document.addEventListener("click", outsideClick);