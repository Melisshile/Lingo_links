document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    //time to send a request
    const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    //sending data to the server
    const data = await response.json();
    alert(data.message + 'Welcome ' + data.name);
});