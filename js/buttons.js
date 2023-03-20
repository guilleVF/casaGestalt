// Hacemos aparecer o desaparecer los detalles de cada curso
const all_card_lg = document.querySelectorAll('.card_lg');
const all_cursoDetalles = document.querySelectorAll('.cursoDetalles');

all_card_lg.forEach(function(card_lg) {
    card_lg.addEventListener('click', function() {
      for (let i = 0; i < all_cursoDetalles.length; i++) {
        if (all_cursoDetalles[i].id === card_lg.id.replace('card_lg', 'cursoDetalles')) {
          if (all_cursoDetalles[i].style.opacity === '0') {
            all_cursoDetalles[i].style.opacity = '100';
            all_cursoDetalles[i].style.maxHeight = '4000px';
          } else {
            all_cursoDetalles[i].style.opacity = '0';
            all_cursoDetalles[i].style.maxHeight = '0';
          }
        }
      }
    });
});

// Hacemos que al desplazarnos a cada curso, se desplieguen los detalles
//  siempre y cuando estemos accediendo desde el swiper

// window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('myParam') === '1') {
      // desplazar la página a la sección
      // window.location.href = "#card_lg3a1";
      document.getElementById("card_lg3a1").scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      // hacer clic en el enlace
      document.getElementById("card_lg3a1").click();
      // document.getElementById("card_lg3a1").click();
    }
    if (urlParams.get('myParam') === '2') {
      // desplazar la página a la sección
      // window.location.href = "#card_lg3a1";
      document.getElementById("card_lg3b1").scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      // hacer clic en el enlace
      document.getElementById("card_lg3b1").click();
      // document.getElementById("card_lg3a1").click();
    }
    if (urlParams.get('myParam') === '3') {
      // desplazar la página a la sección
      // window.location.href = "#card_lg3a1";
      document.getElementById("card_lg3c1").scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      // hacer clic en el enlace
      document.getElementById("card_lg3c1").click();
      // document.getElementById("card_lg3a1").click();
    }
// }

// Cambiamos el menu hamburguesa por una cruz
window.onload = function() {
navToggle = document.querySelector('.nav-toggle-label')
navToggle.addEventListener('click', function() {
navToggle.classList.toggle('menuCruz')
}) 
}

// Hacemos que el navbar cambie de color

const navbar = document.querySelector('header');
const swipercoso = document.querySelector('#swipercoso');


function cambiarColor() {
  const posicion = swipercoso.getBoundingClientRect().top;  

  if (posicion <= 120) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Si estamos en una pagina que no sea el index, ejecutamos la funcion, de lo contrario aplicamos el fondo al navbar
let onindex = document.querySelector('.heroInicio')

if (onindex != null ) {
  window.addEventListener('scroll', cambiarColor);
} else {
  navbar.classList.add('scrolled')
}
