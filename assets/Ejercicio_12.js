let edadesManana = [];
let pendientesManana = 5;

let edadesTarde = [];
let pendientesTarde = 6;

let edadesNoche = [];
let pendientesNoche = 11;



function registrarManana()
{
    let edad = Number(document.getElementById('turnoManana').value);
    let pendientes = document.getElementById('pendienteManana');

    if (edad <= 0)
    {
        Swal.fire
        ({
            title: 'Ingrese un valor mayor o igual a 1',
            showClass: 
            {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass:
            {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
        return;
    }

    if (edadesManana.length == 5)
    {
        Swal.fire
        ({
            title: 'Se ha completado el maximo registro de datos para el turno de la mañana',
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
        edadesManana.push(edad);
        pendientesManana --;
        pendientes.innerHTML = pendientesManana + " datos pendientes";
    }
}

function registrarTarde()
{
    let edad = Number(document.getElementById('turnoTarde').value);
    let pendientes = document.getElementById('pendienteTarde');

    if (edad <= 0)
    {
        Swal.fire
        ({
            title: 'Ingrese un valor mayor o igual a 1',
            showClass: 
            {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass:
            {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
        return;
    }

    if (edadesTarde.length == 6)
    {
        Swal.fire
        ({
            title: 'Se ha completado el maximo registro de datos para el turno de la Tarde',
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
        edadesTarde.push(edad);
        pendientesTarde --;
        pendientes.innerHTML = pendientesTarde + " datos pendientes";
    }
}

function registrarNoche()
{
    let edad = Number(document.getElementById('turnoNoche').value);
    let pendientes = document.getElementById('pendienteNoche');

    if (edad <= 0)
    {
        Swal.fire
        ({
            title: 'Ingrese un valor mayor o igual a 1',
            showClass: 
            {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass:
            {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
        return;
    }

    if (edadesNoche.length == 11)
    {
        Swal.fire
        ({
            title: 'Se ha completado el maximo registro de datos para el turno de la Noche',
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
        edadesNoche.push(edad);
        pendientesNoche --;
        pendientes.innerHTML = pendientesNoche + " datos pendientes";
    }
}

function calcularPromedio(edades)
{
    let sumatoria = 0;

    for(let i = 0; i < edades.length; i++)
    {
        sumatoria += edades[i];
    }
    return (sumatoria/edades.length);
}

function imprimirPromedio()
{
    let promedioManana = calcularPromedio(edadesManana);
    let promedioTarde  = calcularPromedio(edadesTarde);
    let promedioNoche  = calcularPromedio(edadesNoche);

    Swal.fire
    ({
        title: ("El promedio de la mañana es: " + promedioManana + "\nEl promedio de la tarde es: " + promedioTarde + "\nEl promedio de la noche es: " + promedioNoche),
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

function promedioMayor()
{
    let promedioManana = calcularPromedio(edadesManana);
    let promedioTarde  = calcularPromedio(edadesTarde);
    let promedioNoche  = calcularPromedio(edadesNoche);

    if (promedioManana > promedioTarde &&
        promedioManana > promedioNoche
        )
    {
        Swal.fire
        ({
            title: ("El Promedio mayor es el del turno de la mañana con valor de: " + promedioManana),
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
    else if (promedioTarde > promedioManana &&
            promedioTarde > promedioNoche)
    {
        Swal.fire
        ({
            title: ("El Promedio mayor es el del turno de la tarde con valor de: " + promediotarde),
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
    else if (promedioNoche > promedioManana &&
        promedioNoche > promedioTarde)
{
    Swal.fire
    ({
        title: ("El Promedio mayor es el del turno de la noche con valor de: " + promedioNoche),
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
else
{
    Swal.fire
    ({
        title: ("Los promedios de los 3 turnos son iguales"),
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
}