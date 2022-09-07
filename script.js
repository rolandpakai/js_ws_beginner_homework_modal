const button2 = document.querySelector('.button');
const xbutton = document.querySelector('.close');
const module = document.querySelector('.modal');

function revealContent() {
    module.style.display = 'inline';
}
function hideContent() {
    module.style.display = 'none';
}

document.addEventListener("click", function (e) {
    const target = e.target;
    if (target.matches('.button')) {
        revealContent();
    } else {
        if (target.matches('.close')) {
            hideContent();
        } else {
            if (target.matches('.modal')) {
                hideContent();
            }
        }
    }
    console.log(target);
}, true);
