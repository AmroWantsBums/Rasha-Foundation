<?php

declare(strict_types= 1);

function is_input_empty(string $name, string $number, string $email, string $message){
    if (empty($name) || empty($email) || empty($number) || empty($message)){
        return true;
    }
    else{
        return false;
    }
}

function is_email_invalid(string $email){
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        return true;
    }
    else{
        return false;
    }
}
