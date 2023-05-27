function toggleTheme() {
  // toggle theme
  const element = document.body;
  element.dataset.bsTheme =
    element.dataset.bsTheme == "light" ? "dark" : "light";

  // toggle label
  const label = $(`label.form-check-label[for="theme_Switch"]`);
  let mode = label.html();
  mode = mode == "Light Mode" ? "Dark Mode" : "Light Mode";
  $(label).html(mode);
}

// main -----------------------------------------------------
$(function () {
  // add click event to switch button to change theme
  $(document).on("click", "#theme_Switch", function () {
    toggleTheme();
  });
});
