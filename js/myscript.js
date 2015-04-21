
function definirEstructura() {
	arreglo = new Array();
	arreglo.push({
		"cedula": "22694771",
		"nombre": "Samuel",
		"apellido": "Melgarejo",
		"correo": "samuel_021093@hotmail.com"
	})
	arreglo.push({
		"cedula": "22694770",
		"nombre": "Orioana",
		"apellido": "Melgarejo",
		"correo": "ori3_11@hotmail.com"
	})
	arreglo.push({
		"cedula": "23644884",
		"nombre": "Anderson",
		"apellido": "Sanchez",
		"correo": "andersoccer1@hotmail.com"
	})
	return arreglo
}

function genera_tabla() {
  // Obtener la referencia del elemento body
  var body = document.getElementsByTagName("body")[0];

  // Crea un elemento <table> y un elemento <tbody>
  var tabla  = document.createElement("table");
  var tblBody = document.createElement("tbody");

  arreglo = definirEstructura()

  // Crea las celdas
  for (var i = 0; i < arreglo.length; i++) {
    // Crea las hileras de la tabla
    var hilera = document.createElement("tr");
    a = arreglo[i]

    for (var j = 0; j < 4; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      switch(j) {
      	case 0:
      	var celda = document.createElement("td");
      	var textoCelda = document.createTextNode(a['nombre']);
      	celda.appendChild(textoCelda);
      	hilera.appendChild(celda);
      	break;

      	case 1:
      	var celda = document.createElement("td");
      	var textoCelda = document.createTextNode(a['apellido']);
      	celda.appendChild(textoCelda);
      	hilera.appendChild(celda);
      	break;

      	case 2:
      	var celda = document.createElement("td");
      	var textoCelda = document.createTextNode(a['cedula']);
      	celda.appendChild(textoCelda);
      	hilera.appendChild(celda);
      	break;

      	default:     	
      	var celda = document.createElement("td");
      	var textoCelda = document.createTextNode(a['correo']);
      	celda.appendChild(textoCelda);
      	hilera.appendChild(celda);
      }

    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera);
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tabla);
  // modifica el atributo "border" de la tabla y lo fija a "2";
  tabla.setAttribute("border", "2");
}



