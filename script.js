document.addEventListener("DOMContentLoaded", function () {
    const btnModoOscuro = document.getElementById("modo-oscuro-toggle");
    const body = document.body;
  
    btnModoOscuro.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
    });
  
    const formulario = document.getElementById("formulario-contacto");
    const campoNombre = formulario.querySelector(".formulario-contacto__campo:nth-of-type(1)");
    const campoCorreo = formulario.querySelector(".formulario-contacto__campo:nth-of-type(2)");
    const campoMensaje = formulario.querySelector(".formulario-contacto__campo:nth-of-type(3)");
  
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nombre = campoNombre.value.trim();
      const correo = campoCorreo.value.trim();
      const mensaje = campoMensaje.value.trim();
  
      if (!nombre || !correo || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
      }
  
      alert("Mensaje enviado. ¡Gracias por contactarme!");
      formulario.reset();
    });
  });
  