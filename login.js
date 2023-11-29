
function login (){
    var user;
    var password;
    var intentos = 3;
    
    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;


    if (user == "usuario1@gmail.com" && password == "123"){
        alert ("ingreso exitoso");
    }

    if (user == "usuario1@gmail.com" && password != "123"){
        intentos--;
    }

    alert("Te quedan" + intentos + "restantes")
    if(intentos==0){
        alert("Ya no te quedan mas intentos, tu usuario a sido bloqueado.")
    }


}