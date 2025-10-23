document.getElementById("btnComecar").addEventListener("click", () => {
  alert("Bem-vindo(a) à sua jornada fitness com o Fitbody!");
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 80) {
    navbar.style.backgroundColor = "rgba(26, 92, 67, 0.9)";
  } else {
    navbar.style.backgroundColor = "rgba(144, 238, 144, 0.9)";
  }
});