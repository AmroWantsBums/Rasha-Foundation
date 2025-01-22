const characterContainers = document.querySelectorAll(".character-container");

characterContainers.forEach(container => {
    
        container.addEventListener("mouseover", function(){
            if (window.innerWidth >= 768) {

            let content = container.querySelector(".content-text");
            let image = container.querySelector(".images");
            let name = container.querySelector(".name");
            let position = container.querySelector(".position");
    
            content.style.display = "block"; 
            content.style.opacity = 1;
            image.style.display = "none"; 
            name.style.display = "none";
            position.style.display = "none"; 
            container.style.overflow = "auto";
            }
        });
    
        container.addEventListener("mouseleave", function(){
            if (window.innerWidth >= 768) {
            let content = container.querySelector(".content-text");
            let image = container.querySelector(".images");
            let name = container.querySelector(".name");
            let position = container.querySelector(".position");
    
            content.style.display = "none"; 
            content.style.opacity = 0;
            image.style.display = "block"; 
            name.style.display = "block";
            position.style.display = "block"; 
            container.style.overflow = "hidden";
            }
        });
});
