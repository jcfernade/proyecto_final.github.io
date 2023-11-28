function cambiarDestinos() {
    var tipoViaje = document.getElementById('tipoViaje').value;
    var destinosSelect = document.getElementById('destino');
    destinosSelect.innerHTML = '';

    if (tipoViaje === 'crucero') {
        agregarOpcion(destinosSelect, 'destino1', 'Mediterráneo');
        agregarOpcion(destinosSelect, 'destino2', 'Fiordos Noruegos');
        agregarOpcion(destinosSelect, 'destino3', 'Caribe');
        agregarOpcion(destinosSelect, 'destino4', 'Emiratos Árabes');
    } else if (tipoViaje === 'vuelo') {
        agregarOpcion(destinosSelect, 'destino5', 'Portugal');
        agregarOpcion(destinosSelect, 'destino6', 'Italia');
        agregarOpcion(destinosSelect, 'destino7', 'Reino Unido');
        agregarOpcion(destinosSelect, 'destino8', 'Francia');
        agregarOpcion(destinosSelect, 'destino9', 'Suiza');
        agregarOpcion(destinosSelect, 'destino10', 'Polonia');
        agregarOpcion(destinosSelect, 'destino11', 'Irlanda');
        agregarOpcion(destinosSelect, 'destino12', 'Dinamarca');
        agregarOpcion(destinosSelect, 'destino13', 'Estados Unidos');
        agregarOpcion(destinosSelect, 'destino14', 'Cuba');
        agregarOpcion(destinosSelect, 'destino15', 'China');
        agregarOpcion(destinosSelect, 'destino16', 'Grecia');
    }
}

function agregarOpcion(selectElement, value, text) {
    var option = document.createElement('option');
    option.value = value;
    option.text = text;
    selectElement.add(option);
}

function enviarFormulario() {
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('gracias').style.display = 'block';
}