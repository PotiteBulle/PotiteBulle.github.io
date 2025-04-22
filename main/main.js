window.addEventListener("DOMContentLoaded", () => {
    const boot = document.getElementById("boot");
    const main = document.getElementById("main-content");
  
    // Transition après 6 secondes : boot terminé
    setTimeout(() => {
      boot.style.display = "none";
      main.classList.remove("hidden");
      main.classList.add("show");
    }, 6000);
  });
  