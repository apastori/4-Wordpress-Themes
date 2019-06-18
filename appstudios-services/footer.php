<!--Footer.php file-->
                <div class="row">
	                <div id="footer">
	                    <div id="footer-appstudio" class="col-md-3">
	                        <h4 id="company-letters">Información</h4>
	                    </div> <!-- closing col md 3 -->
	                    <div class="col-md-3">
	                        <div class="footer-links">
	                            <p id="font-style"><i class="fa fa-globe"></i><a class="footer-font" href="#" target="_blank">Montevideo, Uruguay</a></p>
	                            <p><i class="fa fa-home"></i><a class="footer-font" href="#" target="_blank">Camino Maldonado 5049</a></p>
								<p><i class="fa fa-envelope"></i><a class="footer-font" href="#" target="_blank">cramossabelli@gmail.com</a></p>
								<p><i class="fa fa-phone"></i><a class="footer-font" href="#" target="_blank">+598 99 203 858</a></p>
	                        </div> <!-- closing footer-links -->
	                    </div> <!-- closing col md 3 -->
	                    <div class="col-md-3">
	                        <div class="img-ubicacion">
	                            <a href="https://www.google.com/maps/place/Gral+Las+Heras+1916,+11600+Montevideo/@-34.8927747,-56.1491814,18.82z/data=!4m5!3m4!1s0x959f8102beab11c3:0x7a209b9fc1eb3312!8m2!3d-34.8927586!4d-56.1489208" target="_blank"><img src="<?php echo get_template_directory_uri() . '/resources/Ubicacion.jpg';?>" width="300" height="120"></a>
	                        </div> <!-- closing footer links -->
	                    </div> <!-- closing col md 3 -->
	                    <div class="col-md-3">
							<div id="copyright">
								<img src="<?php echo get_template_directory_uri() . '/resources/LOGO-Final-Recortado-En-Negro.jpg';?>" width="110" height="110"/>
	                            <p><a class="footer-font" href="#" target="_blank">Copyright © App Studios 2018</a></p>
							</div> <!-- closing div copyright -->
	                    </div> <!-- closing col md 3 -->
	                </div> <!-- closing ID footer -->
	            </div> <!-- closing row -->
			</div> <!-- closing container class -->


			<!-- jQuery -->
			<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>-->

			<!-- JS de Bootstrap -->
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

			<!-- JS de Vue.js -->
			<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.9/vue.min.js"></script>

			<!-- JS Propio -->
			<!--<script src="<?php // echo get_bloginfo('template_directory');?>/functions.js"></script>-->

			<script>

			//theme_directory = "<?php // echo get_template_directory_uri() ?>";

			//var navbar = document.getElementsByClassName("navbar-default");

			//$(navbar).on("click", function() {
             //     alert(theme_directory);
			//});

            </script>

			<script>
            /*
			window.onload = function() {
                var browserWidth = document.documentElement.clientWidth;
                var browserHeight = document.documentElement.clientHeight;
				var imageMarketing = document.getElementById("marketing-image");
				var imageMarketingDiv = document.getElementsByClassName("marketing-photo-div");
                var paragraphMarketing = document.getElementById("marketing-div");
				var imageToAppend = "<img class='marketing-image-second'>";
				$(imageToAppend).attr("src", theme_directory+"/resources/marketing-digital2.jpg");
				var titleToAppend = "<h1 id='marketing-title'>Marketing Digital</h1>";
				var paragraphToAppend = "<p id='marketing-paragraph' class='paragraph-second'>El marketing digital es la aplicación de las estrategias de publicidad y comercialización llevadas a cabo en los medios digitales. Ofrecemos herramientas para que su organización pueda desarrollar un vinculo significativo con sus actuales y potenciales clientes.</p>";
				var titleToHide = document.getElementById("marketing-title");
				var paragraphToHide = document.getElementById("marketing-paragraph");
			
                if (browserWidth <= 600) {
					imageMarketing.style.display = "none";
					$(titleToAppend).appendTo(imageMarketingDiv);
					$(paragraphToAppend).appendTo(imageMarketingDiv);
					titleToHide.style.display = "none";
					paragraphToHide.style.display = "none";
					$(imageToAppend).appendTo(paragraphMarketing);
                }
			}*/

			</script>
			
        <?php wp_footer(); ?>
		</body>
	</html>
