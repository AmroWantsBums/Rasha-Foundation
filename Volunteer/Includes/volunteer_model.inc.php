<?php

declare(strict_types= 1);


function send_application(object $pdo, string $name, string $number, string $email, string $message){
    $query = "INSERT INTO volunteers (name, number, email, message) VALUES (:name, :number, :email, :message);";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":number", $number);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":message", $message);
    $stmt->execute();
}