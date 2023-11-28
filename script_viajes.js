document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const tituloViaje = urlParams.get('titulo');
    const imagenViaje = urlParams.get('imagen');

    mostrarInformacionViaje(tituloViaje, imagenViaje);
});

function mostrarInformacionViaje(titulo,imagen) {
    const informacionViajeContainer = document.getElementById('informacion-viaje-container');
    const html = `
        <h2>${titulo}</h2>
        <div class="detalles-viaje">
            <img src="${imagen}" alt="${titulo}" width="auto" height="auto">
        </div>
        
    `;

    informacionViajeContainer.innerHTML = html;
}