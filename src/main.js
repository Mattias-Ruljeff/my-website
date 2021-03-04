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
    }
    if (window.scrollY > 50) {
      headerNative.classList.add("color");
    }
    if (window.scrollY == 0) {
      headerNative.classList.remove("color");
    }
  });

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

  //   const observer1 = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.intersectionRatio > 0) {
  //         entry.target.style.animation = `anim1 1.5s forwards ease-out`;
  //       } else {
  //         entry.target.style.animation = "none";
  //       }
  //     });
  //   });

  //   const observer2 = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.intersectionRatio > 0) {
  //         entry.target.style.animation = `anim2 1.5s forwards ease-out`;
  //       } else {
  //         entry.target.style.animation = "none";
  //       }
  //     });
  //   });

  // const observer3 = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.intersectionRatio > 0) {
  //         entry.target.style.animation = `opacity 2s ease-out`;
  //       } else {
  //         entry.target.style.animation = "none";
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.2,
  //   }
  // );

  // const observer4 = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.intersectionRatio > 0) {
  //         entry.target.style.animation = `opacity 2s ease-out`;
  //       } else {
  //         entry.target.style.animation = "none";
  //       }
  //     });
  //   },
  //   {
  //     threshold: 0.2,
  //   }
  // );

  //   const observer4 = new IntersectionObserver((entry) => {
  //     if (entry[0].intersectionRatio > 0) {
  //       entry[0].target.style.animation = `anim4 2s forwards ease-out`;
  //     } else {
  //       entry[0].target.style.animation = "none";
  //     }
  //   });

  //   projectItemOdd.forEach((item) => {
  //     observer1.observe(item);
  //   });

  //   projectItemEven.forEach((item) => {
  //     observer2.observe(item);
  //   });

  // skillCardsEven.forEach((box) => {
  //   observer3.observe(box);
  // });
  // skillCardsOdd.forEach((box) => {
  //   observer4.observe(box);
  // });

  //   observer4.observe(imagee);

  //   hamburger.addEventListener("click", () => {
  //     hamburger.classList.toggle("active");
  //     mobile_menu.classList.toggle("active");
  //   });

  //   document.addEventListener("scroll", () => {
  //     let scroll_position = window.scrollY;
  //     if (scroll_position > 250) {
  //       header.style.backgroundColor = "#29323c";
  //     } else {
  //       header.style.backgroundColor = "transparent";
  //     }
  //   });

  //   menu_item.forEach((item) => {
  //     item.addEventListener("click", () => {
  //       hamburger.classList.remove("active");
  //       mobile_menu.classList.remove("active");
  //     });
  //   });
};
// Load app

app();
