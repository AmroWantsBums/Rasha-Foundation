const fadeTexts = document.querySelectorAll(".fade-text");

const rLetter = document.querySelector("#r-letter");
const aLetter = document.querySelector("#a-letter");
const sLetter = document.querySelector("#s-letter");
const hLetter = document.querySelector("#h-letter");
const otherALetter = document.querySelector("#second-a-letter");

setTimeout(() => {
    fadeTexts.forEach(text => {
        text.style.opacity = 0;
    });    
    setTimeout(() => {
        rLetter.style.left = "40%";   
        aLetter.style.left = "43%";   
        sLetter.style.left = "46%";   
        hLetter.style.left = "48.7%";   
        otherALetter.style.left = "51.8%";   
    }, 1500);
}, 1000);
