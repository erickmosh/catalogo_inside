// Obtener todos los botones de "Ver más"
var verMasButtons = document.getElementsByClassName('ver-mas');

// Agregar un event listener a cada botón
for (var i = 0; i < verMasButtons.length; i++) {
  verMasButtons[i].addEventListener('click', toggleDetalles);
}

// Función para mostrar/ocultar los detalles del producto
function toggleDetalles() {
  var detalles = this.nextElementSibling;
  detalles.classList.toggle('oculto');
}
// Obtén una referencia al elemento de encabezado
const header = document.querySelector('header');

// Agrega una clase CSS al encabezado
header.classList.add('estilo-adicional');

// Obtén una referencia a los elementos de producto
const productos = document.querySelectorAll('.producto');

// Itera sobre los elementos de producto y agrega estilos individuales
productos.forEach((producto) => {
  producto.classList.add('estilo-producto');
});
