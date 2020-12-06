var burger = document.querySelector('.burger')

function toggle() {
    var nav_menu = document.querySelector('.navbar_menu')
    nav_menu.classList.toggle('navbar_menu--active')
    burger.classList.toggle('toggle')
    var links = document.querySelectorAll(".navbar_item");
    links.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        }else{
            link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
    });
}

burger.addEventListener("click", function () {
    toggle()
})
