const inputTexto = document.querySelector(".inputTexto")
const mensaje = document.querySelector(".mensaje")

function btnEncriptar(){
    const codificado = encriptar(inputTexto.value)
    mensaje.value = codificado;
    inputTexto.value = ""
}

function encriptar(stringEncriptar){
    let codificar = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for( let i = 0; i<codificar.length; i++){
        if(stringEncriptar.includes(codificar[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(codificar[i][0],codificar[i][1])
        }
    }

    return stringEncriptar
}

function btnDesencriptar(){
    const codificado = desencriptar(inputTexto.value)
    mensaje.value = codificado;
    inputTexto.value = ""
}

function desencriptar(stringDesencriptar){
    let decodificar = [["a","ai"],["e", "enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for( let i = 0; i<decodificar.length; i++){
        if(stringDesencriptar.includes(decodificar[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(decodificar[i][1],decodificar[i][0])
        }
    }

    return stringDesencriptar
}