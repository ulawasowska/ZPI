<?php
if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "admin@example.com";
$subject = "$m_subject:  $name";
$body = "Otrzymales nowa wiadomosc.\n\n"."Szczegoly:\n\nImię: $name\n\n\nEmail: $email\n\nPrzedmiot: $m_subject\n\nWiadomość: $message";
$header = "Od: $email";
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
