document.addEventListener("DOMContentLoaded", function() {
  function goBack() {
    history.go(-1);
  }

  const button = document.querySelector(".back-to-history");
  button.addEventListener("click", goBack);
});