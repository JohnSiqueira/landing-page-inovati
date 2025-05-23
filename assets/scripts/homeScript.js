
//Passagem das imagens do Slider;
const radio = document.querySelector(".manual-btn")
let i = 1;

document.getElementById("slide1").checked = true;

setInterval(() => {
    nextImage()
}, 6000)

function nextImage() {
    i++

    if(i > 3) {
        i = 1;
    }
    document.getElementById("slide" + i).checked = true;
}

//Habilitar o menu responsivo;
const btnMenu = document.querySelector('#responsive-menu');
const menu = document.querySelector('.menu-bar');
const ulMenu = document.querySelector('.menu-bar ul');

btnMenu.addEventListener("change", displayMenu)
document.innerWidth.addEventListener("change", () => {
    if(innerHeight > 620) {
        menu.style.display = "block"
    }
})

function displayMenu() {
    if (window.innerWidth <= 620) {
        if(btnMenu.checked) {
            menu.style.display =  'block';
        } else {
            menu.style.display = 'none';
        }
    }
}

function irPara(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth"});
}
function closeMenuClick(id) {

    if (window.innerWidth <= 620) {
    document.getElementById(id).checked = false;
    menu.style.display = 'none';
    }
}