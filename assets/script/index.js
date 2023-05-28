let sections_Visibility = [null, null, null];
let screenHeight = window.innerHeight;
let scrollPosition = window.scrollY;
let theme_Mode = null;

function scrollElementInvisible() {
  // make sections invisible
  setTimeout(() => {
    for (let i = 0; i < sections_Visibility.length; i++) {
      let text = `#section${i + 1}_Box`;
      let element = text.valueOf();

      $(element).css("opacity", 0);
      sections_Visibility[i] = false;
    }
  }, 500);
}

function scrollElementVisible() {
  for (let i = 0; i < sections_Visibility.length; i++) {
    let text = `#section${i + 1}_Box`;
    let element = text.valueOf();

    $(element).css("opacity", 0);
    sections_Visibility[i] = false;

    if (
      sections_Visibility[i] == false &&
      scrollPosition / screenHeight > i + 0.5 &&
      scrollPosition / screenHeight < i + 2.5
    ) {
      $(element).animate({ opacity: 1 }, 750);
      sections_Visibility[i] = true;
    }
  }
}

function perform_Theme_Change() {
  // save theme mode
  localStorage.setItem("theme_Mode", theme_Mode);

  // change overall theme
  $("body").attr("data-bs-theme", theme_Mode);

  // change switch
  if (theme_Mode == "dark") {
    // change switch status for the first run
    $("#theme_Switch").prop("checked", true);

    //chnage scroll bar color
    $("html").addClass("dark-scrollbar");
    $("html").removeClass("light-scrollbar");

    // change label of the switch
    $(`label.form-check-label[for="theme_Switch"]`).html("Dark Mode");

    // change logo
    $("#nav_Logo").attr("src", "./assets/img/logo/logo_dark.png");

    // change background hexagons
    output = "./assets/img/hexagon/dark_hexagon_2.jpg";
    output = "url('" + output + "')";
    $(".section").css("background-image", output);
  } else {
    // change switch status for the first run
    $("#theme_Switch").prop("checked", false);

    // chnage scroll bar color
    $("html").addClass("light-scrollbar");
    $("html").removeClass("dark-scrollbar");

    // change label of the switch
    $(`label.form-check-label[for="theme_Switch"]`).html("Light Mode");

    // change logo
    $("#nav_Logo").attr("src", "./assets/img/logo/logo_light.png");

    // change background hexagons
    output = "./assets/img/hexagon/light_hexagon6.jpg";
    output = "url('" + output + "')";
    $(".section").css("background-image", output);
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

// main -----------------------------------------------------
$(function () {
  // scroll top
  $("html").stop().animate({ scrollTop: 0 }, 100);
  $("body").stop().animate({ scrollTop: 0 }, 100);

  // make elements invisible for scroll
  scrollElementInvisible();

  // get theme and initialize page
  theme_Mode = localStorage.getItem("theme_Mode");
  initialize_Theme_Mode();

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
