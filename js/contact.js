document.getElementById("contactForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const form = this;

    const email = document.getElementById("email");
    const phone = document.getElementById("phone");

    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");

    // Clear previous errors
    emailError.textContent = "";
    phoneError.textContent = "";

    email.classList.remove("input-error");
    phone.classList.remove("input-error");

    let valid = true;

    // --------------------------------
    // EMAIL VALIDATION
    // --------------------------------

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailPattern.test(email.value.trim())) {

        emailError.textContent = "Please enter a valid email address.";
        email.classList.add("input-error");

        valid = false;
    }

    // --------------------------------
    // PHONE VALIDATION
    // --------------------------------

    if (!iti.isValidNumber()) {

        phoneError.textContent =
            "Please enter a valid phone number.";

        phone.classList.add("input-error");

        valid = false;
    }

    // Stop if email or phone is invalid
    if (!valid) {
        return;
    }

    // --------------------------------
    // GET FULL INTERNATIONAL PHONE NUMBER
    // --------------------------------

    const fullPhoneNumber = iti.getNumber();

    // Put the full number into the phone input
    phone.value = fullPhoneNumber;

    // --------------------------------
    // SEND TO GOOGLE FORMS
    // --------------------------------

    const formData = new FormData(form);

    fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSc54hPtrJL6jtb3YV7EZXbFea80WhJgVJe_iWr_JqPsFW2skQ/formResponse",
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

        // Reset country to Kenya
        iti.setCountry("ke");

        // Clear errors
        emailError.textContent = "";
        phoneError.textContent = "";

        email.classList.remove("input-error");
        phone.classList.remove("input-error");

    })
    .catch(() => {

        alert("Something went wrong. Please try again.");

    });

});