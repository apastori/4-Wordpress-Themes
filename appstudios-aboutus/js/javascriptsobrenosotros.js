/* Javascript para la pagina Sobre Nosotros */

/* navbar enlargement effect */

var navbar = document.getElementsByClassName("navbar-default");
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

/* Function to change text and adapt it for mobile */

var navbar = document.getElementsByClassName("navbar-default")[0];

function clientNotDesktop() {
       var browserWidth = document.documentElement.clientWidth;
       if (browserWidth <= 1300) {
           var paragraphStory = document.getElementById("mission");
           paragraphStory.innerHTML = "";
           paragraphStory.innerHTML = "En App Studios, creemos que todas las empresas deben estar en la web. Nos apasiona brindar servicios que permitan a nuestros clientes aprovechar el poder de alcance de la World Wide Web, y nuestra misión es asegurarnos que los valores de nuestros clientes se transimitan fielmente a través de su pagina.";
       }
}

/* Spanish - English Button effect */

var clickControl = true;

    $(".btn-info").on("click", function() {
        /*var buttonPresente = $("#ingles").val();*/
        var buttonCambiar = document.getElementById("ingles");
        var parrafoCambiar = document.getElementById("mission");
        var browserWidth = document.documentElement.clientWidth;
        if (clickControl == true) {
            var parrafoCambiar = document.getElementById("mission");
            if (browserWidth <= 1300) {
                $(parrafoCambiar).replaceWith("<p id='mision'>At App Studios, we believe that all organizations should be on the web. We're passionate about providing services that allow our customer to harness the potential of the World Wide Web, and our mission is to make sure that the values of our customers are shown in their website.</p>");
                buttonCambiar.innerHTML = "Español";
                clickControl = !clickControl;
            } else {
                $(parrafoCambiar).replaceWith("<p id='mision'>At App Studios, we believe that all organizations should be on the web. We're passionate" + "<br>" + "about providing services that allow our customer to harness the potential of the" + "<br>" + "World Wide Web, and our mission is to make sure that the values of our customers" + "<br>" + "are shown in their website.</p>");
                buttonCambiar.innerHTML = "Español";
                clickControl = !clickControl;
            }
        } else if (clickControl == false) {
            var parrafoCambiarEspanol = document.getElementById("mision");
            if (browserWidth <= 1300) {
                $(parrafoCambiarEspanol).replaceWith("<p id='mission'>En App Studios, creemos que todas las empresas deben estar en la web. Nos apasiona brindar servicios que permitan a nuestros clientes aprovechar el poder de alcance de la World Wide Web, y nuestra misión es asegurarnos que los valores de nuestros clientes se transimitan fielmente a través de su pagina.</p>");  
                buttonCambiar.innerHTML = "English";
                clickControl = !clickControl;
            } else {
                $(parrafoCambiarEspanol).replaceWith("<p id='mission'>En App Studios, creemos que todas las empresas deben estar en la web. Nos apasiona" + "<br>" + "brindar servicios que permitan a nuestros clientes aprovechar el poder de alcance de la" + "<br>" + "World Wide Web, y nuestra misión es asegurarnos que los valores de nuestros clientes" + "<br>" + "se transimitan fielmente a través de su pagina.</p>");
                buttonCambiar.innerHTML = "English";
                clickControl = !clickControl;
            } 
        } else {
            alert("Algo mas paso en este button!");
        }
    });

    /* Change the Language of the entire webpage */

    var navbarInicio = $(".navbar-nav a:eq(0)");
    var navbarQuienesSomos = $(".navbar-nav a:eq(1)");
    var navbarServicios = $(".navbar-nav a:eq(2)");
    var navbarContacto = $(".navbar-nav a:eq(3)");
    var languageButton = document.getElementById("language-button");
    var messageBox = document.getElementsByClassName("message");
    var appStudiosTitle = document.getElementById("appstudio-story-title");
    var buttonCambiar = document.getElementById("ingles");
    var titleForm = document.getElementById("form-title");
    var buttonLink = document.getElementById("button-link");
    var footerInformation = document.getElementById("company-letters");
    var titleNuestroEquipo = $("#nuestro-equipo").find("h1");
    var phraseNuestroEquipo = document.getElementById("equipo-phrase");
    var languageControl = true;

    languageButton.addEventListener("click", function() {
        var paragraphNuestroEquipo = document.querySelector(".paragraph-equipo");
        var browserWidth = document.documentElement.clientWidth;
        if (languageControl == true) {
            var appStudiosParagraph = document.getElementById("mission");
            $(messageBox).text("Leave a Message");
            $(navbarInicio).text("Home");
            navbarQuienesSomos.text("About Us");
            navbarServicios.text("Services");
            navbarContacto.text("Contact");
            languageButton.innerHTML = "Language";
            //$(appStudiosParagraph).replaceWith("<p id='mision'>At App Studios, we believe that all organizations should be on the web. We're passionate" + "<br>" + "about providing services that allow our customer to harness the potential of the" + "<br>" + "World Wide Web, and our mission is to make sure that the values of our customers" + "<br>" + "are shown in their website.</p>");
            buttonCambiar.innerHTML = "Español";
            appStudiosTitle.innerHTML = "The App Studios Story";
            titleNuestroEquipo.text("Our Team");
            $(paragraphNuestroEquipo).replaceWith("<p class='paragraph-equipo'>We have a great team of professionals, programmers and designers with innovative ideas and lots of creativity that are able to build web or mobile products that are powerful and attractive in order to achieve the corporate goals." + "<br>" + "Our mission is to increate the profits of our customers through enterprice software</p>");
            phraseNuestroEquipo.innerHTML = "<strong>The success of our customers is a success for us.</strong>";
            titleForm.innerHTML = "¿Would you like to know more about App Studios?";
            buttonLink.innerHTML = "I am Interested";
            footerInformation.innerHTML = "Information";
            if (browserWidth <= 1300) {
                $(appStudiosParagraph).replaceWith("<p id='mision'>At App Studios, we believe that all organizations should be on the web. We're passionate about providing services that allow our customer to harness the potential of the World Wide Web, and our mission is to make sure that the values of our customers are shown in their website.</p>");
            } else {
                $(appStudiosParagraph).replaceWith("<p id='mision'>At App Studios, we believe that all organizations should be on the web. We're passionate" + "<br>" + "about providing services that allow our customer to harness the potential of the" + "<br>" + "World Wide Web, and our mission is to make sure that the values of our customers" + "<br>" + "are shown in their website.</p>");
            }
            languageControl = !languageControl;
            clickControl = false;
        } else if (languageControl == false) {
            var appStudiosParagraphEspanol = document.getElementById("mision");
            var browserWidth = document.documentElement.clientWidth;
            $(messageBox).text("Dejar un Mensaje");
            $(navbarInicio).text("Inicio");
            navbarQuienesSomos.text("Quiénes somos");
            navbarServicios.text("Servicios");
            navbarContacto.text("Contacto");
            languageButton.innerHTML = "Idioma";
            //$(appStudiosParagraphEspanol).replaceWith("<p id='mission'>En App Studios, creemos que todas las empresas deben estar en la web. Nos apasiona" + "<br>" + "brindar servicios que permitan a nuestros clientes aprovechar el poder de alcance de la" + "<br>" + "World Wide Web, y nuestra misión es asegurarnos que los valores de nuestros clientes" + "<br>" + "se transimitan fielmente a través de su pagina.</p>");
            buttonCambiar.innerHTML = "English";
            appStudiosTitle.innerHTML = "La Historia de App Studios";
            titleNuestroEquipo.text("Nuestro Equipo");
            $(paragraphNuestroEquipo).replaceWith("<p class='paragraph-equipo'>Hemos creado un equipo profesional de calidad, programadores y diseñadores con ideas de vanguardia y gran creatividad para lograr que su sitio web o su app sea dinámica, llamativa y logre resultados altamente efectivos de acuerdo a sus necesidades corporativas." + "<br>" + "Nuestra misión es aumentar los beneficios de nuestros clientes a través de software empresarial.<p>");
            phraseNuestroEquipo.innerHTML = "<strong>El éxito de nuestros clientes es también nuestro éxito.</strong>";
            titleForm.innerHTML = "¿Te gustaría saber más acerca de AppStudios?";
            buttonLink.innerHTML = "Estoy Interesado";
            footerInformation.innerHTML = "Información";
            if (browserWidth <= 1300) {
                $(appStudiosParagraphEspanol).replaceWith("<p id='mission'>En App Studios, creemos que todas las empresas deben estar en la web. Nos apasiona brindar servicios que permitan a nuestros clientes aprovechar el poder de alcance de la World Wide Web, y nuestra misión es asegurarnos que los valores de nuestros clientes se transimitan fielmente a través de su pagina.</p>");
            } else {
                $(appStudiosParagraphEspanol).replaceWith("<p id='mission'>En App Studios, creemos que todas las empresas deben estar en la web. Nos apasiona" + "<br>" + "brindar servicios que permitan a nuestros clientes aprovechar el poder de alcance de la" + "<br>" + "World Wide Web, y nuestra misión es asegurarnos que los valores de nuestros clientes" + "<br>" + "se transimitan fielmente a través de su pagina.</p>");
            }
            languageControl = !languageControl;
            clickControl = true;
        }
    });

    function pageLoad() {
        navbarEnlargement(); clientNotDesktop();
    }

    window.onload = pageLoad;
    