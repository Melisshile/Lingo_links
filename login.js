document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert(`Welcome back, ${email}!`);
    } else {
        alert("Please fill in all fields.");
    }
});
