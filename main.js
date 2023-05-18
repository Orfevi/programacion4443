//alert("prueba Javascript")

var nombre = "Orlando Fernandez";
var edad = 23;
var estatura = 160

//document.write(nombre);

//var datos = document.getElementById("datos");

datos.innerHTML = `
  <h1>DATOS DE PERSONAS</h1>
  <h2>Mi nombre es: ${nombre}</h2>
  <h2>Mi edad es: ${edad}</h2>
  <h2>Mi estatura es: ${estatura}</h2>
  `;

  if(estatura >= 150){
    datos.innerHTML += '<h2>Eres una persona ALTA</h2>';
    }
else{
    datos.innerHTML += '<h2>Eres una persona CHAPARRA</h2>';
}
//funcion  que captura datos desde un cuadro de texto de formulario

function captura(){
    var nomcomp=document.getElementById("nombre").value;
    var ed=document.getElementById("edad").value;
    var estat=document.getElementById("estatura").value;
    
    if (nomcomp==""){
        alert("El nombre es obligatorio");
        document.getElementById("nombre").focus();
    }else{
        if (ed==""){
            alert("La edad es obligatoria");
            document.getElementById("edad").focus();
        }else{
            if (estat==""){
                alert("La estatura es obligatoria");
                document.getElementById("estatura").focus();
            }else{
                console.log(nomcomp,+" "+ed,+" "+estat)
                document.getElementById("nombre").value="";
                document.getElementById("edad").value="";
                document.getElementById("estatura").value="";
                document.getElementById("nombre").focus();
            }
            
        }
    }
    if(estat >= 150){
        datos.innerHTML += '<h2>Eres una persona ALTA</h2>';
        }
    else{
        datos.innerHTML += '<h2>Eres una persona CHAPARRA</h2>';
    }
    //alert(nomcomp);
    
}
