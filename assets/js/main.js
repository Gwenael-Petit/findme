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
"Tu as des jolies courbes, et pourtant, tu es belle dans tous les angles",
"T'es magnifique, mais tu ne le vois pas. Les plus beaux papillons ne voient pas la couleur de leurs ailes...",
"J'ai rêvé d'être ton miroir, moi aussi je veux te voir tous les matins et tous les soirs",
"Je ne te laisserai jamais tomber... sauf si tu tombes amoureuse de moi",
"Si tu me demandais combien de fois j'ai pensé à toi aujourd'hui, je dirai 1 fois. Parce que j'ai pensé à toi au réveil, et depuis je n'ai pas arrêté",
"La première fois qu'on s'est vu à Lille, je me suis dis que c'était joli le soleil qui faisait briller tes yeux... Depuis j'ai compris que ce sont tes yeux qui font briller le soleil",
"Si je devais aller en enfer pour t'embrasser je le ferai, comme ça je raconterai au diable à quoi ressemble le paradis.",
"Je ne suis pas un grand musicien, mais depuis que je t’ai rencontré, mon coeur chante la plus belle des mélodies",
"Quand je suis avec toi, je ne comprends pas tout ce qui se passe, cet amour me dépasse, je ne comprends pas tout ce que je ressens. Je ne vois pas le temps qui passe quand on s’enlace.",
"Quand j’étais petit, je voulais décrocher la lune, mais depuis que je sais d'où tu viens, je ne voudrais plus jamais quitter la terre.",
"Tu es une énigme, un mystère, un si grand cœur dans un si petit corps, un soleil au milieu de la nuit, un ange sans ailes, une œuvre d’art échappée du musée.",
"Un jour, tu m’a souris et tu t’es allongé contre moi et depuis, toutes les chansons d’amour se sont mises à parler de toi",
"Tu es un soleil parce que tu as les yeux qui brillent, tu es un soleil parce que ton sourire illumine mes journées, et qu’il me manque la nuit. Tu es un soleil parce que mon monde tourne autour de toi. Tu réchauffes mon coeur, si fort que quand je suis avec toi, j’ai l’impression de bronzer.",
"Ma vie ressemble à un film, tu es l’actrice principale de mes rêves, la réalisatrice de mes vœux. J’ai des centaines de scénarios pour nous mais ils se terminent tous par “ils vécurent heureux, avec ou sans enfants”",
"A quoi servent mes yeux si je ne peux pas regarder ton joli sourire? A quoi me sert ma bouche si je ne peux pas te dire je t’aime ? A quoi me sert mon nez si je ne peux sentir ton doux parfum ? A quoi me sert mon cœur si je ne peux pas t’aimer ? Sans toi je suis un été sans soleil, sans toi, je ne suis rien.",
"Depuis que je sais que je veux être avec toi pour le reste de ma vie, je veux que le reste de ma vie, commence le plus vite possible",
"L’amour vaut tout l’or du monde, je n’avais jamais compris pourquoi on disait ça. Mais maintenant je sais, c’est parce que tu as un coeur en or",
"Tu es une grande artiste, quand tu passes devant un miroir, il se transforme en le plus beau tableau du monde",
"Je t’aime. Je t’aime heureuse, je t’aime triste, je t’aime en colère ou fatiguée. Je t’aime le jour et la nuit. Je t’aime en robe de soirée bien maquillée, je t’aime en pyjama devant la télé.Je t’aimais, je t’aime et je t’aimerais.",
"J’ai passé 20 ans à attendre, et quand je t’ai trouvé, j’ai compris que cela faisait 20 ans que je te cherchais.",
"T’aimer, c’est retomber amoureux de toi chaque jour. Moi je retombe amoureux de toi à chacun de tes mots.",
"Quand je pense à notre relation, je ne vois aucun nuage à l’horizon, plutôt logique puisque je suis amoureux du soleil.",
"Quand tu me parles, tu réchauffes mon cœur, quand je te vois mon cœur brûle d’amour. Ma vie est un incendie éternel, ma flamme ne s’éteindra jamais.",
"L'amour aérien t'informe qu'un baiser vient de décoller de l'aéroport de mon cœur et te demande de préparer la piste de tes lèvres pour un atterrissage en douceur.",
"L'amour c'est ce grand fil infini qui me connecte à toi peu importe la distance, ce fil incassable, plus fort que tout. Ce fil, je te prommet d'en prendre soin et ensemble, on fera du crochet pour en faire la plus jolie couverture",
"Tu as les yeux revolvers, tu le regards qui tue, tu as tiré la première, tu m'as touché je sui foutu. Bon d'accord celle là elle est pas de moi ^^ ",
"Je t'aime, un peu, beaucoup, passionnément, à la folie, pour la vie",
"Tu es la plus belle du monde, le plus beau des anges, la plus belle des déesses",
"Tu es la plus jolie des fleurs, et je vais t'arroser de bonheur ma petite rose"
]
let cit = document.getElementById("citation");


