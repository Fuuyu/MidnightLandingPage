// @ts-nocheck

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  let dropdownMenu = document.getElementById("menu");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    dropdownMenu.style.top = "0";
  }
  else {
    dropdownMenu.style.top = "-100%";
    document.getElementById("check").checked = false;
  }
}
// slide comment class
$(".carousel").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: false,
  prevArrow:
    "<button type='button' class='slick-prev pull-left btns'>&larr;</button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right btns'>&rarr;</button>",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots:true
      },
    },
    {
      breakpoint: 764,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
});
//  accordion
const accordion = document.getElementsByClassName("accordion");
for (let index = 0; index < accordion.length; index++) {
  accordion[index].addEventListener("click", function () {
    this.classList.toggle("open");
  });
}
// alert when click subscribe
function rcm() {
  window.alert('Đăng kí thành công ');
}
