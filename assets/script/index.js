function toggleTheme() {
  // toggle theme
  const element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";

  // get theme mode for other elements
  const mode = element.dataset.bsTheme;

  // toggle label
  const label = $(`label.form-check-label[for="theme_Switch"]`);
  let output = mode == "dark" ? "Dark Mode" : "Light Mode";
  $(label).html(output);

  // toggle logo
  src =
    mode == "dark"
      ? "./assets/img/logo/logo_dark.png"
      : "./assets/img/logo/logo_light.png";
  $("#nav_Logo").attr("src", src);

  // toggle background hexagons
  output =
    mode == "dark"
      ? "./assets/img/hexagon/dark_hexagon_2.jpg"
      : "./assets/img/hexagon/light_hexagon6.jpg";
  output = "url('" + output + "')";
  $(".section").css("background-image", output);
}

// main -----------------------------------------------------
let vision_and_mission_visible = null;
let screenHeight = window.innerHeight;
let scrollPosition = window.scrollY;

function scrollElementInvisible() {
  // make mission and vision invisible
  setTimeout(() => {
    $(".card").css("opacity", 0);
    vision_and_mission_visible = false;
  }, 500);
}

function scrollElementVisible() {
  // mission and vision
  if (
    vision_and_mission_visible == false &&
    scrollPosition / screenHeight > 0.5 &&
    scrollPosition / screenHeight < 2.5
  ) {
    $(".card").animate({ opacity: 1 }, 1000);
    vision_and_mission_visible = true;
  }
}

$(function () {
  // scroll top
  $(this).scrollTop(0);

  // make elements invisible for scroll
  scrollElementInvisible();

  // add click event to switch button to change theme
  $(document).on("click", "#theme_Switch", function () {
    toggleTheme();
  });

  // scroll event
  window.addEventListener("scroll", function () {
    screenHeight = window.innerHeight;
    scrollPosition = window.scrollY;

    // change nav bar constantly
    if (scrollPosition / screenHeight > 0.2) {
      if ($("nav").hasClass("opacity-100")) {
        $("nav").addClass("opacity-75");
        $("nav").removeClass("opacity-100");
      }
    } else {
      if ($("nav").hasClass("opacity-75")) {
        $("nav").addClass("opacity-100");
        $("nav").removeClass("opacity-75");
      }
    }

    // make elements visible with scroll
    scrollElementVisible();
  });
});
