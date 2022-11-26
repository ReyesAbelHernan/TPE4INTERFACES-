function login() {
    var user , password , mensaje;

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;
    mensaje = document.getElementById("mensaje");

    
    if (user == "abel" && password == "1234") {
        window.location="indexLog.html"
    } 
    else { 
        mensaje.innerHTML = "Usuario o Contraseña incorrecto";
        mensaje.setAttribute("class","mensaje")
    }

    if (user == "admin" && password == "admin") {
        window.location="indexAdmin.html"
        
    }else {
        mensaje.innerHTML = "Usuario o Contraseña incorrecto";
        mensaje.setAttribute("class","mensaje")
    }


} 