const modal_btn = document.getElementById("modal-btn");
const my_modal = document.getElementById("my-modal");
const close = document.querySelector(".close");

modal_btn.addEventListener('click', () =>{
    my_modal.style.display = 'block';
})

close.addEventListener('click', () => {
    my_modal.style.display = 'none';
})

window.addEventListener('click', (e) => {
    if(e.target == my_modal){
        my_modal.style.display = "none";
    }
})
