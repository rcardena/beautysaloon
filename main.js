//ABRE E FECHA O MENU QUANDO CLICAR NO MENU HAMBURGER OU NO X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    //quando clicar executa a função
    nav.classList.toggle('show') //se tiver o show, tira. Se não tiver, coloca o show assim o menu aparece
  })
}

/* QUANDO CLICAR EM UM ITEM, ESCONDER O MENU */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show') //ao clicar o link do menu, esconde o menu
  })
}

/* MUDAR O HEADER DA PÁGINA AO ROLAR A MESMA */

const header = document.querySelector('#header') //seleciona a função #header
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header') //seleciona a função #header
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
    //scroll é maior que a altura do header
  }
}
/* TESTIMONIALS SWIPER */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrappeSize: true
    }
  }
})

/* SCROLL REVEAL: MOSTRAR ELEMENTOS AO DAR SCROLL NA PÁGINA */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})
//scrollReveal passa os itens onde a animação será aplicada

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/*BOTÃO VOLTAR PARA O TOPO*/

const backToTopButton = document.querySelector('.back-to-top')

//função para esconder ou mostrar o botão de retorno ao home
function backToTop() {
  if (window.scrollY >= 560) {
    // 560 é o valor que foi deslocado e assim aparecerá o botão
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* MENU ATIVO CONFORME A SEÇÃO VISÍVEL NA PÁGINA */
const sections = document.querySelectorAll('section[id]') //puxa todas as 'sections' que tem a tag 'id'
function activateMenuCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop //define o limite superior da section
    const sectionHeight = section.offsetHeight //define o limite inferior da section
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop //começa o checkpoint(ou alcança) quando o checkpoint foi >= ao limite superior da página
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight //começa o checkpoint(ou alcança) quando o checkpoint foi <= ao limite inferior da página

    if (checkpointStart && checkpointEnd) {
      //se estiver entre os dois checkpoints...
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//EVENTOS COM SCROLL
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuCurrentSection()
})
