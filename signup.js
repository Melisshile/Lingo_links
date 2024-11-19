document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const nationality = document.getElementById("nationality").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const phone = document.getElementById("phone").value.trim();

    // Validate fields
    if (!name || !surname || !nationality || !gender || !phone) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate phone number format
    const phoneRegex = /^[0-9]{10,15}$/; // Adjust regex as needed
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number (10-15 digits).");
        return;
    }

    // If all validations pass
    alert(`Thank you for signing up, ${name} ${surname}!`);
});
