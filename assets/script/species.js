$(function () {
  let totalDelay = 100;

  for (let i = 1; i <= 11; i++) {
    let text = ".plant_" + i;
    let element = text.valueOf();

    setTimeout(() => {
      // display at normal place
      $(element).css({ opacity: 1 });
    }, totalDelay);
    totalDelay += 500;
  }
});
