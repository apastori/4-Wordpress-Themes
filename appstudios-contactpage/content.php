<!-- Content.php -->

		<h1 class="form-title">Pongase en Contacto</h1>
		<h3 class="form-title">Envie el formulario y lo contactaremos a la brevedad</h3>

        <!-- Message Box -->
        <div id="message-box">
		  <i class="fa fa-envelope"></i><a href="contactappstudio.html" class="message"><b>Dejar un Mensaje</b></a>
	    </div> <!-- closing message box -->

	  <!--Form Section-->
	<div id="form-div">
	  <form method="post" onsubmit="return form_validation();" action="<?php echo get_template_directory_uri() . '/customer-details.php';?>">
		<ul class="form-style-1">
		    <li class="form-font"><label>Nombre Completo / Full Name</label><input id="input-name" type="text" name="nombre" placeholder="Nombre Apellido / First Last Name" class="field-long"/></li>
		    <li>
		        <label id="email">Email</label>
		        <input id="input-email" type="email" name="email" placeholder="tuemail@gmail.com" class="field-long" />
			</li>
			<li>
					<label id="espacio-telefono">Telefono / Phone Number</label>
					<input id="valorTelefono" name="telefono" placeholder="XXXXXXXXX" class="field-long" />
			</li>
		    <li>
		        <label>Consulta / Query</label>
		        <select id="consulta-dropdown" name="consulta" class="field-select">
		        <option value="interes">Interes / Interest</option>
		        <option value="ayuda">Ayuda / Help</option>
		        <option value="general">General / Not Specific</option>
		        </select>
		    </li>
		    <li>
		        <label>Tu Mensaje / Your Message</label>
		        <textarea name="mensaje" id="mensaje" class="field-long field-textarea"></textarea>
		    </li>
		    <li>
		        <input class="button5" type="submit" value="Enviar / Submit">
		    </li>
		</ul>
	  </form>
    </div> <!-- Closing Div - Form -->

		<!-- Information Section -->
		<div id="contact-information">
			<h1>Informacion de Contacto</h1>
			<p><i class="fa fa-paper-plane"></i>Montevideo, Uruguay</p>
			<p><i class="fa fa-home"></i>Camino Maldonado 5049</p>
			<p><i class="fa fa-envelope-square"></i>cramossabelli@gmail.com</p>
			<p><i class="fa fa-phone-square"></i>Tel: 099 203 858</p>
			<button id="location-button" type="button"><a id="location-button-link" href="#">Encuentranos</a></button>
		</div> <!-- closing contact-information div -->

		<!-- Pop up/modal Box Space -->
		<div id="pop-up-box">
			<div id="location-image">
				<img id="img-ubicacion" src="<?php echo get_template_directory_uri() . '/resources/Ubicacionacercada.jpg';?>">
				<span class="close"><i class="fa fa-times-circle"></i></span>
			</div> <!-- closing location-image div -->
		</div> <!-- closing pop-up-box -->


		<!-- Space for the alert container after the form is submitted -->
		<div id="alert-container">
			<!-- alert Content -->
		</div> <!-- closing alert container -->

		<!-- The following script is when the client requests to send the form -->
    
	<script>
		
		function form_validation() {
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
				  return false;
                } 
                if (inputName == "" || inputName == null) {
				  alert("El espacio del nombre se encuentra vacío, se debe completar");
				  return false;
                }
                if (inputEmail.indexOf('@') == -1) {
				  alert("The email is invalid, check to see if it's correct");
				  return false;
                }
		    }
		
	</script>

	
