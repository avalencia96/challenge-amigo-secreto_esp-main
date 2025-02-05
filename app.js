// Array para almacenar los nombres de los amigos
let amigos = [];


function agregarAmigo() {
  // Capturar el valor del campo de entrada (se asume que el input tiene id="amigo")
  let inputNombre = document.getElementById("amigo");
  let nombre = inputNombre.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Actualizar el array de amigos añadiendo el nombre usando push()
  amigos.push(nombre);

  // Limpiar el campo de entrada
  inputNombre.value = "";
}

function actualizarLista() {
    // Obtener el elemento de la lista donde se mostrarán los amigos (se asume que el elemento tiene id="listaAmigos")
    let lista = document.getElementById("listaAmigos");
  
    // Limpiar la lista existente para evitar duplicados
    lista.innerHTML = "";
  
    // Recorrer el arreglo 'amigos' y crear un elemento <li> por cada nombre
    for (let i = 0; i < amigos.length; i++) {
      // Crear un nuevo elemento <li>
      let li = document.createElement("li");
      // Asignar el nombre del amigo como texto del elemento
      li.textContent = amigos[i];
      // Agregar el elemento <li> a la lista
      lista.appendChild(li);
    }
  }

  function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
      alert("No hay amigos para sortear.");
      return;
    }
  
    // Generar un índice aleatorio basado en la longitud del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    // Obtener el nombre sorteado usando el índice generado
    let amigoSorteado = amigos[indiceAleatorio];
  
    // Mostrar el resultado actualizando el contenido del elemento con id "resultado"
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "Tu amigo secreto es: " + amigoSorteado;
  }