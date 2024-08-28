const inputTexto = document.querySelector(".area-texto__textarea");
const mensaje = document.querySelector(".texto-encriptado__area-texto");
const imgFondo = document.querySelector(".texto-encriptado");
const sinTexto = document.querySelector(".texto-encriptado__mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    if(mensaje.value != ''){
        imgFondo.style.backgroundImage = 'none';
        sinTexto.outerHTML = '';
    }
    inputTexto.value = '';
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    inputTexto.value = '';

    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }  
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    if (mensaje.value != '') {
        imgFondo.style.backgroundImage = 'none';
        sinTexto.outerHTML = '';
    }
    inputTexto.value = '';
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    inputTexto.value = '';

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = '';
}