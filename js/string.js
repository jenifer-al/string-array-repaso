
// --- LÓGICA PURA (Independiente) ---
// Esta función no sabe qué es el DOM, solo procesa datos.
// Es 100% independiente y reutilizable en cualquier proyecto.
const separarTexto = (texto, separador) => {
    return texto.split(separador);
};

// --- LÓGICA DE INTERFAZ (El "Puente") ---
// Solo esto se encarga de conectar el HTML con la lógica pura.
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("calcular");
    const input = document.getElementById("texto");
    const resultado = document.getElementById("resultado");

    boton.addEventListener("click", () => {
        // Obtenemos los datos del DOM
        const cadena = input.value;
        const separador = ' '; // Puedes cambiarlo por otro caracter si quieres
        
        // Llamamos a la función independiente
        const arrayResultante = separarTexto(cadena, separador);
        
        // Mostramos el resultado
        resultado.textContent = JSON.stringify(arrayResultante);
    });
});