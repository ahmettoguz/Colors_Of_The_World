$(function () {
  let totalDelay = 1000;

  for (let i = 1; i <= 3; i++) {
    let text = ".box_" + i;
    let element = text.valueOf();

    setTimeout(() => {
      // display at normal place
      $(element).css({ opacity: 1 });
    }, totalDelay);
    totalDelay += 1000;
  }
});
