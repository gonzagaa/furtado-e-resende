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

ScrollReveal().reveal('#home .content header', { distance: '400px', origin: 'top', duration: 500, easing: 'ease-in-out'});
ScrollReveal().reveal('#home .content a, #services .content .text, #advogados .content .advogado .text, #sobre .content h2, #sobre .content p, #contato header h2, #contato header p, #contato form label, #contato form .input', { distance: '400px', origin: 'bottom', duration: 500, easing: 'ease-in-out'});

ScrollReveal().reveal('#services .areas .cards .card, #advogados .content .advogado .perfil, #services .content img, #contato form input, #contato form textareas', { distance: '0px', opacity: 0, duration: 700, easing: 'ease-in-out'});


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