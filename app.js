const hamcontainer = document.querySelector(".hamcontainer");
const navMenu = document.querySelector(".nav-menu");

        hamcontainer.addEventListener("click", () => {
            hamcontainer.classList.toggle("animate");
            navMenu.classList.toggle("animate");  
        })

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamcontainer.classList.toggle("animate");
    navMenu.classList.toggle("animate"); 
}))

// image slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n); 
}
// image control

function currntSlide(n) {
    showSlides(slideIndex = n); 
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
}
