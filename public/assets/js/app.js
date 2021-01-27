const navSlide = () => {
    window.addEventListener("scroll", function () {
        if (window.scrollY > window.innerHeight) {
            document.querySelector("nav").classList.add("sticky");
        } else {
            document.querySelector("nav").classList.remove("sticky");
            links.classList.remove("toggle");
        }
    });
    var links = document.querySelector("nav .links");
    var burger = document.querySelector(".icon-burger");
    burger.addEventListener("click", function () {
        links.classList.toggle("toggle");
    })
    window.addEventListener("scroll", function() {
        document.querySelector(".colorOverlay").classList.add("fadeScroll");
        document.querySelector(".colorOverlay").style.opacity = `${0.0012 * window.scrollY}`;
    });
}

window.onload = function () {
    const efect = document.querySelector(".efect");
    window.addEventListener("scroll", scrollEffect)
    function scrollEffect() {
        if(window.scrollY >= 800) {
            efect.style.opacity = "1";
            efect.style.transform = "translateX(0px)";
            efect.style.transition = "1.1s ease-in-out";
        }
        else {
            efect.style.opacity = "0";
            efect.style.transform = "translateX(-250px)";
        }
    }
}

navSlide();