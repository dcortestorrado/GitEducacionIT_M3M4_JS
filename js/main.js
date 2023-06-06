//Captura de todos los ingresos
const ingresosInputs = document.querySelectorAll('input[id$="-ing"]');
//Captura de egresos
const egresosInputs = document.querySelectorAll('input[id$="-egr"]');
//Subtotales
const subIngresosInput = document.getElementById('sub-ingresos');
const subEgresosInput = document.getElementById('sub-egresos');
//Total
const total = document.getElementById('total');
//Letrero de pérdidas o ganancias
const flujo = document.getElementById('flujo');

function totales() {
    let subtotalIngresos = 0;
    let subtotalEgresos = 0;

    ingresosInputs.forEach((input) => {
        subtotalIngresos += parseFloat(input.value) || 0;
    });

    egresosInputs.forEach((input) => {
        subtotalEgresos += parseFloat(input.value) || 0;
    });

    let resultado = subtotalIngresos - subtotalEgresos;
    resultado = resultado.toFixed(2);

    total.textContent = resultado;

    //Mirar si se muestra pérdida o ganancia
    if (resultado > 0) {
        flujo.textContent = 'GANACIAS';
        flujo.classList.remove('text-danger');
        flujo.classList.add('text-success');
    } else if (resultado < 0) {
        flujo.textContent = 'PÉRDIDAS';
        flujo.classList.remove('text-success');
        flujo.classList.add('text-danger');
    } else {
        flujo.textContent = '';
        flujo.classList.remove('text-success', 'text-danger');
    }
}

ingresosInputs.forEach((input) => {
    input.addEventListener('input', totales);
});

egresosInputs.forEach((input) => {
    input.addEventListener('input', totales);
});

/* Redirección */

function redirectCredito(){
    location.href = "/credito.html";
}