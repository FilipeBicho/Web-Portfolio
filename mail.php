<?php 	
    $to = "mail@filipebicho.com"; 
    $first_name = $_POST['first'];
    $last_name = $_POST['last'];
    $from = $_POST['mail']; 
    $message = $_POST['message'];

    $subject = "Email from filipebicho.com";
    $message = "Message from " . $first_name . " " . $last_name . ":" . "\n\n" . $message;
    $thanks = "Thank you " . $first_name . " " . $last_name . " for getting in touch!";
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);

    echo ("<SCRIPT LANGUAGE='JavaScript'>
        window.alert('{$thanks}');
        window.location.href='http://filipebicho.com/contact.html';
    </SCRIPT>");
   
 ?>