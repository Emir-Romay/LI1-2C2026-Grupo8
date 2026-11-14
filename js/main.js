const boton = document.getElementById("btn-modo");
boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    boton.textContent = document.body.classList.contains("oscuro")
        ? "☀️ Modo claro"
        : "🌙 Modo oscuro";
});