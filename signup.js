document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let errorMsg = document.getElementById("errorMsg");

    if (name === "" || email === "" || phone === "" || password === "") {
        errorMsg.textContent = "All fields are required!";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        errorMsg.textContent = "Enter a valid email!";
        return;
    }

    if (phone.length < 10 || isNaN(phone)) {
        errorMsg.textContent = "Enter a valid phone number!";
        return;
    }

    if (password.length < 6) {
        errorMsg.textContent = "Password must be at least 6 characters!";
        return;
    }

    errorMsg.style.color = "green";
    errorMsg.textContent = "Signup successful!";
});
