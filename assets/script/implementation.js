$(function () {
  $(".summary").css({ top: 0, opacity: 1 });

  $("html, body").scrollTop(0);

  let totalDelay = 500;

  for (let i = 1; i <= 6; i++) {
    let text = ".step_" + i;
    let element = text.valueOf();
    element = $(element);

    setTimeout(() => {
      // display at normal place
      element.css({ left: 0, opacity: 1 });
    }, totalDelay);
    totalDelay += 200;
  }
});
