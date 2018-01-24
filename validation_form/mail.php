<?php

$recepient = "aleksandr.poklad@inbox.ru";
$sitename = "Targetbrain";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$message = " Почта: $email \nИмя: $name;

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");



