function Jugador(id, name, edad, dinero) {
  this.id = id;
  this.name = name;
  this.edad = edad;
  this.dinero = dinero;   
}

var jugadores = [];

function obtenerNombre() {  // Obtengo el nombre del input
  
  var obtenerN = document.getElementById("nombre").value;
  return obtenerN;
  
}
function obtenerEdad() { // Obtengo la edad del input
  
  var obtenerE = document.getElementById("edad").value;
  obtenerE = parseInt(obtenerE);
  
  return obtenerE;
}

function crearJugador() {
  
  var jug = new Jugador(jugadores.length + 1, obtenerNombre(), obtenerEdad(), 0);
  jugadores.push(jug);
  mostrarListado();
}

function mostrarListado(){
  var lista='';
  for(var i=0; i<jugadores.length; i++){
    lista+= 'id: ' + jugadores[i].id +
      ' nombre: ' + jugadores[i].name + 
      ' edad: ' + jugadores[i].edad + 
      ' dinero: ' + jugadores[i].dinero + '\n';
  }
  document.getElementById('listado').innerText = lista;
}

function sumarDinero(){
  var dinero = parseInt(document.getElementById('dinero').value);
  var id = parseInt(document.getElementById('jugadorid').value);
  if (!(isNaN(dinero) || isNaN(id))){
    for (var i=0; i<jugadores.length; i++){
      if (jugadores[i].id==id){
        jugadores[i].dinero+= dinero;
      }
    }
    mostrarListado();
  }
  
}

const clientsItems = document.querySelectorAll('.clients-item');

clientsItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const infoCard = item.querySelector('.info-card');
    const infoText = item.getAttribute('data-info');
    infoCard.querySelector('p').textContent = infoText;
  });
});