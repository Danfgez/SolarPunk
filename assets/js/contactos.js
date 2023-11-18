function enviar(){
    let nombre = document.getElementById("nombreId").value;
    let correo = document.getElementById("CorreoId").value;
    let mensaje = document.getElementById("mensajeId").value;

    if( nombre == ""){
        document.getElementById("respId").innerHTML =  `Dinos tu Nombre`;
        document.getElementById("nombreId").style.borderColor="red";
    } else if(correo== ""){
        document.getElementById("respId").innerHTML =  `Coloca tu correo`;
        document.getElementById("CorreoId").style.borderColor="red";
    } else if(mensaje == ""){
        document.getElementById("respId").innerHTML =  `Escriba un mensaje`;
        document.getElementById("mensajeId").style.borderColor="red";
    } else{

    console.log(nombre);
    console.log(correo);
    console.log(mensaje);

    document.getElementById("nombreId").style.borderColor="black";
    document.getElementById("CorreoId").style.borderColor="black";
    document.getElementById("mensajeId").style.borderColor="black";

    document.getElementById("respId").innerHTML =  `Mensaje enviado con exito :D Gracias por tu aporte`;

    }
}