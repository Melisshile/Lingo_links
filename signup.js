document.getElementById('signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const nationality = document.getElementById('nationality').value;
    // const gender = document.getElementsByName('gender').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const phoneNumber = document.getElementById('phone').value;
    
    //time to send a request
    const response = await fetch('/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({name, surname, username, email, password, confirmPassword, nationality, gender, phoneNumber})
    });

    //sending data to the server
    const data = await response.json();
    alert(data.message);
});