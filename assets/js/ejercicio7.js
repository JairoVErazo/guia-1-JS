const formulario = document.getElementById('formulario');
const calcularBtn = document.getElementById('calcularBtn');

formulario.addEventListener('input', function () {
    const nota1 = document.getElementById('nota1').value;
    const ponderado1 = document.getElementById('ponderado1').value;
    const nota2 = document.getElementById('nota2').value;
    const ponderado2 = document.getElementById('ponderado2').value;

    if (nota1 !== '' && ponderado1 !== '' && nota2 !== '' && ponderado2 !== '') {
        calcularBtn.disabled = false;
    } else {
        calcularBtn.disabled = true;
      }
});

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const ponderado1 = parseFloat(document.getElementById('ponderado1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const ponderado2 = parseFloat(document.getElementById('ponderado2').value);

    const mediaPonderada = ((nota1 * ponderado1) + (nota2 * ponderado2)) / (ponderado1 + ponderado2);

    const resultadoNotaMediaPonderada = document.getElementById('MediaPonderada');
    resultadoNotaMediaPonderada.textContent = `La nota media ponderada es: ${mediaPonderada.toFixed(2)}`;

    document.getElementById('resultado').style.display = 'block';
});