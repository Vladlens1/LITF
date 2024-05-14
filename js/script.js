const firstGame = document.querySelector('#first-game-btn');

firstGame.addEventListener('click', flashCards);

function flashCards(event) {
    alert("Tu esi GEJS! Vai arī ejam atpūsties?")
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var showPasswordButton = document.getElementById("show-password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        showPasswordButton.innerHTML = '<img src="img/passhow.png" alt="">';
    } else {
        passwordField.type = "password";
        showPasswordButton.innerHTML = '<img src="img/passshowclosed.png" alt="">';
    }
}



