// Código de los perfiles de usuario ensayando cambios en github
let esAdministrador = false;

// Cambiar el perfil al hacer clic en un botón
function cambiarPerfil() {
    esAdministrador = !esAdministrador;
    console.log('Perfil de administrador:', esAdministrador);
}




// Código del carrito de compras y el inventario
const inventario = [
    { id: 1, nombre: 'Planta Tropical', precio: 20000, stock: 0 },
    { id: 2, nombre: 'Planta Suculenta', precio: 15000, stock: 3 },
    // Agregar más plantas aquí...
];

const carrito = [];

function obtenerPlantaPorId(id) {
    return inventario.find(planta => planta.id === id);
}

function reducirStock(id, cantidad) {
    const planta = obtenerPlantaPorId(id);
    if (planta) {
        planta.stock -= cantidad;
    }
}

function agregarAlCarrito(id) {
    const planta = obtenerPlantaPorId(id);
    if (planta && planta.stock > 0) {
        carrito.push(planta);
        reducirStock(id, 1);
        actualizarCarrito();
const imagenUrl = `C:\Users\JANIER\ventaplantas\src\imagenes\planta2`; // se agrega la URL de la imagen
        identificarPlantaPorImagen(imagenUrl);        
    } else {
        alert('La planta no está disponible en stock.');
    }
}


function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';
    carrito.forEach(planta => {
        const plantaElement = document.createElement('li');
        plantaElement.textContent = planta.nombre;
        carritoLista.appendChild(plantaElement);
    });
}

function mostrarCarrito() {
    const carritoElement = document.getElementById('carrito');
    carritoElement.style.display = 'block';
}
