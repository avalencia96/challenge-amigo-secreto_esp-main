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