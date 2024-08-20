let numeroMaximo=10;
let intentos;

let numeroSecreto ;
let listaNumerosSorteados=[];
var textoEncriptado;
var textoOriginal;

condicionesIniciales();












function condicionesIniciales(){
    
    //asignarTextoElemento('h1','Juego pro tu Papa');
    
    document.getElementById("textoEncriptado").style.display = "none";
    document.getElementById("botonCopiar").style.display = "none";

}

function demoDisplayEncriptar() {
    document.getElementById("myP1").style.display = "none";
    document.getElementById("myP2").style.display = "none";
    document.getElementById("myP3").style.display = "none";
    document.getElementById("textoEncriptado").style.display = "block";
    document.getElementById("botonCopiar").style.display = "block";
    encriptarTexto();
    
}
function demoDisplayDesencriptar() {
    document.getElementById("myP1").style.display = "none";
    document.getElementById("myP2").style.display = "none";
    document.getElementById("myP3").style.display = "none";
    document.getElementById("textoEncriptado").style.display = "block";
    document.getElementById("botonCopiar").style.display = "block";
    desencriptarTexto();
    
}






function copyText() {
    var textToCopy = document.getElementById("textoEncriptado");
    var range = document.createRange();
    range.selectNode(textToCopy);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado al portapapeles");
}

function encriptarTexto() {
    // Capturar el texto ingresado en el textarea
    textoOriginal = document.getElementById("textoEntrada").value;
    textoEncriptado = encriptarTextoCaracteres(textoOriginal);
    
    // Asignar el texto encriptado al elemento con el ID "textoEncriptado"
    document.getElementById("textoEncriptado").textContent = textoEncriptado;
}

function desencriptarTexto() {
    // Capturar el texto ingresado en el textarea
    textoOriginal = document.getElementById("textoEntrada").value;
    textoEncriptado = desencriptarTextoCaracteres(textoOriginal);
    
    // Asignar el texto encriptado al elemento con el ID "textoEncriptado"
    document.getElementById("textoEncriptado").textContent = textoEncriptado;
}


// funcion para encriptar texto en caracteres
function encriptarTextoCaracteres(texto) {
    let encriptado = texto.replace(/e/g, "enter")
                          .replace(/i/g, "imes")
                          .replace(/a/g, "ai")
                          .replace(/o/g, "ober")
                          .replace(/u/g, "ufat");
    return encriptado;
}
function desencriptarTextoCaracteres(texto) {
    let desencriptado = texto.replace(/enter/g, "e")
                             .replace(/imes/g, "i")
                             .replace(/ai/g, "a")
                             .replace(/ober/g, "o")
                             .replace(/ufat/g, "u");
    return desencriptado;
}


 //------------ funcion para no aceptar caracteres diferentes a minusculas 
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('textoEntrada');
  
    textarea.addEventListener('input', function() {
      // Obtiene el valor actual del textarea
      let valor = this.value;
  
      // Reemplaza cualquier carácter que no sea letra
      this.value = valor.replace(/[^a-zñ.,:;?!¡¿- ]/g, '');
    });
  });
