WelcomeMessage();

function WelcomeMessage(){
    // Show Popup
    let name = prompt("Welcome to Rama Company Website! what is your name?");

    // validate input
    if (name == null || name.trim() === "") {
        // if user cancel the prompt or enter empty name, set default name to "Guest"
        name = "Guest";
    }

    // Display welcome message
    document.getElementById("welcome-speech").textContent = "Hello, " + name + "! Welcome to Rama Company Website!";
}
