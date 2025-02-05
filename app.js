// Array para almacenar los nombres de los amigos
let amigos = [];


// Implementa una función para agregar amigos
function agregarAmigo() {
  let inputNombre = document.getElementById("amigo");
  let nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  amigos.push(nombre);

  inputNombre.value = "";
}

//Implementa una función para actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
  
    lista.innerHTML = "";
  
    for (let i = 0; i < amigos.length; i++) {
      let li = document.createElement("li");
      li.textContent = amigos[i];
      lista.appendChild(li);
    }
  }

//Implementa una función para sortear los amigos
  function sortearAmigo() {
    if (amigos.length === 0) {
      alert("No hay amigos para sortear.");
      return;
    }
  
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    let amigoSorteado = amigos[indiceAleatorio];
  
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "Tu amigo secreto es: " + amigoSorteado;
  }