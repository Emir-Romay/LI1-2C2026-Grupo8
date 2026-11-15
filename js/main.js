const boton = document.getElementById("btn-modo");
boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    boton.textContent = document.body.classList.contains("oscuro")
        ? "☀️ Modo claro"
        : "🌙 Modo oscuro";
});

const form = document.getElementById("form-contacto");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        alert("⚠️ Completá todos los campos obligatorios.");
        return;
    }

    alert("✅ Mensaje enviado correctamente. ¡Gracias por contactarnos!");
    form.reset();
});