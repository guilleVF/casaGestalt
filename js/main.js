// const navToggleLabel = document.querySelector(".nav-toggle-label");

// let menuOpen = false;

// navToggleLabel.addEventListener('click', () => {
//     if (!menuOpen) {
//     navToggleLabel.classList.add('open');
//     menuOpen = true;
//     } else {
//         navToggleLabel.classList.remove('open');
//         menuOpen = false;
//     }
// })

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:800,
    autoplay:{delay: 5000},
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });