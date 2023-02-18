// const card_lg = document.querySelector('#card_lg3b1');
// const cursoDetalles = document.querySelector('#cursoDetalles3b1')

// card_lg.addEventListener('click', function() {
//   if (cursoDetalles.style.opacity === '0') {
//     cursoDetalles.style.opacity = '100';
//     cursoDetalles.style.maxHeight = '2000px';
//   } else {
//     cursoDetalles.style.opacity = '0';
//     cursoDetalles.style.maxHeight = '0';
//   }
// });


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
window.onload = function() {
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
};