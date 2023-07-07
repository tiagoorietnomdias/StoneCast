function scrollToNextSection() {
  const nextSection = document.getElementsByClassName('second-page')[0];
  nextSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToHowItWorks() {
  const nextSection = document.getElementsByClassName('second-page')[0];
  nextSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToPricingPlans() {
  const nextSection = document.getElementsByClassName('pricing-plans')[0];
  nextSection.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener("DOMContentLoaded", function() {
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button.closest("[data-carousel]").querySelector("ul[data-slides]")
    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0
    slides.children[newIndex].dataset.active=true
    activeSlide.removeAttribute("data-active")
    console.log("offset"+ offset)
    console.log("index"+newIndex)
 
 
  })

});});