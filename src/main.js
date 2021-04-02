import App from "./app.js";

const app = async () => {
  document.getElementById("app").appendChild(await App());

  //Native menu

  const hamburgerMenuIcon = document.querySelector(".hamburger-menu");
  const navbar = document.querySelector(".navbar");
  const hamburgerMenuUl = document.querySelector(".nav-list");

  hamburgerMenuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
  });

  hamburgerMenuUl.addEventListener("click", () => {
    navbar.classList.toggle("change");
  });

  // Header

  const headerDesktop = document.querySelector(".desktop");
  const headerNative = document.querySelector(".native");
  let nativActive = false

  window.addEventListener("scroll", () => {
    if (window.innerWidth > 450) {
      if (window.scrollY > 50) {
        headerDesktop.classList.add("nav-scroll");
        headerDesktop.classList.remove("nav-scroll-top");
      }
      if (window.scrollY < 50) {
        headerDesktop.classList.remove("nav-scroll");
        headerDesktop.classList.add("nav-scroll-top");
      }
    } else {
      nativActive = true
      if (window.scrollY > 50) {

        headerNative.classList.add("color");
      }
      if (window.scrollY == 0) {
        headerNative.classList.remove("color");
      }

    }
  });

  const glasses = document.querySelector("#glasses")
  const profileDiv = document.querySelector("#about-card")
  profileDiv.addEventListener("mouseover", (event) => {
    if(nativActive){
      glasses.style.transition = "0.4s ease-out"
      glasses.style.transform = "translateX(301%)"
    } else {
      glasses.style.transition = "0.4s ease-out"
      glasses.style.transform = "translateX(155%)"
    }

  })
  profileDiv.addEventListener("mouseleave", (event) => {
    glasses.style.transition = "0.4s ease-in"
    glasses.style.transform = "translateX(0%)"
  })
  console.log(glasses)


  //Load event

  window.addEventListener("load", (event) => {
    const prevButton = document.querySelector("#prevButton");
    const nextButton = document.querySelector("#nextButton");
    let counter = 0;
    if (counter <= 0) {
      prevButton.style.display = "none";
    }

    //Projects carousel

    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselCards = document.querySelectorAll(".carousel-card");
    const projectDiv = document.querySelector("#projects");
    const carouselCardMargin = parseInt(
      window.getComputedStyle(carouselCards[0]).marginLeft
    );

    const size = carouselCards[0].clientWidth + carouselCardMargin * 2;

    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    nextButton.addEventListener("click", () => {
      counter++;
      if (counter !== 0 && counter < carouselCards.length - 1) {
        nextButton.style.display = "flex";
        prevButton.style.display = "flex";
      }

      if (counter >= carouselCards.length - 1) {
        nextButton.style.display = "none";
        carouselSlide.style.transition = "transform 1s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      } else {
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      }
    });
    prevButton.addEventListener("click", () => {
      counter--;
      if (counter <= 0) {
        prevButton.style.display = "none";
      }
      if (counter !== 0 && counter < carouselCards.length - 1) {
        nextButton.style.display = "flex";
        prevButton.style.display = "flex";
      }
      if (counter < 0) {
        counter = carouselCards.length - 1;
        carouselSlide.style.transition = "transform 1s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      } else {
        carouselSlide.style.transition = "transform 0.5s ease-in-out";
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
      }
    });
  });

  // TODO - fix modal window

  // // Get the modal
  // const modal = document.getElementById("myModal");

  // // Get the button that opens the modal
  // const btn = document.getElementById("myBtn");

  // // Get the <span> element that closes the modal
  // const span = document.getElementsByClassName("close")[0];

  // // When the user clicks on the button, open the modal
  // btn.onclick = function () {
  //   modal.style.display = "block";
  // };

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function () {
  //   modal.style.display = "none";
  // };
  
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function (event) {
    //   if (event.target == modal) {
      //     modal.style.display = "none";
      //   }
      // };
      
      // TODO - add animation on load

      const cvDidv = document.querySelector("#cv-text")
      const cvImages = document.querySelector("#cv-image")
      const projectDiv = document.querySelector("#projects")
      const aboutDiv = document.querySelector("#about-card")

    const observerSlideFromLeft = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0 ) {
          entry.target.style.animation = `slide-from-left 1s ease-in forwards`;
          observerSlideFromLeft.unobserve(cvDidv)
        } else {
          entry.target.style.animation = "none";
        }
      });
    });
    const observerSlideFromRight = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0 ) {
          entry.target.style.animation = `slide-from-right 1s ease-in forwards`;
          observerSlideFromRight.unobserve(cvImages)
        } else {
          entry.target.style.animation = "none";
        }
      });
    });
    const observerSlideFromBottom = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0 ) {
          entry.target.style.animation = `slide-from-bottom 1s ease-in forwards`;
          observerSlideFromBottom.unobserve(projectDiv)
        } else {
          entry.target.style.animation = "none";
        }
      });
    });

    
    observerSlideFromLeft.observe(cvDidv)

    observerSlideFromRight.observe(cvImages)
    
    observerSlideFromBottom.observe(projectDiv)

};
// Load app

app();
