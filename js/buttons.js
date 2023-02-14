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