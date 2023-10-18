const redirect = () => {
  window.location.replace("/404.html");
};

document.getElementById("banner-btn").addEventListener("click", redirect);

const buttons = document.querySelectorAll(".buy-btn");
buttons.forEach((button) => button.addEventListener("click", redirect));
