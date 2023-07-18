function VerificarEdad()
{
let edad = document.getElementById('edad').value;

edad >= 18 ?
//alert ("Eres mayor de edad") :
//alert ("Eres menor de edad");

Swal.fire
({
    title: 'Eres mayor de edad',
    showClass: 
    {
    popup: 'animate__animated animate__fadeInDown'
    },
    hideClass:
    {
    popup: 'animate__animated animate__fadeOutUp'
    }
}):

Swal.fire
({
    title: 'Eres menor de edad',
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