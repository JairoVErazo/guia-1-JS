let datos = [];
let cantidadDatosPendientes = 10;



function registrarDato()
{
    let dato = Number(document.getElementById('dato').value);
    let pendientes = document.getElementById('cantidadDatosPendientes');

    if (datos.length == 10)
    {
        Swal.fire
        ({
            title: 'Se ha completado el maximo registro de datos.',
            showClass: 
            {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass:
            {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
    }
    else
    {
        datos.push(dato);
        cantidadDatosPendientes --;
        pendientes.innerHTML = cantidadDatosPendientes + " datos pendientes";
    }
}

function datosRegistrados()
{
    let positivos = 0;
    let negativos = 0;
    let multiplos_15 = 0;
    let pares = 0;
    let dato = 0;

    for (let i=0; i < datos.length; i++)
    {
        dato = datos[i];

        if (dato > 0)
        {
            positivos++;
        }
        if (dato < 0)
        {
            negativos++;
        }
        if ((dato % 15) == 0)
        {
            multiplos_15++;
        }
        if ((dato % 2) == 0)
        {
            pares = pares + dato
        }
    }

    Swal.fire
    ({
        title: (" Datos positivos ingresados: " + positivos 
        + "\n Datos negativos ingresados: " + negativos 
        + "\n Multiplos de 15 ingresados: " + multiplos_15
        + "\n El valor de la suma de los numeros pares ingresados es: " + pares),
        showClass: 
        {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass:
        {
        popup: 'animate__animated animate__fadeOutUp'
        }
    })

}