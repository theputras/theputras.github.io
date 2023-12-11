function goBack() {
    history.go(-1);
  }
  
  const button = document.querySelector(".back-button");
  button.addEventListener("click", goBack);