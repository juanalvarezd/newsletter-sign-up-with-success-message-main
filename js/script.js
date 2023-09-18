const d = document;

function validar(){
  const $emailInput = d.querySelector(".form__input-email"),
  $errorMsj = d.querySelector(".form__error-msj");
  const pattern = new RegExp($emailInput.getAttribute("pattern"));
  d.addEventListener("keyup", e =>{
    if (e.target.matches(".form__input-email")) {
      if (pattern.test($emailInput.value)) {
          $errorMsj.classList.remove("form__error-active");
          $emailInput.classList.remove("form__input-error")
        }else{
          $errorMsj.classList.add("form__error-active");
          $emailInput.classList.add("form__input-error")
      }      
    }
  });

}

function submitForm(){
  const $signUp = d.querySelector(".sign-up"),
  $success = d.querySelector(".success"),
  $form = d.querySelector(".form"),
  $dismissBtn = d.querySelector(".success__btn");

  d.addEventListener("submit", e =>{
    $signUp.classList.add("hidden");
    $success.classList.remove("hidden")
    e.preventDefault();
  });

  d.addEventListener("click", e =>{
    if (e.target.matches(".success__btn")) {
      $form.reset();
      $signUp.classList.remove("hidden");
      $success.classList.add("hidden");
    }
  });
}

d.addEventListener("DOMContentLoaded",e =>{
  validar();
  submitForm();
});