document.querySelectorAll(".accordion").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const open = panel.style.display === "block";
    panel.style.display = open ? "none" : "block";
  });
});
