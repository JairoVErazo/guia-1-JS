btnRegistrar = document.getElementById('btnRegistrar');
let nombre = document.getElementById('nombre');
let salario = document.getElementById('salario');
let categoria = document.getElementById('categorias');
let tbody = document.querySelector('tbody');
let arregloEmpleado = [];


btnRegistrar.addEventListener('click', mostrarEmpleado);

function mostrarEmpleado(e){
    e.preventDefault();
    const valuesCategoria = categoria.value;
    let aumento = 0;
    let nuevoSalario = 0;
  
    // Verificar si se ha seleccionado una categoría válida
    if (valuesCategoria >= 1) {
      if (valuesCategoria == 1) {
        aumento = salario.value * 0.15;
        nuevoSalario = parseFloat(salario.value) + aumento;
      } else if (valuesCategoria == 2) {
        aumento = salario.value * 0.30;
        nuevoSalario = parseFloat(salario.value) + aumento;
      } else if (valuesCategoria == 3) {
        aumento = salario.value * 0.10;
        nuevoSalario = parseFloat(salario.value) + aumento;
      } else if (valuesCategoria == 4) {
        aumento = salario.value * 0.20;
        nuevoSalario = parseFloat(salario.value) + aumento;
      }
  
      const objetoEmpleado = {
        nombre: nombre.value,
        salario: parseFloat(salario.value),
        categoria: valuesCategoria,
        aumento: aumento.toFixed(2),
        nuevoSalario: nuevoSalario.toFixed(2)
      };
  
      arregloEmpleado.push(objetoEmpleado);
      listarEmpleado();
    } else {
      alert("Selecciona una categoría válida");
    }
}

function listarEmpleado(){

    tbody.innerHTML = "";

    arregloEmpleado.map(item => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
        <td>${item.nombre}</td>
        <td>${item.salario}</td>
        <td>${item.categoria}</td>
        <td>${item.aumento}</td>
        <td>${item.nuevoSalario}</td>
        `;

        tbody.appendChild(fila);
    });
}