const menuHam = document.querySelector("#btnHamburger");
const menuIcon = document.querySelector("#imgHamburger");
const nav = document.querySelector(".navigation");

menuHam.addEventListener("click", ()=> {
    nav.classList.toggle("show");
    if(nav.className === "navigation show"){
        menuIcon.src = "build/img/icon-close.svg"
        document.body.style.overflow = 'hidden';
    } else{
        menuIcon.src = "build/img/icon-hamburger.svg"
        document.body.style.overflow = 'visible';
    }
});