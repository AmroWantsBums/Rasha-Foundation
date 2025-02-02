<?php

declare(strict_types= 1);

function check_signup_errors(){
    if (isset($_SESSION["errors_signup"])){
        $errors = $_SESSION["errors_signup"];
        echo '<script>console.log("It is checking for errors");</script>';

        echo '<div id="error-message">';

        foreach ($errors as $error) {
            echo '<p class="form-error">' . htmlspecialchars($error) . '</p>';
        }
        
        echo '</div>';

        unset($_SESSION["errors_signup"]);
    }
}