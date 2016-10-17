function cambiarIdioma (idioma) {
	var elEmail = document.getElementById('inputEmail');
	var elPassword = document.getElementById ('inputPassword');
	var elRegistrarse = document.getElementById ('registro');
	var elRecuerda = document.getElementById ('recordar');
	var elTitulo = document.getElementById ('form-signin-heading');
	
	/*Email.setAttribute('placeholder','Correo Electrónico');	

	elPassword.setAttribute('placeholder', 'Contraseña');*/

	if (idioma == "es") {
	
		elEmail.setAttribute ('placeholder' ,'correo');
		elPassword.setAttribute("placeholder" , "contraseña");
		elRegistrarse.innerHTML = 'registro';
		elRecuerda.innerHTML = 'recordar';
		elTitulo.innerHTML = 'Registrarse';


	} else {
		
		elEmail.setAttribute ('placeholder' , 'Email');
		elPassword.setAttribute ('placeholder', 'Password');
		elRegistrarse.innerHTML= 'Sign in';
		elRecuerda.innerHTML ='Remember me';
		elTitulo.innerHTML ='Place Sign in';
		

	}

} 

var btnEs = document.getElementById ('btnEs');
btnEs.onclick = function () {
	cambiarIdioma ("es");
}

var btnEn = document.getElementById ('btnEn');
btnEn.onclick = function () {
	cambiarIdioma ("en");
}

