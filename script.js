/* MOBILE MENU */

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

if (menuBtn && navigation) {

menuBtn.addEventListener("click", function () {

    navigation.classList.toggle("active");

    if (navigation.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


const navLinks = navigation.querySelectorAll("a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navigation.classList.remove("active");
        menuBtn.textContent = "☰";

    });

});

}

/* ENQUIRY FORM → WHATSAPP */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !service || !message) {

        alert("Please fill in all required fields.");

        return;
    }

    const text =
        "Hello Gauravverse Financial & Web Solution,\n\n" +
        "New Website Enquiry\n\n" +
        "Name: " + name + "\n" +
        "Mobile: " + phone + "\n" +
        "Email: " + (email || "Not provided") + "\n" +
        "Service: " + service + "\n" +
        "Requirement: " + message;

    const whatsappURL =
        "https://wa.me/919209526442?text=" +
        encodeURIComponent(text);

    window.open(whatsappURL, "_blank");

});

}

/* SMOOTH SCROLL */

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

link.addEventListener("click", function(event) {

    const targetId = this.getAttribute("href");

    if (
        targetId &&
        targetId !== "#" &&
        document.querySelector(targetId)
    ) {

        event.preventDefault();

        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});

});
