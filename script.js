const imgContainer = document.getElementById('img-container')
const popupContent = document.querySelector(".b-popup-content")
const closeButtonPopup = document.getElementById('lock-popup');
const popup = document.getElementById('popup');
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);


const cardCount = carousel.querySelectorAll("[data-target='card']").length;


let offset = 0;
const maxX = -((cardCount / 2) * carouselWidth + 
               (cardMarginRight * (cardCount / 2)) - 
               carouselWidth - cardMarginRight);
leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
})
imgContainer.addEventListener("click", function(event) {
    popup.style.display = 'block';
    popupContent.src = event.target.src
});
closeButtonPopup.addEventListener("click", function() {
    popup.style.display = 'none';
});
