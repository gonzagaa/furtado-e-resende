window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showButtonWhatsappOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function showButtonWhatsappOnScroll() {
    if(scrollY > 200) {
        document.querySelector("#buttonWhatsapp").classList.add("show")
    } else {
        document.querySelector("#buttonWhatsapp").classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal().reveal('#home .right, #services .content img, #advogados .advogado.one, #contato header, #footer .content, #blog h2, .buttonDesktop', { distance: '200px', origin: 'bottom', opacity: 0, duration: 700, easing: 'ease-in-out'});
ScrollReveal().reveal('#home .left, #services .text, #services h2, #services .areas .cards a, #advogados .advogado.two, #sobre h2, #sobre p, #contato input, #contato label, #contato .input, #blog .card', { distance: '200px', origin: 'bottom', opacity: 0, duration: 700, easing: 'ease-in-out'});

var swiper3 = new Swiper(".mySwiper3", {
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
  });