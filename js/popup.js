(function () {
  const popupLinks = document.querySelectorAll(".popup-link");
  const body = document.querySelector("body");
  const lockPadding = document.querySelectorAll(".lock-padding");

  let unlock = true;

  const timeout = 800;

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
    for (let i; i < popupCloseIcon.length; i++) {
      const el = popupCloseIcon[i];
      el.addEventListener("click", (e) => {
        popupCloseIcon(el.closest(".popup"));
        e.preventDefault();
      });
    }
  }

  const popupOpen = (curentPopup) => {
    if (curentPopup && unlock) {
      curentPopup.classList.add("open");
      curentPopup.addEventListener("click", (e) => {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"));
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

    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  };

const bodyUnLock=()=>{
  setTimeout(()=>{
    if(lockPadding.length>0){
    for(leti = 0; i<lockPadding.length; i++){
      const el = lockPadding[i];
      el.style.paddingRight="0px";
    }
  }
  body.style.paddingRight="0px"
  body.classList.remove("lock")
  },timeout)
}
})();
