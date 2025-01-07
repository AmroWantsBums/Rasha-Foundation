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
        rLetter.style.left = "44%";   
        aLetter.style.left = "47%";   
        sLetter.style.left = "50%";   
        hLetter.style.left = "52.7%";   
        otherALetter.style.left = "55.8%";   
    }, 1000);
}, 500);


const scrollText = document.querySelector("#scroll-text");

setInterval(function () {
    scrollText.style.transform = "translateY(30%)";
    setTimeout(function () {
        scrollText.style.transform = "translateY(0%)";
    }, 400);
}, 800);

// Function to create an IntersectionObserver with parameters for target and threshold
function createIntersectionObserver(target, thresholdLevel) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Scroll to a percentage of the viewport dynamically
                const scrollToPercentage = (percentage) => {
                    // Stop the page from continuing to scroll
                    window.scrollTo(0, window.scrollY);

                    // Disable body scrolling
                    document.body.style.overflow = 'hidden';

                    // Calculate the target position dynamically based on viewport height
                    const targetPosition = window.innerHeight * (percentage / 100);

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth',
                    });
                    element.style.overflow = "scroll";
                };

                scrollToPercentage(125); // Adjust as needed

                // Dynamically style the target element
                target.style.width = "90%"; // Adjust width dynamically in percentage
                target.style.height = "80vh"; // Use vh for viewport-relative height
                target.style.display = "block";

                // Show the text container after a delay
                setTimeout(() => {
                    const textContainer = document.querySelector("#main-text-container");
                    textContainer.style.visibility = "visible";
                    textContainer.style.opacity = "1";
                }, 1000);
            }
        });
    }, { threshold: thresholdLevel });

    // Start observing the target element
    observer.observe(target);
}


// // Example usage: 
// const target1 = document.querySelector('#header'); // Example target 1
// createIntersectionObserver(target1, 0.1); // Observe with 10% visibility threshold

const target2 = document.querySelector('#details-section'); // Example target 2
createIntersectionObserver(target2, 0.2); // Observe with 50% visibility threshold


const element = document.querySelector('#details-section');  // Replace with your target element

element.addEventListener('scroll', () => {
  const isAtTop = element.scrollTop === 0;

  // Use a tolerance of 1 pixel to check if it's at the bottom
  const isAtBottom = element.scrollTop + element.clientHeight >= element.scrollHeight - 1;

  if (isAtTop) {
    document.body.style.overflow = 'auto';
    element.style.overflow = "hidden";
  }

  if (isAtBottom) {
    document.body.style.overflow = 'auto';
    element.style.overflow = "hidden";
  }
});




const counter = document.querySelector("#counter");

const counterObserver = new IntersectionObserver((entries, observer) => {
    // Only start the counting if the element is fully in view
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let target = 0;
            let currentCount = 0;
            
            // Use requestAnimationFrame for smoother counting
            function updateCount() {
                if (currentCount < target) {
                    currentCount++;
                    counter.innerText = currentCount;
                    requestAnimationFrame(updateCount);  // Continue updating the count
                }
            }

            updateCount();  // Start the count

            observer.disconnect();  // Stop observing once the counting has started
        }
    });
}, { threshold: 1 });

counterObserver.observe(counter);


const benefeciariesSection = document.querySelector("#beneficiaries-section");

const beneficiariesObserver = new IntersectionObserver((entries, observer) => {
    // Only start the counting if the element is fully in view
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const listItems = document.querySelectorAll("#beneficiaries-list li")
        let index = 0;

        setInterval(() => {
        if (index < listItems.length){
            listItems[index].style.opacity = "1";
            index++;        
        }
    }, 700);

            observer.disconnect();  // Stop observing once the counting has started
        }
    });
}, { threshold: 0.2 });

beneficiariesObserver.observe(benefeciariesSection);


const locationPin = document.querySelector("#location-pin");

setInterval(function () {
    locationPin.style.transform = "translateY(-30%)";
    setTimeout(function () {
        locationPin.style.transform = "translateY(-5%)";
    }, 400);
}, 800);