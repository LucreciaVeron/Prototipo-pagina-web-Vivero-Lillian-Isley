function registroDePlanta(){
    var longitud = document.getElementById('longitud');
    var latitud = document.getElementById('latitud');
    const exito = document.getElementById('exito');
    const alerta = document.getElementById('alerta');

    if( longitud.value === '' || latitud.value === ''){
        alerta.style.display = 'block';
    }
    else{
        setTimeout(() => {
            longitud.value = '';
            latitud.value = '';
        }, 2000);

        exito.style.display = 'block';
    }
    setTimeout(() => {
        alerta.style.display= 'none';
        exito.style.display = 'none';
    }, 4000);   
}


function registroDeFamilia(){
    var nombreComun = document.getElementById('nombreComun');
    var nombreCientifico = document.getElementById('nombreCientifico');
    var clase = document.getElementById('clase');
    var color = document.getElementById('color');
    var fruto = document.getElementById('fruto');
    const exito = document.getElementById('exito');
    const alerta = document.getElementById('alerta');

    if( nombreComun.value === '' || nombreCientifico.value === '' || clase.value === ''
    || color.value === '' || fruto.value === ''){
        alerta.style.display = 'block';
    }
    else{
        setTimeout(() => {
            nombreComun.value = '';
            nombreCientifico.value = '';
            clase.value = '';
            color.value = '';
            fruto.value = '';
        }, 2000);

        exito.style.display = 'block';
    }
    setTimeout(() => {
        alerta.style.display= 'none';
        exito.style.display = 'none';
    }, 4000);   
}