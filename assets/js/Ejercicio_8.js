function VerificarVacio(){
    let Nombre = document.getElementById('Nombre').value;
    let Apellido = document.getElementById('Apellido').value;
    let Correo = document.getElementById('Correo').value;
    let Password = document.getElementById('Password').value;
    
    if (Nombre.length       == 0 ||
        Apellido.length     == 0 ||
        Correo.length       == 0 ||
        Password.length     == 0
        )
    {
        Swal.fire
        ({
            title: 'No ha completado el formulario',
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
            title: ("Nombre: " + Nombre + 
            "\n Apellido: " + Apellido +
            "\n Correo Electronico: " + Correo +
            "\n Contraseña: " + Password 
            ),
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