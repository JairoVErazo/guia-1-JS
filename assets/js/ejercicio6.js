document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();

    const origen = document.getElementById('origen').value;
    const destino = document.getElementById('destino').value;
    let descuento = 0;

    if (origen === 'Palma') {
      if (destino === 'Costa del Sol') {
        descuento = 0.05;
      } else if (destino === 'Panchimalco') {
        descuento = 0.1;
      } else if (destino === 'Puerto el Triunfo') {
        descuento = 0.15;
      }else{
        Swal.fire
        ({
            title: ("Seleccione primero un destino"),
            showClass: 
            {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass:
            {
            popup: 'animate__animated animate__fadeOutUp'
            }
        });
      }
    }else{
        Swal.fire
        ({
            title: ("Este origen no aplica a descuentos"),
            showClass: 
            {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass:
            {
            popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }

    const descuentoPorcentaje = descuento * 100;
    const resultadoDescuento = document.getElementById('resultadoDescuento');
    resultadoDescuento.textContent = `Descuento: ${descuentoPorcentaje}%`;

    document.getElementById('resultado').style.display = 'block';
  });