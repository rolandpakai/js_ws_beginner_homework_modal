const button2 = document.querySelector('.button');
const xbutton = document.querySelector('.close');
const module = document.querySelector('.modal');
function revealContent() {
    module.style.display = 'block';
}
function hideContent() {
    module.style.display = 'none';
}
xbutton.addEventListener("click", hideContent);
button2.addEventListener("click", revealContent);
document.addEventListener("click", function (e) {
    if(e.target == module){
        hideContent();
    }
}, true);