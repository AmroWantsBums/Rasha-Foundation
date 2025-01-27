<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["phone-number"];
    $reason = $_POST["reason"];

    try {
        require_once("./dbh.inc.php");
        require_once("./volunteer_contr.inc.php");
        require_once("./volunteer_view.inc.php");
        require_once("./volunteer_model.inc.php");

        $errors = [];

        if (is_input_empty($name, $email, $number, $reason)){
            $errors["empty_input"] = "Fill in all fields!";
        }

        if (is_email_invalid($email)){
            $errors["invalid_email"] = "Invalid email used";
        }

        if ($errors){
            
        }
    
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
}
else{
    header("location: ../Home/homePage.html");
    die();
}