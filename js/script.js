//toma los datos del formulario al momento que se envia
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    //toma los valores de cada campo por el id
    const datosFormulario = {
        operacion: document.getElementById("operacion").value,
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        email: document.getElementById("email").value,
        localidad: document.getElementById("localidad").value,
        tipoPropiedad: document.getElementById("floatingSelectGrid").value,
        comentarios: document.getElementById("comentarios").value
    };

    // muestra datos en la consola
    console.log("Datos del formulario:", datosFormulario);
});
