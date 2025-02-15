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
        import {
            loadNavbar
        } from "../Javascript/navigationBar.js";
        loadNavbar("Volunteer");
    </script>
    <!-- <script src="../Javascript/volunteerPage.js" defer></script> -->
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

        <h1>Volunteers</h1>

        <?php
            require_once("./Includes/dbh.inc.php");
            
            fetch_volunteers($pdo);
        ?>
        <div id="volunteers">
            <?php foreach ($volunteers as $volunteer): ?>
                <div class="volunteer-container">
                    <h2 class="volunteer-name"><?php echo htmlspecialchars($volunteer['name']); ?></h2>
                    <h3 class="volunteer-email"><?php echo htmlspecialchars($volunteer['email']); ?></h3>
                    <h3 class="volunteer-number"><?php echo htmlspecialchars($volunteer['phoneNumber']); ?></h3>
                    <p class="volunteer-reason"><?php echo htmlspecialchars($volunteer['reason']); ?></p>
                    <button class="buttons accept-button">Accept</button>
                    <button class="buttons reject-button">Reject</button>
                </div>
            <?php endforeach; ?>
        </div>


        <div id="footer">
            © RASHA. All rights reserved
        </div>
    </main>
</body>

</html>