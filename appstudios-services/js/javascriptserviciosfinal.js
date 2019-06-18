/* En este file se encuentra el coding Javascript para la pagina de servicios */

/* Navbar enlargement effect */

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
}
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

/* Function to change stacking order of the website when the client requests the page from mobile device */

/*const screenWidth = window.matchMedia( "(max-width: 600px)" );

if (screenWidth.matches && document.body.scrollTop > 5) {
    var navTitle = document.getElementById("navbar-title");
    var navImage = document.getElementById("small-logo");
    var navButton = document.getElementById("button-collapse");
    $(navTitle).css("color", "blue");
    $(navButton).css("margin-bottom", "30px");
    $(navImage).css("margin-top", "25px");
} else {

}*/

/* Carrousel Div elements transformation to English language */

var disenoTitle = document.getElementById("diseño​-title");
var disenoParagraph = document.getElementById("diseño​-paragraph");
var marketingTitle = document.getElementsByClassName("services-subtitle");
var marketingParagraph = document.getElementsByClassName("marketing-paragraph");
var aplicacionTitle = document.getElementById("aplicacion-title");
var aplicacionParagraph = document.getElementById("aplicacion-paragraph");
var mantenimientoTitle = document.getElementsByClassName("mantenimiento-title");
var mantenimientoParagraph = document.getElementsByClassName("mantenimiento-paragraph");
var languageControl = false;

function changeLanguage() {
  if (languageControl == true) {
      disenoTitle.innerHTML = "Web Design";
      disenoParagraph.innerHTML = "We build websites and web applications that can be visited from any mobile device and that are dynamic and aesthetically nice, making them very attractive for potential clients and enablers of new market opportunities. We have a wide variety of designs to choose from and a team of qualified web developers to make sure that the vision that you have of the online presence of your organization meet your standards";
      $(".services-subtitle").html("Digital Marketing");
      $(".marketing-paragraph").html("The area of Digital Marketing is the application of the publicity and commercialization strategies that take place in digital media. We offer tools that allow your organisation to develop a significant bond with its current and potential customers.");
      //marketingTitle.innerHTML = "Digital Marketing";
      //marketingParagraph.innerHTML = "The area of Digital Marketing is the application of the publicity and commercialization strategies that take place in digital media. We offer tools that allow your organisation to develop a significant bond with its current and potential customers.";
      aplicacionTitle.innerHTML = "Mobile Applications";
      aplicacionParagraph.innerHTML = "We live in a connected world, we all have a powerful computer in our pockets. We are aware that the main entrance to the internet are mobile devices, that is why we ensure that the user experience through those devices is as good or even better than the desktop computer experience.";
      $(".mantenimiento-title").html("Constant Maintenance");
      $(".mantenimiento-paragraph").html("We understand perfectly that customers engage with organizations at all moments and all places, that is why we provide support to ensure that the websites of our customers are functioning the 24 hours of the day, the seven days of the week.");
      //mantenimientoTitle.innerHTML = "Constant Maintenance";
      //mantenimientoParagraph.innerHTML = "We understand perfectly that customers engage with organizations at all moments and all places, that is why we provide support to ensure that the websites of our customers are functioning the 24 hours of the day, the seven days of the week.";
      languageControl = false;
  } else if (languageControl == false) {
      disenoTitle.innerHTML = "Diseño​s Web";
      disenoParagraph.innerHTML = "Diseñamos sitios y desarrollamos web que se adaptan a cualquier dispositivo móvil, a su vez dinámicas y estéticamente agradables, logrando que sean sumamente atractivas para los potenciales clientes que la visitan, de esta forma se abrirán nuevos nichos de mercado y se amplían los canales de distribución de sus productos o servicios. Contamos con una amplia variedad de diseños web entre los cuales elegir y con calificados desarrolladores, para asegurar que la visión que usted tiene acerca de la presencia de su organización en la web, se plasme acorde a sus expectativas.";
      $(".services-subtitle").html("Marketing Digital");
      $(".marketing-paragraph").html("El marketing digital es la aplicación de las estrategias de publicidad y comercialización llevadas a cabo en los medios digitales. Ofrecemos herramientas para que su organización pueda desarrollar un vinculo significativo con sus actuales y potenciales clientes.");
      //marketingTitle.innerHTML = "Marketing Digital";
      //marketingParagraph.innerHTML = "El marketing digital es la aplicación de las estrategias de publicidad y comercialización llevadas a cabo en los medios digitales. Ofrecemos herramientas para que su organización pueda desarrollar un vinculo significativo con sus actuales y potenciales clientes.";
      aplicacionTitle.innerHTML = "Aplicaciónes Móviles";
      aplicacionParagraph.innerHTML = "Vivimos en un mundo conectado, todos tenemos una poderosa computadora en el bolsillo. Somos conscientes que la principal entrada a internet son los dispositivos moviles, por eso nos aseguramos que la experiencia de usuario a través de los moviles sea tan buena o mejor que la experiencia de escritorio.";
      $(".mantenimiento-title").html("Mantenimiento Constante");
      $(".mantenimiento-paragraph").html("Entendemos a la perfección que los clientes desarrollan relaciones con las organizaciones en todo momento y en cualquier lugar, por eso brindamos soporte para asegurarnos que las páginas web de nuestros clientes estén en funcionamiento las 24 horas del día, los siete días de la semana.");
      //mantenimientoTitle.innerHTML = "Mantenimiento Constante";
      //mantenimientoParagraph.innerHTML = "Entendemos a la perfección que los clientes desarrollan relaciones con las organizaciones en todo momento y en cualquier lugar, por eso brindamos soporte para asegurarnos que las páginas web de nuestros clientes estén en funcionamiento las 24 horas del día, los siete días de la semana.";
      languageControl = true;
  }
  setTimeout(changeLanguage, 15000);
}

