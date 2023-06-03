function comprobarRespuesta(texto) {
    const intento = document.getElementById('intento').innerHTML;
    if (texto == 'excadrill') {
        puntuacion(intento.charAt(intento.length - 1));
        document.getElementById('imagen').src = '../img/pcolor.jpg';
        respuesta();
        document.getElementById('mensaje-respuesta').innerHTML = '<strong>Felicitaciones, has seleccionado la opcion correcta</strong>';
    } else {
        agregarIntento(intento.charAt(intento.length - 1));
        respuesta();
        document.getElementById('mensaje-respuesta').innerHTML = '<strong>Pokemon incorrecto, intentalo nuevamente</strong>';
        if (document.getElementById('intento').innerHTML.charAt(intento.length - 1) == '3') {
            reiniciarJuego();
        }
    }
}

function puntuacion(intento) {
    switch (intento) {
        case '0': document.getElementById('puntaje').innerHTML = 'Puntaje: 5';
            break;
        case '1': document.getElementById('puntaje').innerHTML = 'Puntaje: 3';
            break;
        case '2': document.getElementById('puntaje').innerHTML = 'Puntaje: 1';
            break;

    }
}

function agregarIntento(intento) {
    console.log(intento)
    switch (intento) {
        case '0': document.getElementById('intento').innerHTML = 'Intentos: 1';
            break;
        case '1': document.getElementById('intento').innerHTML = 'Intentos: 2';
            break;
        case '2': document.getElementById('intento').innerHTML = 'Intentos: 3';
            break;
    }
}

function reiniciarJuego() {
    document.getElementById('intento').innerHTML = "Intentos: 0";
    document.getElementById('puntaje').innerHTML = "Puntaje: 0";
    document.getElementById('imagen').src = '../img/pnegro.jpg';
    document.getElementById('mensaje-respuesta').style.background = 'transparent';
    document.getElementById('mensaje-respuesta').style.border = '0';
    document.getElementById('mensaje-respuesta').innerHTML = '';
}

function respuesta() {
    document.getElementById('mensaje-respuesta').style.background = 'blue';
    document.getElementById('mensaje-respuesta').style.border = '2px solid black';
    document.getElementById('mensaje-respuesta').style.fontFamily = 'Times New Roman, Times, serif';
    document.getElementById('mensaje-respuesta').style.color = 'white';
    document.getElementById('mensaje-respuesta').style.fontWeight = 'Bold'
}