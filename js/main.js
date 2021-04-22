(() => {
  const headerBackground = document.getElementById("headerBackground");
  const headerTools = document.getElementById("headerTools");
  const headerFeedback = document.getElementById("feedback");

  const scrollOpacity = (scroll) => {
    const heightOfWindow = window.innerHeight;
    const contentScrolled = window.pageYOffset;
    const total = contentScrolled / heightOfWindow;

    const total1 = 1 - total * 2;

    // console.log(total, "||||", total1);

    if (total < 0) {
      scroll.style.opacity = 1;
    } else if (total > 1) {
      scroll.style.opacity = 0;
    } else {
      scroll.style.opacity = total1;
    }
  };

  const toolsOpacity = () => {
    const contentScrolled = window.pageYOffset;

    const widthOfWindow = window.innerWidth;

    if (widthOfWindow <= 570 && contentScrolled <= headerTools.offsetHeight) {
      console.log("qwe", widthOfWindow);

      headerTools.style.backgroundColor = "transparent";
    } else if (
      widthOfWindow <= 570 &&
      contentScrolled >= headerTools.offsetHeight
    ) {
      headerTools.style.backgroundColor = "rgba(255, 255, 255, 1)";
    }

    if (widthOfWindow > 570 && contentScrolled >= headerTools.offsetHeight) {
      headerTools.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else if (
      widthOfWindow > 570 &&
      contentScrolled < headerTools.offsetHeight
    ) {
      headerTools.style.backgroundColor = "rgba(255, 255, 255, .9)";
    }
  };

  const scrollFunc = () => {
    scrollOpacity(headerBackground);
    toolsOpacity();
  };

  window.addEventListener(`resize`, toolsOpacity);

  window.addEventListener("scroll", scrollFunc);
})();
