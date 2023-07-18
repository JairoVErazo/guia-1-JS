const alumnos = [];

document.getElementById('formulario').addEventListener('submit', function (e) {
   e.preventDefault();

   let nombre = document.getElementById('nombre').value;
   let carnet = document.getElementById('carnet').value;
   let notaExamen = parseFloat(document.getElementById('notaExamen').value);
   let notaTareas = parseFloat(document.getElementById('notaTareas').value);
   let notaAsistencia = parseFloat(document.getElementById('notaAsistencia').value);
   let notaInvestigacion = parseFloat(document.getElementById('notaInvestigacion').value);

   const pesoExamen = 0.2;
   const pesoTareas = 0.4;
   const pesoAsistencia = 0.1;
   const pesoInvestigacion = 0.3;

   let notaFinal = (notaExamen * pesoExamen) + (notaTareas * pesoTareas) +
     (notaAsistencia * pesoAsistencia) + (notaInvestigacion * pesoInvestigacion);

   const alumno = {
      nombre,
      carnet,
      notaFinal: notaFinal.toFixed(2)
    };


    alumnos.push(alumno);
    mostrarAlumnos();
  });

    function mostrarAlumnos() {
      const tablaAlumnos = document.getElementById('tablaAlumnos');
      tablaAlumnos.innerHTML = "";

      alumnos.map(alumno => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
          <td>${alumno.nombre}</td>
          <td>${alumno.carnet}</td>
          <td>${alumno.notaFinal}</td>
        `;
        tablaAlumnos.appendChild(fila);
      });
    }