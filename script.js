
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
    });
});

const formulario = document.getElementById('formulario-contacto');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if(nombre === '' || correo === '' || mensaje === '') {
        alert('Por favor completa todos los campos.');
    } else {
        alert('¡Formulario enviado correctamente!');
        formulario.reset();
    }
});

const botonModoOscuro = document.getElementById('modo-oscuro-toggle');

botonModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    
    if (document.body.classList.contains('dark-mode')) {
        botonModoOscuro.textContent = '☀️';
    } else {
        botonModoOscuro.textContent = '🌙';
    }
});

