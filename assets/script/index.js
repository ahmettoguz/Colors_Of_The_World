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
  console.log(output);
  $(".section").css("background-image", output);
}

// main -----------------------------------------------------
$(function () {
  // add click event to switch button to change theme
  $(document).on("click", "#theme_Switch", function () {
    toggleTheme();
  });
});
