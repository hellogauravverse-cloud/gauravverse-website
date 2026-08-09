// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

if (menuBtn) {
menuBtn.addEventListener("click", function () {
navigation.classList.toggle("active");
});
}

// CLOSE MOBILE MENU AFTER CLICKING A LINK

document.querySelectorAll("#navigation a").forEach(function (link) {

link.addEventListener("click", function () {  
    navigation.classList.remove("active");  
});

});

// ENQUIRY FORM → WHATSAPP

const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", function (event) {  

    event.preventDefault();  

    const name =  
        document.getElementById("name").value.trim();  

    const phone =  
        document.getElementById("phone").value.trim();  

    const email =  
        document.getElementById("email").value.trim();  

    const service =  
        document.getElementById("service").value;  

    const message =  
        document.getElementById("message").value.trim();  


    const whatsappMessage =

`Hello Gauravverse Financial & Web Solution,

I have a new website enquiry.

Name: ${name}
Mobile: ${phone}
Email: ${email || "Not provided"}
Service: ${service}
Requirement: ${message}

Please contact me regarding this enquiry.`;

const whatsappURL =  
        "https://wa.me/919209526442?text=" +  
        encodeURIComponent(whatsappMessage);  


    window.open(whatsappURL, "_blank");  

});

}
