const button2 = document.querySelector('.button');
const xbutton = document.querySelector('.close');
const module = document.querySelector('.modal');
function revealContent() {
    module.style.display = 'block';
}
function hideContent() {
    module.style.display = 'none';
}
module.addEventListener("click", hideContent);
xbutton.addEventListener("click", hideContent);
button2.addEventListener("click", revealContent);



