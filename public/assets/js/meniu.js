const navSlide = () => {
    var links = document.querySelector("nav .links");
    var burger = document.querySelector(".icon-burger");
    burger.addEventListener("click", function () {
        links.classList.toggle("toggle");
    })
}
navSlide();