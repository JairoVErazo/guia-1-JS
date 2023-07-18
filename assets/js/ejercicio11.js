function convertirTemperatura() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    var mensaje = "";

    if (fahrenheit >= 14 && fahrenheit < 32) {
      mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
      mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
      mensaje = "Temperatura alta";
    } else {
      mensaje = "Temperatura desconocida";
    }

    document.getElementById("fahrenheit").textContent = "Temperatura en Fahrenheit: " + fahrenheit.toFixed(2);
    document.getElementById("mensaje").textContent = mensaje;

    document.getElementById("resultado").style.display = "block";
  }