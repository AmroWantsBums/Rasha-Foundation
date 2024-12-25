const logo = document.querySelector("#logo");

setTimeout(() => {
    logo.style.top = 0;
    setTimeout(() => {
        logo.style.filter = `brightness(1)`;
        setTimeout(() => {
            logo.style.opacity = 0;
            setTimeout(() => {
                window.location.href = "./Home/homePage.html"
            }, 1000);
        }, 1500);
    }, 1000);
}, 1000);