let test = list[picname.substring(6,8)-1]
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
    "<strong>Précieuse</strong><i> (adjectif)</i>",
    "<strong>Égayer </strong><i>(verbe)</i>",
    "<strong>Courage </strong><i>(nom masculin)</i>",
    "<strong>Vie </strong><i>(nom féminin)</i>",
    "<strong>Belle </strong><i>(adjectif)</i>",
    "<strong>Généreuse </strong><i>(adjectif)</i>",
    "<strong>Intelligente </strong><i>(adjectif)</i>",
    "<strong>Apaisante </strong><i>(adjectif)</i>",
    "<strong>Magnifique </strong><i>(adjectif)</i>",
    "<strong>Sourire </strong><i>(nom masculin)</i>",
    "<strong>Illumine </strong><i>(verbe)</i>",
    "<strong>Incroyable </strong><i>(adjectif)</i>",
    "<strong>Talentueuse </strong><i>(adjectif)</i>",
    "<strong>Attirance </strong><i>(nom féminin)</i>",
    "<strong>Sexy </strong><i>(adjectif)</i>",
    "<strong>Délicate </strong><i>(adjectif)</i>",
    "<strong>Fierté </strong><i>(nom féminin)</i>",
    "<strong>Gentillesse </strong><i>(nom féminin)</i>",
    "<strong>Rayon de soleil </strong><i>(expression)</i>",
    "<strong>Charisme </strong><i>(nom masculin)</i>",
    "<strong>Admirable </strong><i>(adjectif)</i>",
    "<strong>Regard </strong><i>(nom masculin)</i>",
    "<strong>Élégante </strong><i>(adjectif)</i>",
    "<strong>Inestimable </strong><i>(adjectif)</i>",
    "<strong>Unique </strong><i>(adjectif)</i>"
]
let mot = document.getElementById("mdj");


let test2 = mdj[picname.substring(6,8)-1]
if (mot != null) mot.innerHTML = test2;

let edj =  ["[Étymologie : Du latin belleza]",
    "[Étymologie : Du latin inspiratio]",
    "[Étymologie : Du latin dulcis]",
    "[Étymologie : Du latin ridere]",
    "[Étymologie : Du latin radiare]",
    "[Étymologie : Du latin cor]",
    "[Étymologie : Du latin pretiosus]",
    "[Étymologie : Du latin gai]",
    "[Étymologie : Du latin coraticum]",
    "[Étymologie : Du latin vita]",
    "[Étymologie : Du latin bellus]",
    "[Étymologie : Du latin generosus]",
    "[Étymologie : Du latin intelligentia]",
    "[Étymologie : Du latin apaisare]",
    "[Étymologie : Du latin magnificus]",
    "[Étymologie : Du latin subridere]",
    "[Étymologie : Du latin illuminare]",
    "[Étymologie : Du latin incredibilis]",
    "[Étymologie : Du latin talentum]",
    "[Étymologie : Du latin attrahere]",
    " ",
    "[Étymologie : Du latin delicatus]",
    "[Étymologie : Du latin fieret]",
    "[Étymologie : Du latin gentilis]",
    " ",
    "[Étymologie : Du grec kharisma]",
    "[Étymologie : Du latin admirabilis]",
    "[Étymologie : Du latin regardare]",
    "[Étymologie : Du latin elegans]",
    "[Étymologie : Du latin inestimabilis]",
    "[Étymologie : Du latin unicus]"
]
let ety = document.getElementById("edj");


let test3 = edj[picname.substring(6,8)-1]
if (ety != null) ety.innerText = test3;

