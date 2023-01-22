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
// -


let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n); 
}
// image control

function currentSlide(n) {
    showSlides(slideIndex = n); 
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("myslides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
    for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", "");}
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // if (screen.width > 700 ) {
    //     itemDisplay = document.getElementsByClassName("slider_container")[0].getAttribute
    //     margin = itemDisplay * 5;
    // }
}
