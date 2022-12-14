

let animItems = document.querySelectorAll('.anim_text')
let anim = document.querySelectorAll('.anim')

if (animItems.length > 0) {
    window.addEventListener('scroll', animScroll);
    function animScroll() {
      for (let i = 0; i < anim.length; i++) {
        const animItem = anim[i];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
  
        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
  
        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add("active");
        } else {
          if (!animItem.classList.contains("anim__no-hide")) {
            animItem.classList.remove("active");
          }
        }
      }
    }
  
    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYoffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
  setInterval(() => {
    animScroll();
  }, 300);
    // setTimeout(() => {
    //   animScroll();
    // }, 300);
  }
 
  // mobile menu
  
  let burger = document.querySelector('.burger'),
   burgerSpanBefore = document.querySelector('.burger span::before'),
   burgerSpanAfter = document.querySelector('.burger span::after'),
   burgerSpan = document.querySelector('.burger span'),
    menu = document.querySelector('.header__nav-content'),
    mobile = document.querySelectorAll('.mobile')
    
    for (let i = 0; i < mobile.length; i++) {
        burger.addEventListener('click', ()=>{
            menu.classList.toggle('active')
            burger.classList.toggle('active')
            burgerSpan.classList.toggle('active')
            mobile[i].classList.add('active')
        });
        
    }
   
/****slider****/

// const slider = document.querySelector(".swiper");
// let mySwiper;
// function mobileSlider() {
//   if (window.innerWidth <= 768 && slider.dataset.mobile == "false") {
//     mySwiper = new Swiper(slider, {
//       slidesPerView: 2,
//       spaceBetween: 10,
//       // pagination: {
//       //   el: ".swiper-pagination",
//       //   clickable: true,
//       // },
//       // autoplay:true, 
//       loop: true,
//       slideClass: "swiper-slide",
//     });

//     slider.dataset.mobile = true;
//   } else if (window.innerWidth > 768 && mySwiper) {
//     slider.dataset.mobile = false;
//     mySwiper.destroy();
//   }
// }

// mobileSlider();

// window.addEventListener("resize", () => {
//   mobileSlider();
// });



