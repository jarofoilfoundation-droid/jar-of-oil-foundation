document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSc54hPtrJL6jtb3YV7EZXbFea80WhJgVJe_iWr_JqPsFW2skQ/viewform?usp=dialog",
        {
            method: "POST",
            mode: "no-cors",
            body: formData
        }
    )
    .then(() => {

        alert(
            "🎉 Thank you for contacting Jar of Oil Foundation.\n\n" +
            "We have received your message and will get back to you soon."
        );

        form.reset();

    })
    .catch(() => {

        alert("Something went wrong. Please try again.");

    });

});