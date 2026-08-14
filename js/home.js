  
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}

/* BUTTON CHANGE LOGIC */
const btn = document.getElementById("missionBtn");

btn.addEventListener("click", function () {
  btn.textContent = "Claim";
  btn.classList.add("clicked-btn");
});