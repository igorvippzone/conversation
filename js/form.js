(() => {
  const inputPopups = document.querySelectorAll("input__popup");
  const name = document.getElementById("lastname");



  const validate = (input) =>{
    let a = input.value;
  if (a.length <= 0) {
    input.classList.add("error");
  }
  }
  // console.log(name.setCustomValidity("1"))
  window.addEventListener("input", validate)
})();
