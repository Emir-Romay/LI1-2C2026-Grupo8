const boton = document.getElementById("btn-modo");
const estadoGuardado = localStorage.getItem("modoOscuro");

if (estadoGuardado === "activo") {
    document.body.classList.add("oscuro");
    boton.textContent = "☀️ Modo claro";
}

boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    const esOscuro = document.body.classList.contains("oscuro");
    boton.textContent = esOscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
    localStorage.setItem("modoOscuro", esOscuro ? "activo" : "inactivo");
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("⚠️ Ingresá un correo electronico valido.");
        return;
    }

    alert("✅ Mensaje enviado correctamente. ¡Gracias por contactarnos!");
    form.reset();
});