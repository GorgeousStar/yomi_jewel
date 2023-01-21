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