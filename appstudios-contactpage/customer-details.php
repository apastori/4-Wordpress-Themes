<?php

// File with some specifications

require_once('../../../wp-config.php');

// Information to connect to the Database 

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "appstudios_theme";

// Conecting to the Database 

$databaseConnection = mysqli_connect($servername,$username,$password,$dbname);

//$connectionSuccessfull = "La conexion con la base de datos fue exitosa";

if (!$databaseConnection) {
    die("Conection Failed: " . mysql_error());
}

global $wpdb, $charset_collate;
require_once ABSPATH . 'wp-admin/includes/upgrade.php';

//global $wpdb;
//$charset_collate = $wpdb->get_charset_collate();

$table_name = $table_prefix . "Forma";

$sql = "CREATE TABLE IF NOT EXISTS Probando (
    ID INT(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Telefono VARCHAR(50) NOT NULL,
    Consulta VARCHAR(50) NOT NULL, 
    Mensaje VARCHAR(255) NOT NULL,
    reg_date TIMESTAMP
    )";

dbDelta($sql);

// Getting and verifying the customer Data 

$at = "@";

$blankSpace = " ";

// Checking Name 

if ($_POST["nombre"] != "" && is_null($_POST["nombre"]) != true) {
    $nombreForm = $_POST["nombre"];
} else {
    $nombreForm = null;
}

// Checking Telefono

if (strlen($_POST["telefono"]) >= 8 && strlen($_POST["telefono"]) < 15) {
    $telefonoForm = $_POST["telefono"];
} else {
    $telefonoForm = null;
}

// Checking Email 

if (stripos($_POST["email"], $at) != false && strstr($_POST["email"], $at) != $at) {
    $emailForm = $_POST["email"];
} else {
    $emailForm = null;
}

// Checking Consulta

if ($_POST["consulta"] === "general" || $_POST["consulta"] === "ayuda" || $_POST["consulta"] === "interes") {
    $consultaForm = $_POST["consulta"];
} else {
    $consultaForm = null;
}

// Checking Mensaje 

if ($_POST["mensaje"] != "" && is_null($_POST["mensaje"]) != true) {
    $mensajeForm = $_POST["mensaje"];
} else {
    $mensajeForm = null;
}

// Inserting the Data into the Database

$clienteInfo = "INSERT INTO Probando (Nombre, Email, Telefono, Consulta, Mensaje)
                VALUES ('$nombreForm', '$emailForm', '$telefonoForm', '$consultaForm', '$mensajeForm')";

// Redirecting to Success or Error Page

if ($nombreForm != null && $telefonoForm != null && $emailForm != null && $mensajeForm != null) {
    if (mysqli_query($databaseConnection, $clienteInfo)) {
        header("Location: success-page.php");
    } else {
        header("Location: error-page.php");
    }
} else {
    header("Location: error-page.php");
} 

mysqli_close($databaseConnection); 

?>