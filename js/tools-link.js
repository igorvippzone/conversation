(function () {
  const toolsLinks = document.querySelectorAll(".tools-link");

  if (toolsLinks.length > 0) {
    for (let i = 0; i < toolsLinks.length; i++) {
      const toolsLink = toolsLinks[i];
      toolsLink.addEventListener("click", (e) => {
        toolsLink.classList.toggle("link-active");
        const toolsName = toolsLink.getAttribute("href").replace("#", "");
        const curentTools = document.getElementById(toolsName);
        toolsOpen(curentTools);
        e.preventDefault();
        console.log(toolsName);
      });
    }
  }

  const toolsOpen = (curentTools) => {
    if (curentTools) {
      curentTools.classList.toggle("open");
    }
  };
})();
