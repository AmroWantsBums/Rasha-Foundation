const projects = [
    { title: "Project One", year: "2024", description: "This is the description for the first project." },
    { title: "Project Two", year: "2023", description: "Description of the second project, including its key highlights." },
    { title: "Project Three", year: "2022", description: "Description for the third project, covering its purpose and impact." },
    { title: "Project Four", year: "2021", description: "Details about the fourth project, its goals, and its challenges." },
];

const timelineContainer = document.querySelector(".timeline-container");

projects.forEach((project, index) => {
    const container = document.createElement("div");
    container.classList.add("timeline-item");

    if (index % 2 === 0) {
        container.classList.add("left");
    } else {
        container.classList.add("right");
    }

    container.setAttribute("data-index", index);
    
    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = `<h3>${project.title}</h3><p>${project.year}</p>`;
    
    container.appendChild(content);
    timelineContainer.appendChild(container);
});

if (window.innerWidth >= 768) {
    const leftDisplay = document.querySelector("#left-display");
    const rightDisplay = document.querySelector("#right-display");
    
    const projectContainers = document.querySelectorAll(".timeline-item");
    
    projectContainers.forEach(container => {
        container.addEventListener("mouseover", () => {
            projectContainers.forEach(otherContainer => {
                if (otherContainer !== container) {
                    otherContainer.style.pointerEvents = "none"; 
                    otherContainer.style.opacity = 0; 
                }
            });
    
            const index = container.getAttribute("data-index");
            const project = projects[index];
    
            if (container.classList.contains("left")) {
                rightDisplay.style.opacity = 1;
                rightDisplay.innerHTML = project.description;
            } else {
                leftDisplay.style.opacity = 1;
                leftDisplay.innerHTML = project.description; 
            }
        });
    
        container.addEventListener("mouseleave", () => {
            projectContainers.forEach(otherContainer => {
                if (otherContainer !== container) {
                    otherContainer.style.pointerEvents = "auto"; 
                    otherContainer.style.opacity = 1; 
                }
            });
            leftDisplay.style.opacity = 0;
            rightDisplay.style.opacity = 0;
        });
    });    
}
