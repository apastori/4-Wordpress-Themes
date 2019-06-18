/* Javascript para el contact form */

/* navbar enlargement effect */

var navbar = document.getElementsByClassName("navbar-custom");
var navbarLogo = document.getElementById("small-logo");
var navbarTitle = document.getElementById("navbar-title");
var navbarLinks = document.getElementsByClassName("link-3");

/*window.onload =*/ function navbarEnlargement() {
    $(navbar).height(91);
    $(navbarTitle).css("font-size", "25px");
    $(navbarTitle).css("margin-top", "15px");
    $(navbarLinks).css("font-size", "20px");
    $(navbarLinks).css("margin-top", "15px");
    $(navbarLogo).height(90);
    $(navbarLogo).width(90);
};
    document.addEventListener("scroll", function() {
    if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        $(navbar).height(50);
        $(navbarLogo).height(50);
        $(navbarLogo).width(50);
        $(navbarTitle).css("font-size", "18px");
        $(navbarTitle).css("margin-top", "0px");
        $(navbarLinks).css("font-size", "15px");
        $(navbarLinks).css("margin-top", "0px");
    } else {
        $(navbar).height(91);
        $(navbarTitle).css("font-size", "25px");
        $(navbarTitle).css("margin-top", "15px");
        $(navbarLinks).css("font-size", "20px");
        $(navbarLinks).css("margin-top", "15px");
        $(navbarLogo).height(90);
        $(navbarLogo).width(90);
    }
});

/* Function to make sure that the collapse navbar button is align with the rest of the page */

document.addEventListener("scroll", function() {
    var navbarCollapseButton = document.getElementById("button-collapse");
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
       $(navbarCollapseButton).css("margin-top", "8px");
    } else {
        $(navbarCollapseButton).css("margin-top", "24px");
    }
});

/* Pop-up scripts */

    var buttonUbicacion = document.getElementById("location-button");
	var popupWindow = document.getElementById("pop-up-box");
	var UbicacionImage = document.getElementById("location-image");
	var closePopUp = document.getElementsByClassName("close");

    $(buttonUbicacion).on("click", function() {
		popupWindow.style.display = "block";
	});

	$(closePopUp).on("click", function() {
		popupWindow.style.display = "none";
	});


	$("body").mousedown(function(e) {
      if(e.target.id != popupWindow.id) {
        $(popupWindow).hide();
      } else {
		$(popupWindow).show();
	  }
  });

  /* Change Language of the entire page */

  var navbarInicio = $(".navbar-nav a:eq(0)");
  var navbarQuienesSomos = $(".navbar-nav a:eq(1)");
  var navbarServicios = $(".navbar-nav a:eq(2)");
  var navbarContacto = $(".navbar-nav a:eq(3)");
  var languageButton = document.getElementById("language-button");
  var titleContacto = document.getElementsByClassName("form-title")[0];
  var titleEnvie = document.getElementsByClassName("form-title")[1];
  var messageBox = document.getElementsByClassName("message");
  var footerInformation = document.getElementById("company-letters");
  var UbicacionLink = document.getElementById("location-button-link");
  var titleInformacionContacto = $("#contact-information h1");
  var clickControl = true;

  languageButton.addEventListener("click", function() {
       if (clickControl == true) {
           titleContacto.innerHTML = "Contact Us Now";
           titleEnvie.innerHTML = "Submit the form and we will contact you soon.";
           UbicacionLink.innerHTML = "Find Us";
           $(titleInformacionContacto).text("Contact Informaction");
           $(messageBox).text("Leave a Message");
           $(navbarInicio).text("Home");
           navbarQuienesSomos.text("About Us");
           navbarServicios.text("Services");
           navbarContacto.text("Contact");
           languageButton.innerHTML = "Language";
           footerInformation.innerHTML = "Information";
           clickControl = false;
       } else if (clickControl == false) {
           titleContacto.innerHTML = "Pongase en Contacto";
           titleEnvie.innerHTML = "Envie el formulario y lo contactaremos a la brevedad";
           UbicacionLink.innerHTML = "Encuentranos";
           $(titleInformacionContacto).text("Informacion de Contacto");
           $(messageBox).text("Dejar un Mensaje");
           $(navbarInicio).text("Inicio");
           navbarQuienesSomos.text("Quiénes somos");
           navbarServicios.text("Servicios");
           navbarContacto.text("Contacto");
           languageButton.innerHTML = "Idioma";
           footerInformation.innerHTML = "Información";
           clickControl = true;
       }
  });

  /* submit button effect 

  var buttonSubmit = document.getElementsByClassName("button5");

  $(buttonSubmit).on("submit", effectButton);

  function effectButton() {
      var inputName = document.getElementById("input-name").value;
      var inputTelefono = document.getElementById("valorTelefono").value;
      var consultaDropdown = document.getElementById("consulta-dropdown").value;
      var espacioMensaje = document.getElementById("mensaje").value;
      var inputEmail = document.getElementById("input-email").value;
      if (inputTelefono.length < 8 || inputTelefono.length > 9) {
          //var mensajeError = document.createTextNode(" *requerido");
          //var espacioMensaje = document.getElementById("espacio-telefono");
          //espacioMensaje.appendChild(mensajeError);
          alert("El teléfono no puede tener menos de 8 caracteres ni mas de 9 caracteres. Asegurese que el telefono ingresado es el correcto.");
        } 
      if (inputName == "" || inputName == null) {
          alert("El espacio del nombre se encuentra vacío, se debe completar");
        }
      if (inputEmail.indexOf('@') == -1) {
          alert("The email is invalid, check to see if it's correct");
      }
    }*/

    function centerForm() {
        var formToChange = document.querySelector("form");
        var browserWidth = document.documentElement.clientWidth;
        var browserHeight = document.documentElement.clientHeight;
        var touchDevice = ('ontouchstart' in document.documentElement);
        if (browserWidth <= 320 || touchDevice == false) {
            $(formToChange).css("float", "left");
        } else if (browserWidth > 320 || touchDevice == true) {
            $(formToChange).css("float", "none");
        }  else if (browserWidth > 1300 && touchDevice == true) {
            $(formToChange).css("float", "left");
        }
    }

    function PageLoad() {
        navbarEnlargement(); centerForm();
    }
    
    window.onload = PageLoad; 
  