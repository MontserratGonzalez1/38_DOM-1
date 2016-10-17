function validateForm(){
	
}


function comprobar(contraseña) {
		var elPassword = document.getElementById("contraseña").value;
         if (contraseña >6) {
           	elPassword.innerHTML= "La contraseña debe tener al menos 6 caracteres";
            }

         else {
 
            return false;
            }
         } comprobar ("contraseña");
         

