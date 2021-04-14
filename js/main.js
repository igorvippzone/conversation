(function () {
  const headerBackground = document.getElementById("headerBackground");
  const headerTools = document.getElementById("headerTools");

  const scrollOpacity = () => {
    const heightOfWindow = window.innerHeight;
    const contentScrolled = window.pageYOffset;
    const total = contentScrolled / heightOfWindow;
    const resultOpacity = 1 - total * 2;

    if (resultOpacity < 0 || resultOpacity > 1) return;

    headerBackground.style.opacity = contentScrolled <= 0 ? 1 : resultOpacity;
  };

  const toolsOpacity = () => {
    const contentScrolled = window.pageYOffset;
    if (contentScrolled >= headerTools.offsetHeight) {
      headerTools.style.backgroundColor = "rgba(255, 255, 255, 1)";
    } else {
      headerTools.style.backgroundColor = "rgba(255, 255, 255, .9)";
    }
  };

  const scrollFunc = () => {
    scrollOpacity();
    toolsOpacity();
  };

  window.addEventListener("scroll", scrollFunc);
})();
