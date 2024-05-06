/**
* Template Name: Kelly
* Template URL: https://bootstrapmade.com/kelly-free-bootstrap-cv-resume-html-template/
* Updated: Mar 17 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Image du jour
   */
  let pic = document.getElementById("potd");
  let picname = new Date().toISOString().split("-").join("").substring(0,8)

  if(pic != null) pic.src= `assets/img/potd/${picname}.jpg`


  /**
   * Date du jour
   */
  let datedujour = new Date();
  let dateperso = datedujour.toLocaleString('fr-FR',{
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'});
  let jour = document.getElementById("datedujour");
  if(jour != null) jour.innerText = dateperso;

/**
 * Citation du jour
 */

let list =  ["La vie est un océan, il faut surmonter les vagues, et puis un jour on rencontre notre bouée de sauvetage",
"Dans le champs de pissenlits, j'ai trouvée la plus jolie rose",
"Tu as des jolies formes rondes, et pourtant, tu es belle dans tous les angles",
"T'es magnifique, mais tu ne le vois pas. Les plus beaux papillons ne voient pas la couleur de leurs ailes...",
"J'ai rêvé d'être ton miroir, moi aussi je veux te voir tous les matins et tous les soirs",
"Je ne te laisserai jamais tomber... sauf si tu tombes amoureuse de moi",
"Si tu me demandais combien de fois j'ai pensé à toi aujourd'hui, je dirai 1 fois. Parce que j'ai pensé à toi au réveil, et depuis je n'ai pas arrêté",
"La première fois qu'on est sorti à Porto, je me suis dis que c'était joli le soleil qui faisait briller tes yeux... Depuis j'ai compris que ce sont tes yeux qui font briller le soleil",
"Si je devais aller en enfer pour t'embrasser je le ferai, comme ça je raconterai au diable à quoi ressemble le paradis."]
let cit = document.getElementById("citation");


let test = list[picname.substring(7,8)-1]
if (cit != null) cit.innerText = test;

/**
 * Mot du jour
 */

let mdj =  ["<strong> Beauté </strong><i> (nom féminin)</i>",
    "<strong>Inspiration  </strong><i> (nom féminin)</i>",
    "<strong>Douce</strong><i> (adjectif)</i>",
    "<strong>Rire </strong><i>(nom masculin)</i>",
    "<strong>Rayonnante </strong><i> (adjectif)</i>",
    "<strong>Cœur </strong><i>(nom masculin)</i>",
    "<strong>Précieuse</strong><i> (adjectif)</i>"
]
let mot = document.getElementById("mdj");


let test2 = mdj[picname.substring(7,8)-1]
if (mot != null) mot.innerHTML = test2;

let edj =  ["[Étymologie : Du latin belleza]",
    "[Étymologie : Du latin inspiratio]",
    "[Étymologie : Du latin dulcis]",
    "[Étymologie : Du latin ridere]",
    "[Étymologie : Du latin radiare]",
    "[Étymologie : Du latin cor]",
    "[Étymologie : Du latin pretiosus]",
]
let ety = document.getElementById("edj");


let test3 = edj[picname.substring(7,8)-1]
if (ety != null) ety.innerText = test3;

let ddj =  [" 1.	Qualité esthétique plaisante ou attractive, caractérisée par l'harmonie, la proportion et la grâce dans les formes, les couleurs ou les compositions.<br> 2.	Caractère qui suscite l'admiration, le plaisir esthétique ou l'émerveillement, idéal esthétique.",
  "1.	Processus créatif ou émotionnel qui suscite de nouvelles idées, sentiments ou actions.",
  "1.	Qui est agréable au toucher, au goût ou à l'ouïe. <br> 2.	Qui est doux, tendre ou apaisant dans son caractère ou son comportement.",
  "1.	Expression sonore de plaisir ou de gaieté, généralement produite en réaction à quelque chose de drôle ou d'amusant.",
  "1.	Qui émet une lumière ou une énergie brillante et éclatante.<br>2.	Qui dégage une aura de bonheur, de santé ou de confiance.",
  "1.	Organe central du système circulatoire responsable de pomper le sang à travers le corps.<br>2.	Métaphoriquement, le siège des émotions, des sentiments ou de l'amour dans une personne.",
  "1.	Qui est extrêmement précieux, précieux ou de grande valeur, souvent en raison de sa rareté ou de son importance sentimentale.",
]
let def = document.getElementById("ddj");


let test4 = ddj[picname.substring(7,8)-1]
if (def != null) def.innerHTML = test4;


/**
 * Galerie
 */
let html=""
let galerie = document.getElementById("galerie");
for(let i = 20240501; i<picname; i++){
  html+=`
  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
  <div class="portfolio-wrap">
    <img src="assets/img/potd/${i}.jpg" class="img-fluid" alt="">
    <div class="portfolio-info">
      <div class="portfolio-links">
        <a href="assets/img/potd/${i}.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title=""><i class="bx bx-plus"></i></a>
        <!--<a href="portfolio-details.html" class="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i class="bx bx-link"></i></a>-->
      </div>
    </div>
  </div>
</div>`
}
if (galerie != null) galerie.innerHTML=html

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Initiate portfolio details lightbox 
   */
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()