let ddj =  [" 1.	Qualité esthétique plaisante ou attractive, caractérisée par l'harmonie, la proportion et la grâce dans les formes, les couleurs ou les compositions.<br> 2.	Caractère qui suscite l'admiration, le plaisir esthétique ou l'émerveillement, idéal esthétique.",
  "1.	Processus créatif ou émotionnel qui suscite de nouvelles idées, sentiments ou actions.",
  "1.	Qui est agréable au toucher, au goût ou à l'ouïe. <br> 2.	Qui est doux, tendre ou apaisant dans son caractère ou son comportement.",
  "1.	Expression sonore de plaisir ou de gaieté, généralement produite en réaction à quelque chose de drôle ou d'amusant.",
  "1.	Qui émet une lumière ou une énergie brillante et éclatante.<br>2.	Qui dégage une aura de bonheur, de santé ou de confiance.",
  "1.	Organe central du système circulatoire responsable de pomper le sang à travers le corps.<br>2.	Métaphoriquement, le siège des émotions, des sentiments ou de l'amour dans une personne.",
  "1.	Qui est extrêmement précieux, précieux ou de grande valeur, souvent en raison de sa rareté ou de son importance sentimentale.",
  "1.	Rendre plus joyeux, plus lumineux ou plus agréable, souvent par des mots, des actions ou des gestes amusants ou encourageants.",
  "1.	Force morale permettant de faire face à la peur, à l'adversité ou à l'opposition avec détermination et bravoure.",
  "1.	État d'activité, d'animation et de croissance caractérisant les organismes vivants.<br>2.	Expérience individuelle ou collective de l'existence, comprenant les interactions, les émotions, les événements et les réalisations.",
  "1.	Qui est d'une grande beauté, charme ou grâce.",
  "1.	Qui est disposé à donner, à partager ou à aider de manière désintéressée et abondante.",
  "1.	Dotée d'une capacité de compréhension, de raisonnement ou de résolution de problèmes supérieure à la moyenne.",
  "1.	Qui a un effet calmant, relaxant ou réconfortant sur les sens ou les émotions.",
  "1.	Qui est d'une grande beauté, splendeur ou grandeur.",
  "1.	Expression faciale joyeuse caractérisée par le mouvement des lèvres et souvent des yeux, signifiant le bonheur, l'amusement ou l'affection.",
  "1.	Rendre lumineux ou éclairer.<br>2.	Métaphoriquement, rendre joyeux, inspiré ou éclairé intellectuellement.",
  "1.	Qui est extrêmement surprenant, impressionnant ou remarquable.",
  "1.	Doté d'aptitudes particulières ou exceptionnelles dans un domaine spécifique, tel que l'art, la musique, le sport, etc.",
  "1.	Force ou qualité qui suscite l'intérêt, l'admiration ou le désir chez les autres.",
  "1.	Qui possède un attrait sexuel fort ou une sensualité séduisante.",
  "1.	Qui est fragile, sensible ou subtil dans son caractère ou son apparence.",
  "1.	Sentiment de satisfaction et de dignité personnelle résultant de ses propres réalisations, de celles de ses proches ou de son affiliation à quelque chose de valorisé ou de respecté.",
  "1.	Qualité de comportement bienveillant, amical et attentionné envers les autres.",
  "1.	Métaphore utilisée pour décrire une personne ou une chose qui apporte de la lumière, de la chaleur ou de la joie dans la vie des autres.",
  "1.	Qualité magnétique ou séduisante qui attire et influence les autres, souvent associée à la confiance en soi, au leadership ou à la personnalité magnétique.",
  "1.	Qui mérite l'admiration, le respect ou l'éloge en raison de ses qualités exceptionnelles ou louables.",
  "1.	Action de fixer visuellement quelque chose, souvent accompagnée d'émotions ou de pensées.<br>2.	Expression du visage qui reflète des sentiments, des intentions ou des états émotionnels.",
  "1.	Qui a de la grâce, du style et de la sophistication dans son apparence, son comportement ou ses actions.",
  "1.	Qui est si précieux ou si important qu'il est impossible à estimer ou à évaluer.",
  "1.	Qui est la seule en son genre, sans équivalent ou sans pareil."
]
let def = document.getElementById("ddj");


let test4 = ddj[picname.substring(6,8)-1]
if (def != null) def.innerHTML = test4;


/**
 * Galerie
 */
let html=""
let galerie = document.getElementById("galerie");
for(let i = 1; i<picname.substring(6,8)-17; i++){
  if(i<10) i=(`0${i}`);
  //console.log(i);
  //console.log(html);
  html+=`
  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
  <div class="portfolio-wrap">
    <img src="assets/img/potd/202405${i}.jpg" class="img-fluid" alt="">
    <div class="portfolio-info">
      <div class="portfolio-links">
        <a href="assets/img/potd/202412${i}.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox" title=""><i class="bx bx-plus"></i></a>
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
