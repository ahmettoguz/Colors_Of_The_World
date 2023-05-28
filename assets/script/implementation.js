$(function () {
  $(".summary").css({ top: 0, opacity: 1 });

  $("html, body").animate({ scrollTop: 0 }, 100);

  let totalDelay = 1000;

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
    totalDelay += 1000;
  }
});
