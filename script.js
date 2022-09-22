// Get modal element
var myModal = document.getElementById('my-modal')
//Get open modal button
var modalBtn = document.getElementById('modal-btn');
// Get close button
var closeBtn = document.getElementsByClassName('close')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
//Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

//Function to open modal
function openModal(){
    myModal.style.display = 'block';
}

//Function to close modal
function closeModal() {
    myModal.style.display = 'none';
}

//Function to close modal if outside click
function outsideClick(e){
    if(e.target == myModal){
        myModal.style.display = 'none';
    }
}

