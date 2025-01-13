const navPages = [
    {name: "Home" , href: '/Umalrabeain/Home/homePage.html'},
    {name: "Our Work" , href: '/Umalrabeain/General Trade/generalTrade.html'},
    {name: "The Team" , href: '/Umalrabeain/Our Team/meetUs.html'},
    {name: "Contact" , href: '/Umalrabeain/Contact/contact.html'}
];

export function loadNavbar(CurrentPageName){
    const nav = document.querySelector("#nav-bar"); 
    const ul = document.createElement("ul");

    // Loop through each page in the navPages array
    for(let page of navPages){
        const li = document.createElement("li"); 
        li.classList.add("navBarOption"); 
        
        if (CurrentPageName != page.name){
            const a = document.createElement("a"); 
            a.innerText = page.name; 
            a.setAttribute("href", page.href); 
            li.appendChild(a);          
        } 
        else {
            li.innerText = page.name; 
            li.style.color = "black"; 
            li.style.textDecoration = "underline"; 
        }
        ul.appendChild(li);      
    }
    nav.appendChild(ul); 
}



document.getElementById('burger-icon').addEventListener('click', function () {
    const navOptions = document.querySelectorAll('.navBarOption');
    navOptions.forEach(option => {
        option.classList.toggle('show');
    });
    const navBar = document.querySelector("#nav-bar").classList.toggle("show");
});