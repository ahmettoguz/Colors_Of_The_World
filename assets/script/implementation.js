$(function () {
  $(".summary").css({ top: 0, opacity: 1 });

  $("html, body").animate({ scrollTop: 0 }, 10);

  let totalDelay = 200;

  for (let i = 1; i <= 6; i++) {
    let text = ".step_" + i;
    let element = text.valueOf();

    setTimeout(() => {
      // display at normal place
      $(element).css({ left: 0, opacity: 1 });

      // Animate the scrolling to the target element
      let targetOffset = $(element).offset().top;

      $("html, body").animate({ scrollTop: targetOffset - 300 }, 100);
    }, totalDelay);
    totalDelay += 500;
  }
});
