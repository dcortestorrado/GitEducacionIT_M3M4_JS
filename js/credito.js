/* Redirección */
function redirectCaja(){
    location.href = "/flujo.html";
}

/* Resetear */

function resetearFormulario(){
    const inputInteres = document.getElementById('interes');
    const inputMontoTotal = document.getElementById('montoTotal');
    inputInteres.value = "";
    inputMontoTotal.value = "";
    document.getElementById('mensajeInteres').classList.add('vhidden');
    document.getElementById('mensajeMontoTotal').classList.add('vhidden');
}

/* Para mostrar las ofertas */
function mostrarOfertas(){

    const arregloOfertas = [{capital: 150000, plazo: 30, tasa: 0.15}, {capital: 300000, plazo: 180, tasa: 0.10}, {capital: 485000, plazo: 60, tasa: 0.23}];
    const interesAparte = [];
    const ofertasConInteres = [];
    
    /* Captura de tabla y filas */
    const tabla = document.querySelector('table');
    const filas = tabla.tBodies[0].getElementsByTagName('tr');

    /* Recorro ofertas y filas paralelamente llenamos los otros dos arreglos*/
        for (let i = 0; i < arregloOfertas.length; i++) {
        interesAparte.push((arregloOfertas[i].capital * arregloOfertas[i].plazo * arregloOfertas[i].tasa) / 100);
        ofertasConInteres.push(((arregloOfertas[i].capital * arregloOfertas[i].plazo * arregloOfertas[i].tasa) / 100) + arregloOfertas[i].capital) ;

        /* Guardo objeto oferta y lleno la fila */
        const oferta = arregloOfertas[i];
        const fila = filas[i];

        /*Saco los tds de la fila (3)*/
        const tdsFila = fila.getElementsByTagName('td');
        /* Lleno tds */    
        tdsFila[0].textContent = oferta.capital;
        tdsFila[1].textContent = oferta.plazo;
        tdsFila[2].textContent = oferta.tasa;    
    }

    /* Requerimiento del ejercicio del M4*/
    console.log(interesAparte);
    console.log(ofertasConInteres);

}

/* Para calcular y llenar los inputs */

function calcularCredito() {
    resetearFormulario();
    /* Captura de tabla y filas */
    const tabla = document.querySelector('table');
    const filas = tabla.tBodies[0].getElementsByTagName('tr');

    var opcion = document.querySelector('input[name="radioPlan"]:checked').value;
    let fila;
    let tdsFila;
    let interes = 0;
    let montoTotal = 0;

    switch(opcion){
        case"radioPlan1":
            fila = filas[0];
            tdsFila = fila.getElementsByTagName('td');
            console.log(tdsFila);
            interes = (tdsFila[0].textContent*tdsFila[1].textContent*tdsFila[2].textContent) / 100;
            montoTotal = interes + parseInt(tdsFila[0].textContent);
            break;
        case"radioPlan2":
            fila = filas[1];
            tdsFila = fila.getElementsByTagName('td');
            interes = (tdsFila[0].textContent*tdsFila[1].textContent*tdsFila[2].textContent) / 100;
            montoTotal = interes + parseInt(tdsFila[0].textContent);
            break;
        case"radioPlan3":
            fila = filas[2];
            tdsFila = fila.getElementsByTagName('td');
            interes = (tdsFila[0].textContent*tdsFila[1].textContent*tdsFila[2].textContent) / 100;
            montoTotal = interes + parseInt(tdsFila[0].textContent);
            break;
    }

    document.getElementById('interes').value = interes;
    document.getElementById('montoTotal').value = montoTotal;
    document.getElementById('mensajeInteres').classList.remove('vhidden');
    document.getElementById('mensajeMontoTotal').classList.remove('vhidden');
}

mostrarOfertas();