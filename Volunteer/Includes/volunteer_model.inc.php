<?php

declare(strict_types= 1);


function send_application(object $pdo, string $name, string $number, string $email, string $reason){
    $query = "INSERT INTO volunteers (name, number, email, reason) VALUES (:name, :number, :email, :reason);";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":name", $name);
    $stmt->bindParam(":number", $number);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":message", $reason);
    $stmt->execute();
}