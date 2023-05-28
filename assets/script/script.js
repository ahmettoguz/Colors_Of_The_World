let theme_Mode = null;

function perform_Theme_Change() {
  // save theme mode
  localStorage.setItem("theme_Mode", theme_Mode);

  // change overall theme
  $("body").attr("data-bs-theme", theme_Mode);

  if (theme_Mode == "dark") {
    // change switch status for the first run
    $("#theme_Switch").prop("checked", true);

    //chnage scroll bar color
    $("html").addClass("dark-scrollbar");
    $("html").removeClass("light-scrollbar");

    // change label of the switch
    $(`label.form-check-label[for="theme_Switch"]`).html("Dark Mode");

    // change logo
    $("#nav_Logo").attr("src", "../img/logo/logo_dark.png");
  } else {
    // change switch status for the first run
    $("#theme_Switch").prop("checked", false);

    // chnage scroll bar color
    $("html").addClass("light-scrollbar");
    $("html").removeClass("dark-scrollbar");

    // change label of the switch
    $(`label.form-check-label[for="theme_Switch"]`).html("Light Mode");

    // change logo
    $("#nav_Logo").attr("src", "../img/logo/logo_light.png");
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
  // get theme and initialize page
  theme_Mode = localStorage.getItem("theme_Mode");
  initialize_Theme_Mode();

  // add click event to switch button to change theme
  $(document).on("click", "#theme_Switch", function () {
    toggleTheme();
  });
});
