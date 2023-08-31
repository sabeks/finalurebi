console.log("zdzdzd");
function initSlider() {
  const slides = document.querySelectorAll(".slide");
  const sliderWrapper = document.querySelector(".slider-wrapper");
  let activeIndex = 0;
  function renderSlides() {
    slides.forEach((slide, index) => {
      if (activeIndex === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  renderSlides();
  function showNext() {
    if (activeIndex === slides.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    renderSlides();
  }
  let sliderIntervalId = null;

  function startAutoSliderFn() {
    sliderIntervalId = setInterval(showNext, 5000);
  }
  startAutoSliderFn();
}
initSlider();

const serviceContainer = document.getElementById("service-container");

const originalText = {
  text1: `<i class="fab fa-bitcoin service-icon"></i>
    <h3 class="service-h3">bitcoin</h3>`,
  text2: `<i class="fas fa-bell service-icon"></i>
    <h3 class="service-h3">bell</h3>`,
  text3: `<i class="fab fa-html5 service-icon"></i>
    <h3 class="service-h3">HTML/CSS </h3>`,
  text4: `<i class="fab fa-js service-icon"></i>
    <h3 class="service-h3">JavaScript</h3>`,
  text5: `<i class="fas fa-gamepad service-icon"></i>
    <h3 class="service-h3">gamepad</h3>`,
  text6: ` <i class="fab fa-playstation service-icon"></i>
    <h3 class="service-h3">playstation</h3>`,
  text7: ` <i class="fab fa-steam service-icon"></i>
    <h3 class="service-h3">steam</h3>`,
  text8: `<i class="fab fa-xbox service-icon"></i>
    <h3 class="service-h3">xbox</h3>`,
};

const newText = {
  text1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus asperiores, `,
  text2: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus asperiores, `,
  text3: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus asperiores, .`,
  text4: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus asperiores,`,
  text5: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus asperiores`,
  text6: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus asperiores`,
  text7: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus asperiores.`,
  text8: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus asperiores`,
};

serviceContainer.addEventListener("mouseover", function (event) {
  const target = event.target.closest(".service");
  if (target) {
    const id = target.getAttribute("id");
    target.innerHTML = newText[id];
    target.querySelector(".service-icon").style.display = "none";
  }
});

serviceContainer.addEventListener("mouseout", function (event) {
  const target = event.target.closest(".service");
  if (target) {
    const id = target.getAttribute("id");
    target.innerHTML = originalText[id];
    target.querySelector(".service-icon").style.display = "inline-block";
  }
});
let commentsSlides = document.querySelectorAll(".comments-slide");
let commentsButton1 = document.getElementById("comments-button-1");
let commentsButton2 = document.getElementById("comments-button-2");
let commentsButton3 = document.getElementById("comments-button-3");

commentsSlides[0].classList.add("active");

commentsButton1.addEventListener("click", function () {
  commentsSlides[0].classList.add("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton2.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.add("active");
  commentsSlides[2].classList.remove("active");
});

commentsButton3.addEventListener("click", function () {
  commentsSlides[0].classList.remove("active");
  commentsSlides[1].classList.remove("active");
  commentsSlides[2].classList.add("active");
});
