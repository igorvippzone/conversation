(() => {
  const popupLinks = document.querySelectorAll(".popup-link");
  const body = document.querySelector("body");
  const headerTools = document.querySelector(".header__tools");

  let unlock = true;

  const timeout = 500;
  //ищу все ссылки на попап
  if (popupLinks.length > 0) {
    for (let i = 0; i < popupLinks.length; i++) {
      const popupLink = popupLinks[i];
      popupLink.addEventListener("click", (e) => {
        const popupName = popupLink.getAttribute("href").replace("#", "");
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
        console.log(popupName);
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll(".close-popup");
  if (popupCloseIcon.length > 0) {
    for (let i = 0; i < popupCloseIcon.length; i++) {
      const el = popupCloseIcon[i];
      el.addEventListener("click", (e) => {
        console.log("close");
        popupClose(e.target.closest(".popup"));
        e.preventDefault();
      });
    }
  }

  const popupOpen = (curentPopup) => {
    if (curentPopup && unlock) {
      console.log("h", unlock);
      curentPopup.classList.add("open");
      bodyLock();
      curentPopup.addEventListener("click", (e) => {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
          console.log("hh", unlock);
        }
      });
    }
  };

  const popupClose = (popupActive, doUnlock = true) => {
    if (unlock) {
      popupActive.classList.remove("open");
      if (doUnlock) {
        bodyUnLock();
      }
    }
  };

  const bodyLock = () => {
    const lockPaddingValue =
      window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    body.style.paddingRight = lockPaddingValue;
    headerTools.style.paddingRight = lockPaddingValue;
    console.log(lockPaddingValue);
    body.classList.add("lock");
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  };

  const bodyUnLock = () => {
    setTimeout(() => {
      body.style.paddingRight = "0px";
      headerTools.style.paddingRight = "0px";
      body.classList.remove("lock");
    }, timeout);
  };
})();
