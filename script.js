// Selecting the separate parts of the modal divs
const modal = document.getElementsByClassName('modal')[0];
modalContent = document.getElementsByClassName('modal-content')[0];

// Clicking on the button opens the modal
const buttonOpenModal = document.getElementById('modal-btn');
buttonOpenModal.addEventListener('click', openModal);

// Clicking on the modal's close button closes the modal
const modalCloseButton = document.getElementsByTagName('span')[0];
modalCloseButton.addEventListener('click', closeModal);

// Open modal
function openModal(event){
    modalContent.style.animationName = 'modalopen';
    modal.style.display = 'block';
    event.stopPropagation();
}

// Close modal
function closeModal(){
    modalContent.style.animationName = 'modalclose';
    setTimeout(() => {
        modal.style.display = 'none';
      }, 1001);
}

document.addEventListener('click', closeModal);

modalContent.addEventListener('click', function(e){
    e.stopPropagation();
  });

closeModal();