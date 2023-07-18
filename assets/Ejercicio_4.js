function VerificarMayor()
{
    let numero_1 = Number(document.getElementById('num_1').value);
    let numero_2 = Number(document.getElementById('num_2').value);

    if (numero_1 > numero_2)
    {
        Swal.fire
        ({
            title: ("El número mayor es: " + numero_1),
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
    else if ( numero_1 < numero_2)
    {
        Swal.fire
        ({
            title: ("El número mayor es: " + numero_2),
            showClass: 
            {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass:
            {
            popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }else
    {
        Swal.fire
        ({
            title: 'Los numeros ingresados son de igual valor',
            showClass: 
            {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass:
            {
            popup: 'animate__animated animate__fadeOutUp'
            }
        });;
    }
}