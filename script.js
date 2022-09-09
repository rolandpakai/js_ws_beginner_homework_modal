const button = document.querySelector('#modal-btn');
const modal = document.querySelector('.modal');
var hideModal = document.querySelector('.close')

function reveal(){
    modal.style.display='block';
}

function hide() {
    modal.style.display='none'
}

function closeClick(e) {
    if(e.target == modal){
        modal.style.display='none'
    }
}

button.addEventListener("click", reveal);
hideModal.addEventListener("click", hide);
window.addEventListener("click", closeClick);