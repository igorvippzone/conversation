(function () {
  const toolsLinks = document.querySelectorAll(".tools-link");

  if (toolsLinks.length > 0) {
    for (let i = 0; i < toolsLinks.length; i++) {
      const toolsLink = toolsLinks[i];
      toolsLink.addEventListener("click", (e) => {
        const toolsName = toolsLink.getAttribute("href").replace("#", "");
        const curentTools = document.getElementById(toolsName);
        // popupOpen(curentPopup);
        e.preventDefault();
        console.log(toolsName);
      });
    }
  }
  
})();
