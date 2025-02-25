function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;
    contenido.innerHTML = contenido.innerHTML + '<p>' + texto + '</p>';
}

function nuevoTitulo() {
    let contenido = document.getElementById("contenido");
    let tituloPrompt= prompt("Ingrese texto");

    if(tituloPrompt){
        let titulo = document.createElement("h1");
        titulo.textContent = tituloPrompt;
        contenido.appendChild(titulo); 
    }else{
        alert("Debe ingresar valor para el titulo");
    }
    
}

function nuevoEnlace() {
    let url = prompt("Ingrese la URL del enlace:");
    let texto = prompt("Ingrese el texto del enlace:");
    
    if (url && texto) {
        let contenido = document.getElementById("contenido");
        let enlace = document.createElement("a");
        enlace.href = url;
        enlace.textContent = texto;
        enlace.target = "_blank"; 
        contenido.appendChild(enlace);
    } else {
        alert("Debe ingresar ambos valores para el enlace.");
    }
}


document.getElementById('imagen').onchange = function (evt) {
    var entradaArchivo = evt.target,
        archivos = entradaArchivo.files;
    if (FileReader && archivos && archivos.length) {
        var imagen = new FileReader();
        imagen.onload = function () {
            var etiquetaImg = document.createElement("img");
            etiquetaImg.setAttribute('src', imagen.result);
            etiquetaImg.setAttribute('width', '200px');
            etiquetaImg.setAttribute('height', '180px');
            var contenido = document.getElementById('contenido');
            contenido.appendChild(etiquetaImg);
        }
        imagen.readAsDataURL(archivos[0]);
    }
}

function imprimir(){
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body > <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
    }
    