<?php

ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php_errors.log'); // Logs errors in a file



if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["phone-number"];
    $reason = $_POST["reason"];

    var_dump($name, $email, $number, $reason);

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

        require_once("./config_session.inc.php");

        if ($errors){
            $_SESSION["errors_signup"] = $errors;
            var_dump($errors);
            die();
        }
        
        send_application($pdo, $name, $email, $number, $reason);

        echo '<div id="success-message">';

        echo '<p">Application sent. Thank you for volunteering</p>';
        
        echo '</div>';

    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
}
else{
    header("location: ../Home/homePage.html");
    die();
}