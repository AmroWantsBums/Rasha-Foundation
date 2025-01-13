const characters = document.querySelectorAll(".character-container");
let index = 0;
updateDisplay(0);

function updateDisplay(currentIndex){
    characters.forEach(character => {
        character.style.opacity = 0; 
        character.style.visibility = "hidden";
        character.classList.remove(".active");
        characters[currentIndex].style.visibility = "visible";
        characters[currentIndex].style.opacity = 1;
        characters[currentIndex].classList.add(".active");
    });
    
}
const nextButton = document.querySelector("#right-arrow").addEventListener("click", function(){
    if (index < characters.length){
        index++;
        updateDisplay(index);
    }
    else{
        index = 0;
        updateDisplay(index);
    }
})

const previousButton = document.querySelector("#left-arrow").addEventListener("click", function(){
    if (index > 0){
        index--;
        updateDisplay(index);
    }
    else{
        index = characters.length - 1;
        updateDisplay(index);
    }
})
