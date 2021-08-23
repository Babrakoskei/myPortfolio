<?php
$name= $_POST['name'];
$visitor_email = $_POST['email'];
$subject = $_POST['text']
$message = $_POST['message']

$email_from = barbrachela22@gmail.com;
$email_subject = "New Form submission"
$email_body = "User Name: $name.\n".
            "User Email: $.$visitor_email\n".
            "User Subject:$subject.\n".
            "User Message: $message.\n";

 $to = babrakoskei@gmail.com;
 $headers = "From: $email_from \r\n";
 $headers .= "Reply-To: $visitor_email \r\n"

 mail(to,$email_subject,$email_body,$headers);
 header("location: index.html");


?>