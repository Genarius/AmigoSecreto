// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Variables globales
let amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigoInput = document.getElementById('amigo');

// Función para inicializar las variables
function inicializar() {
    amigos = []; // Reiniciar la lista de amigos
    listaAmigos.innerHTML = ""; // Limpiar la lista de amigos
    resultado.innerHTML = ""; // Limpiar resultados anteriores
    amigoInput.value = ""; // Limpiar el campo de entrada
    amigoInput.focus(); // Mantener el foco en el input
}

// Llamar a la función de inicialización al cargar la página
document.addEventListener('DOMContentLoaded', inicializar);

function agregarAmigo() {
    const amigoNombre = capitalizarNombre(amigoInput.value.trim()); // Limpiar espacios en blanco y capitalizar el nombre

    // Si hay un ganador previo, inicializar las variables
    if (resultado.children.length > 0) {
        inicializar();
    }
    //Lo anterior para que el sorteo pueda continuar indefinidamente.

    // Validar si el nombre está vacío o si ya existe en la lista
    if (!amigoNombre) {
        alert("Por favor, ingrese un nombre válido.");
    } else if (amigos.includes(amigoNombre)) {
        alert(`El nombre "${amigoNombre}" ya está en la lista.`);
    } else {
        amigos.push(amigoNombre); // Agregar a la lista de amigos

        // Añadir el nombre a la lista visible
        const li = document.createElement('li');
        li.textContent = amigoNombre; // Guardar el nombre
        listaAmigos.appendChild(li);
    }

    // Limpiar el campo de entrada y mantener el foco
    amigoInput.value = "";
    amigoInput.focus();
}

// Función para capitalizar cada palabra en el nombre compuesto
function capitalizarNombre(nombre) {
    return nombre
        .split(' ') // Separar por espacios
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()) // Capitalizar cada palabra
        .join(' '); // Unir de nuevo en una cadena
}

// Función para sortear un amigo
function sortearAmigo() {
    // Verificar si hay nombres en la lista
    if (amigos.length === 0) {
        alert("No hay nombres de amistades para sortear.");
        return; // Salir de la función
    }

    // Seleccionar un nombre aleatorio
    const nombreGanador = amigos[Math.floor(Math.random() * amigos.length)];

    // Limpiar la lista de amigos en la pantalla y el resultado anterior
    listaAmigos.innerHTML = ""; // Vaciar la lista de amigos
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    // Mostrar el nombre ganador en pantalla
    const li = document.createElement('li');
    li.textContent = 'El amigo secreto sorteado es: ' + nombreGanador;
    li.style.color = 'green'; // Color verde
    li.style.fontWeight = 'bold'; // Letra bold
    resultado.appendChild(li);
}
