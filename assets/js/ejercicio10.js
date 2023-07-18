function mostrarTabla() {
    var numero = parseInt(document.getElementById("numero").value);
    var tablaBody = document.getElementById("tablaBody");
    tablaBody.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;

      var row = document.createElement("tr");
      var numCell = document.createElement("td");
      var resCell = document.createElement("td");

      numCell.textContent = i + " x " + numero; // Mostrar el número de la tabla y el número por el cual se está multiplicando
      resCell.textContent = resultado;

      row.appendChild(numCell);
      row.appendChild(resCell);
      tablaBody.appendChild(row);
    }
  }