//changeLanguage();

/* Change language of the entire webpage */

var languageButton = document.getElementById("language-button");
var clickControl = true;
var navbarInicio = $(".navbar-nav a:eq(0)");
var navbarQuienesSomos = $(".navbar-nav a:eq(1)");
var navbarServicios = $(".navbar-nav a:eq(2)");
var navbarContacto = $(".navbar-nav a:eq(3)");
var messageBox = document.getElementsByClassName("message");
var titleForm = document.getElementById("form-title");
var buttonLink = document.getElementById("button-link");
var footerInformation = document.getElementById("company-letters");

languageButton.addEventListener("click", function() {
   if (clickControl == true) {
      var titleNuestrosServicios = document.querySelector("h1");
      titleNuestrosServicios.innerHTML = "Our Services";
      $(messageBox).text("Leave a Message");
      $(navbarInicio).text("Home");
      navbarQuienesSomos.text("About Us");
      navbarServicios.text("Services");
      navbarContacto.text("Contact");
      languageButton.innerHTML = "Language";
      titleForm.innerHTML = "¿Would you like to know more about App Studios?";
      buttonLink.innerHTML = "I am Interested";
      footerInformation.innerHTML = "Information";
      clickControl = false;
   } else if (clickControl == false) {
      var titleNuestrosServicios = document.querySelector("h1");
      titleNuestrosServicios.innerHTML = "Nuestros Servicios";
      $(messageBox).text("Dejar un Mensaje");
      $(navbarInicio).text("Inicio");
      navbarQuienesSomos.text("Quiénes somos");
      navbarServicios.text("Servicios");
      navbarContacto.text("Contacto");
      languageButton.innerHTML = "Idioma";
      titleForm.innerHTML = "Te gustaría saber más acerca de AppStudios?";
      buttonLink.innerHTML = "Estoy Interesado";
      footerInformation.innerHTML = "Información";
      clickControl = true;
   }
});

/* Change stacking order of the website when the client requests the website from mobile */

var theme_directory = wptheme.themeDirectory;

