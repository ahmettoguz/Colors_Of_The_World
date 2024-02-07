let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;
let scrollPosition = window.scrollY;
let theme_Mode = null;

function perform_Theme_Change() {
  // save theme mode
  localStorage.setItem("theme_Mode", theme_Mode);

  // change overall theme
  $("body").attr("data-bs-theme", theme_Mode);

  if (theme_Mode == "dark") {
    // change switch icon
    $(".theme-icon").html(`<i class="fa-solid fa-moon"></i>`);

    //chnage scroll bar color
    $("html").addClass("dark-scrollbar");
    $("html").removeClass("light-scrollbar");

    // change logo
    $("#nav_Logo").attr("src", "./assets/img/logo/logo_dark.png");

    // change background hexagons
    output = "./assets/img/hexagon/dark_hexagon_1.jpg";
    output = "url('" + output + "')";
    $(".section_1, .section_5").css("background-image", output);
    output = "./assets/img/hexagon/dark_hexagon_2.png";
    output = "url('" + output + "')";
    $(".section_3, .section_7").css("background-image", output);
  } else {
    // change switch icon
    $(".theme-icon").html(`<i class="fa-solid fa-brightness"></i>`);

    // chnage scroll bar color
    $("html").addClass("light-scrollbar");
    $("html").removeClass("dark-scrollbar");

    // change logo
    $("#nav_Logo").attr("src", "./assets/img/logo/logo_light.png");

    // change background hexagons
    output = "./assets/img/hexagon/light_hexagon1.jpg";
    output = "url('" + output + "')";
    $(".section_1").css("background-image", output);
    output = "./assets/img/hexagon/light_hexagon2.jpg";
    output = "url('" + output + "')";
    $(".section_3").css("background-image", output);
    output = "./assets/img/hexagon/light_hexagon3.jpg";
    output = "url('" + output + "')";
    $(".section_5").css("background-image", output);
    output = "./assets/img/hexagon/light_hexagon4.jpg";
    output = "url('" + output + "')";
    $(".section_7").css("background-image", output);
  }
}

function toggleTheme() {
  // change current theme variable
  theme_Mode = theme_Mode == "light" ? "dark" : "light";

  perform_Theme_Change();
}

function initialize_Theme_Mode() {
  // init light if no previous login
  if (theme_Mode == null) {
    theme_Mode = "light";
  }

  perform_Theme_Change();
}

// debounce function
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function performStickyNavigation() {
  // select elements
  const navElement = document.getElementsByTagName("nav")[0];
  const section0 = document.getElementById("section_0");

  // observer api callback
  const obsCallback = function (entries, observer) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      navElement.classList.remove("opacity-50");
      navElement.classList.add("opacity-1");
    } else {
      navElement.classList.remove("opacity-1");
      navElement.classList.add("opacity-50");
    }
  };

  // observer api options
  const obsOptions = {
    root: null,
    threshold: 0.6,
  };

  // start observer api for navigation bar
  const observer = new IntersectionObserver(obsCallback, obsOptions);
  observer.observe(section0);
}

function animateSections() {
  // select elements
  const navElement = document.getElementsByTagName("nav")[0];
  const sectionElements = document.querySelectorAll(".sctn");

  // get navigation bar height
  const navHeight = navElement.getBoundingClientRect().height;

  // observer api callback
  const obsCallback = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    let element = document.querySelector(
      `#${entry.target.getAttribute("id").replace("_", "")}_Box`
    );

    element.classList.remove("section-hidden");
    observer.unobserve(entry.target);
  };

  // observer api options
  const obsOptions = {
    root: null,
    threshold: 0.5,
    // rootMargin: `-${navHeight}px`,
  };

  // start observer api for navigation bar
  const observer = new IntersectionObserver(obsCallback, obsOptions);
  sectionElements.forEach((element) => {
    observer.observe(element);
  });
}

// main -----------------------------------------------------
history.scrollRestoration = "manual";
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

$(function () {
  // get theme and initialize page
  theme_Mode = localStorage.getItem("theme_Mode");
  initialize_Theme_Mode();

  // add click event to switch button to change theme
  $(document).on("click", ".theme-icon", function () {
    toggleTheme();
  });

  // scroll event for navigation
  performStickyNavigation();

  // fade in effect in scroll
  animateSections();
});
