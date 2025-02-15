<?php

declare(strict_types= 1);

function fetch_volunteers(object $pdo){
    $query = "SELECT * FROM volunteers;";
    $stmt = $pdo->query($query);
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}