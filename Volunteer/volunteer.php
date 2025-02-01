<?php
    require_once "./Includes/config_session.inc.php";
    require_once "./Includes/volunteer_view.inc.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../CSS/generalStyling.css">
    <link rel="stylesheet" href="../CSS/navigationBarStyling.css">
    <script src="../Javascript/cursor.js" defer></script>
    <script type="module">
        import { loadNavbar } from "../Javascript/navigationBar.js";
        loadNavbar("Volunteer");
    </script>
</head>

<body>
    <header id="header">
        <div id="name-section">
            <img src="../Images/Rasha Fonudation Logo.png" alt="Image of the logo" id="nav-logo">
            <div id="name-logo">Rebuilding African Societies through shared Hope and Aid</div>
        </div>
        <nav id="nav-bar">
            <div id="burger-menu">
                <img src="../Images/burger-bar.png" alt="Burger menu icon" id="burger-icon">
            </div>
        </nav>
    </header>

    <main>
        <svg xmlns="http://www.w3.org/2000/svg" class="goo" version="1.1" width="100%">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo"></feColorMatrix>
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"></feComposite>
                </filter>
            </defs>
        </svg>

        <div id="cursor"></div>

        <form action="../Volunteer/Includes/volunteer.inc.php" method="post">
            <label for="name">Full Name</label>
            <input type="text" name="name" placeholder="Full name">
            <input type="text" name="email" placeholder="Email">
            <input type="text" name="phone-number" placeholder="Phone number">
            <input type="text" name="reason" placeholder="Reason for volunteer">
            <button type="submit"></button>
        </form>

        <?php
            check_signup_errors();
        ?>
        
        <div id="footer">
            © RASHA. All rights reserved
        </div>
    </main>
</body>
</html>
