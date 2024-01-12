<?php
   $destino = "jecsan_18@hotmail.com";
   $nombre = $_POST["nombre"];
   $telefono = $_POST["telefono"];
   $email = $_POST["email"];
   $mensaje = $_POST["mensaje"];
   $contenido = "Nombre: " . $nombre . "\nTelefono: " . $telefono . "\nEmail: " . $email . "\nMensaje: " . $mensaje;
   mail($destino,"contacto", $contenido);
?>  