function cambiarIdioma (idioma) {
	var inputEmail = document.getElementById('user');
	var inputPassword = document.getElementById ('password');
	
	if (idioma == "es") {

		inputEmail.innerHTML = "Usuario";
		inputPassword.innerHTML = "contraseña";

		Password.setAttribute ('placeholder' , ' Ingresa contraseña');
		Email.setAttribute ('placeholder' , 'Ingresa Usuario');
	} else {
		inputEmail.innerHTML = 'user';
		inputPassword.innerHTML = 'password';
		Password.setAttribute ('placeholder', 'user');
		Email.setAttribute ('placeholder' , 'user');

	}

} cambiarIdioma ("es");

var btnEs = document.getElementById ('btnEs');
btnEs.onclick = function () {
	cambiarIdioma ("es");
}

var btnEn = document.getElementById ('btnEn');
btnEn.onclick = function () {
	cambiarIdioma ("en");
}