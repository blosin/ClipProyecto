//document.getElementById("btnAceptar").onclick = registrar;
//document.getElementById("btnJugar").addEventListener("click", registrar);
function cargar() {
  var intentos = 4;
  var respuesta;
  var nombre = document.getElementById("nombre").value;
  if (nombre == "") {
    window.alert("Ingrese su nombre");
    document.getElementById("alerta").style = "visibility: visible;";
    document.getElementById("alerta2").style =
      "visibility: hidden; display: none;";
  } else {
    document.getElementById("alerta").style =
      "visibility: hidden; display: none;";
    document.getElementById("alerta2").style = "visibility: visible;";
    while (intentos > 0) {
      intentos--;
      respuesta = prompt("Bienvenido " + nombre + " Ingrese su respuesta");
      if (
        respuesta.toLowerCase() == "economia" ||
        respuesta.toLowerCase() == "economía"
      ) {
        alert("Respuesta correcta!!");
        document.getElementById("alertaGanar").style = "visibility:visible;";
        document.getElementById("alertaPerder").style =
          "visibility: hidden; display: none;";
        intentos = 0;
      } else {
        alert("Respuesta incorrecta, te quedan " + intentos + " intentos");
        if (intentos == 2) {
          alert(
            "2º Pista: estudia las elecciones de los individuos, empresas gobiernos y sociedades para hacer frente a los recursos limitados y necesidades ilimitadas"
          );
        }
        if (intentos == 1) {
          alert(
            "3º Pista: es la ciencia que se enfoca en la resolución de las necesidades y la generación y administración de la riqueza."
          );
        }
        if (intentos == 0) {
          document.getElementById("alertaPerder").style = "visibility:visible;";
          document.getElementById("alertaGanar").style =
            "visibility: hidden; display: none;";
        }
      }
    }
  }
}

function registrar() {
  if (
    document.getElementById("validationCustom03").value ==
    document.getElementById("validationCustom05").value
  ) {
    document.getElementById("miVal").style = "visibility:hidden;";
  } else document.getElementById("miVal").style = "visibility:visible;";
}

var paginaActual = 0;
var ultimaPagina = 0;
var countries = [];

function cargarMiJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      countries = JSON.parse(this.responseText);
      ultimaPagina = countries.length / 10;
      cargarGrilla();
    }
  };
  xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
  xhttp.send();
}

cargarMiJson();

function Siguiente() {
  if (paginaActual < ultimaPagina - 1) paginaActual++;
  cargarGrilla();
}
function Anterior() {
  if (paginaActual > 0) paginaActual--;
  cargarGrilla();
}

function cargarGrilla() {
  var filas = "";
  countries.slice(paginaActual * 10, paginaActual * 10 + 10).forEach((pais) => {
    filas += `<tr><td>${pais.name}</td><td>${pais.population}</td><td><img src="${pais.flag}" height="50" width="50"></td></tr>`;
  });
  if (document.getElementById("cuerpoTablaPais") != null)
    document.getElementById("cuerpoTablaPais").innerHTML = filas;
}
/*var nombrePersona = document.getElementById("txtNombre").value;
  var edadPersona = document.getElementById("txtEdad").value;
  if (isNaN(edadPersona)) {
    window.alert("no es un numero en edad");
    return;
  }

  var persona = {
    nombre: nombrePersona,
    edad: +edadPersona /* es igual a parteInt(edadPersona) ,
  };
  personas.push(persona);
  var filas = "";

  for (i = 0; i < personas.length; i++) {
    filas += `<tr><td>${personas[i].nombre}</td><td>${personas[i].edad}</td></tr>`;
  }

  document.getElementById("cuerpoTabla").innerHTML = filas;
  document.getElementById("tabla").style =
    personas.length == 0 ? "visibility: hidden;" : "";

  document.getElementById("txtNombre").value = "";
  document.getElementById("txtEdad").value = "";
  document.getElementById("txtNombre").focus();
}

//OBJETOS JSON se buscan en google o se crean como: API REST COUNTRIES
var paginaActual = 0;
var ultimaPagina = 0;
var countries = [];

function cargarMiJson() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      countries = JSON.parse(this.responseText);
      ultimaPagina = countries.length / 10;
      cargarGrilla();
    }
  };
  xhttp.open("GET", "https://restcountries.eu/rest/v2/all", true);
  xhttp.send();
}

cargarMiJson();

document.getElementById("btnAnterior").addEventListener("click", Anterior);

function Siguiente() {
  if (paginaActual < ultimaPagina - 1) paginaActual++;
  cargarGrilla();
}
function Anterior() {
  if (paginaActual > 0) paginaActual--;
  cargarGrilla();
}

function cargarGrilla() {
  var filas = "";
  countries.slice(paginaActual * 10, paginaActual * 10 + 10).forEach((pais) => {
    filas += `<tr><td>${pais.name}</td><td>${pais.population}</td><td><img src="${pais.flag}" height="50" width="50"></td></tr>`;
  });
  document.getElementById("cuerpoTablaPais").innerHTML = filas;
}*/
