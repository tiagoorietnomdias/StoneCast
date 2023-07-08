function scrollToNextSection() {
  const nextSection = document.getElementsByClassName('second-page')[0];
  nextSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToHowItWorks() {
  const nextSection = document.getElementsByClassName('second-page')[0];
  nextSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToProducts() {
  const nextSection = document.getElementsByClassName('products')[0];
  nextSection.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[data-carousel-button]")

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button.closest("[data-carousel]").querySelector("ul[data-slides]")
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
      slides.children[newIndex].dataset.active = true
      activeSlide.removeAttribute("data-active")
      console.log("offset" + offset)
      console.log("index" + newIndex)


    })

  });
});



var storedCountDownDate = localStorage.getItem('countDownDate');

if (storedCountDownDate) {

  var countDownDate = new Date(storedCountDownDate);
} else {

  var countDownDate = new Date();
  countDownDate.setDate(countDownDate.getDate() + 7);


  localStorage.setItem('countDownDate', countDownDate);
}


var countdownTimestamp = countDownDate.getTime();


function updateCountdown() {

  var now = new Date().getTime();


  var distance = countDownDate - now;


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);


  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  if (distance < 0) {

    countDownDate = new Date();
    countDownDate.setDate(countDownDate.getDate() + 7);


    localStorage.setItem('countDownDate', countDownDate);


    countdownTimestamp = countDownDate.getTime();
  }
}

var x = setInterval(updateCountdown, 1000);
