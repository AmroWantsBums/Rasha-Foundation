<?php

declare(strict_types= 1);


function send_application(object $pdo, string $name, string $email, string $phoneNumber, string $reason){
    $query = "INSERT INTO volunteers (name, email, phoneNumber, reason) VALUES (:name, :email, :phoneNumber, :reason);";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":phoneNumber", $phoneNumber);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":reason", $reason);
    $stmt->execute();
}