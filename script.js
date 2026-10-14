
document.getElementById("year").textContent =
    new Date().getFullYear();

function toggleMenu() {
    document.getElementById("navLinks")
        .classList.toggle("show");
}

document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navLinks")
            .classList.remove("show");
    });
});

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("response").textContent =
            "Thank you, " + name +
            "! Your form was submitted successfully.";

        this.reset();
    });