/*$(navbar).on("click",*/ function mobileView() {
    var browserWidth = document.documentElement.clientWidth;
    var browserHeight = document.documentElement.clientHeight;

    if (browserWidth <= 1300) {

        // Variables to Hide the elements in the marketing div
        var imageMarketingDiv = document.getElementsByClassName("marketing-photo-div");
        var paragraphTitleMarketing = document.getElementById("marketing-second-column");
        var marketingImage = document.getElementById("marketing-image");
        var titleToHide = document.getElementsByClassName("services-subtitle");
        var paragraphToHide = document.getElementsByClassName("marketing-paragraph");

        // Variables to hide elements in the mantenimiento div 
        var aplicacionesDiv = document.getElementById("div-aplicaciones");
        var mantenimientoFirstColumn = document.getElementById("mantenimiento-first-column");
        var mantenimientoSecondColumn = document.getElementById("mantenimiento-second-column");
        var mantenimientoImage = document.getElementById("constant-image");
        var mantenimientoTitleHide = document.getElementsByClassName("mantenimiento-title");
        var mantenimientoParagraphHide = document.getElementsByClassName("mantenimiento-paragraph");

        // Variables to add images and paragraphs to the marketing div
        var imageToAppendMarketing = $("<img class='marketing-image-second' width='300' height='250'>");
        var imageUrlMarketing = theme_directory+'/resources/marketing-digital2.jpg';
        var titleToAppendMarketing = $("<h1 class='services-subtitle'>Marketing Digital</h1>");
        var paragraphToAppendMarketing = $("<p class='paragraph-second marketing-paragraph'>El marketing digital es la aplicación de las estrategias de publicidad y comercialización llevadas a cabo en los medios digitales. Ofrecemos herramientas para que su organización pueda desarrollar un vinculo significativo con sus actuales y potenciales clientes.</p>");

        // Variables to add elements to the mantenimiento constante div
        var imageToAppendMantenimiento = $("<img class='mantenimiento-image-second' width='290' height='250'>");
        var imageUrlMantenimiento = theme_directory+'/resources/mantenimiento-constante.jpg';
        var titleToAppendMantenimiento = $("<h1 class='mantenimiento-title'>Mantenimiento Constante</h1>");
        var paragraphToAppendMantenimiento = $("<p class='mantenimiento-paragraph'>Entendemos a la perfección que los clientes desarrollan relaciones con las organizaciones en todo momento y en cualquier lugar, por eso brindamos soporte para asegurarnos que las páginas web de nuestros clientes estén en funcionamiento las 24 horas del día, los siete días de la semana.</p>");

        // Hiding Elements
        marketingImage.style.display = "none";
        mantenimientoImage.style.display = "none";
        $(".services-subtitle").css("display", "none");
        $(".marketing-paragraph").css("display", "none");
        $(mantenimientoTitleHide).css("display", "none");
        $(mantenimientoParagraphHide).css("display", "none");
        $(titleToAppendMarketing ).appendTo(imageMarketingDiv);
        $(paragraphToAppendMarketing).appendTo(imageMarketingDiv);
        //titleToHide.style.display = "none";
        //paragraphToHide.style.display = "none";
        paragraphTitleMarketing.classList.remove("paragraph-div");
        $(imageToAppendMarketing).appendTo(paragraphTitleMarketing);
        $(".marketing-image-second").attr("src", imageUrlMarketing);
        $(titleToAppendMantenimiento).appendTo(mantenimientoFirstColumn);
        $(paragraphToAppendMantenimiento).appendTo(mantenimientoFirstColumn);
        aplicacionesDiv.classList.remove("paragraph-div");
        mantenimientoSecondColumn.classList.remove("paragraph-div");
        $(imageToAppendMantenimiento).appendTo(mantenimientoSecondColumn);
        $(".mantenimiento-image-second").attr("src", imageUrlMantenimiento);
        //alert(imageUrlMarketing);
    }
}

function PageLoad() {
    navbarEnlargement(); changeLanguage(); mobileView();
}

window.onload = PageLoad; 
