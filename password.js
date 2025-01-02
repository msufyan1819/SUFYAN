// Function to generate a random password
function generatePassword() {
    const length = document.getElementById("passwordLength").value;
    const includeUpperCase = document.getElementById("includeUpperCase").checked;
    const includeLowerCase = document.getElementById("includeLowerCase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSpecialChars = document.getElementById("includeSpecialChars").checked;
    
    // Define character sets
    let charSet = '';
    if (includeUpperCase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowerCase) charSet += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charSet += '0123456789';
    if (includeSpecialChars) charSet += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Ensure that there is at least one character set selected
    if (charSet === '') {
        alert('Please select at least one option.');
        return;
    }

    // Generate password
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    // Display the password in the input field
    document.getElementById("password").value = password;
}
