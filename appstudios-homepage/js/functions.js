/* Este es el archivo de Javascript para la version 1 de la pagina appstudio */

/* Carrousel */

var slideIndex = 0;

function showSlides() {

    var slides = document.getElementsByClassName("slides-fade");
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (var x = 0; x < dots.length; x++) {
        dots[x].className = dots[x].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
} 

showSlides();

/* navbar enlargement effect */

var navbar = document.getElementsByClassName("navbar-custom");
var navbarLogo = document.getElementById("small-logo");
var navbarTitle = document.getElementById("navbar-title");
var navbarLinks = document.getElementsByClassName("link-3");

window.onload = function() {
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

/* Change Language Function - Effect of the entire webpage */

var clickControl = true;
var navbarInicio = $(".navbar-nav a:eq(0)");
var navbarQuienesSomos = $(".navbar-nav a:eq(1)");
var navbarServicios = $(".navbar-nav a:eq(2)");
var navbarContacto = $(".navbar-nav a:eq(3)");
var messageBox = document.getElementsByClassName("message");
var languageButton = document.getElementById("language-button");
var carrouselElements = document.getElementsByClassName("text");
var titleForm = document.getElementById("form-title");
var buttonLink = document.getElementById("button-link");
var footerInformation = document.getElementById("company-letters");

languageButton.onclick = function changeLanguage() {
    if (clickControl == true) {
        $(messageBox).text("Leave a Message");
        $(navbarInicio).text("Home");
        navbarQuienesSomos.text("About Us");
        navbarServicios.text("Services");
        navbarContacto.text("Contact");
        languageButton.innerHTML = "Language";
        for (var i = 0; i <= carrouselElements.length; i++) {
            switch (i) {
                case 0:
                   carrouselElements[i].innerHTML = "Web Sites";
                   break;
                case 1:
                   carrouselElements[i].innerHTML = "Digital Marketing";
                   break;
                case 2:
                   carrouselElements[i].innerHTML = "Mobile Application";
                   break;
                case 3:
                   carrouselElements[i].innerHTML = "Constant Maintenance";
            }
        }
        titleForm.innerHTML = "¿Would you like to know more about App Studios?";
        buttonLink.innerHTML = "I am Interested";
        footerInformation.innerHTML = "Information";
        clickControl = false;
    } else if (clickControl == false) {
        $(messageBox).text("Dejar un Mensaje");
        $(navbarInicio).text("Inicio");
        navbarQuienesSomos.text("Quiénes somos");
        navbarServicios.text("Servicios");
        navbarContacto.text("Contacto");
        languageButton.innerHTML = "Idioma";
        for (i = 0; i <= carrouselElements.length; i++) {
            if (i == 0) {
                carrouselElements[i].innerHTML = "Paginas Web";
            } else if (i == 1) {
                carrouselElements[i].innerHTML = "Marketing Digital";
            } else if (i == 2) {
                carrouselElements[i].innerHTML = "Aplicaciones Móviles";
            } else if (i == 3) {
                carrouselElements[i].innerHTML = "Mantenimiento Constante";
            } else {

            }
        }
        titleForm.innerHTML = "Te gustaría saber más acerca de AppStudios?";
        buttonLink.innerHTML = "Estoy Interesado";
        footerInformation.innerHTML = "Información";
        clickControl = true;
    }
};

