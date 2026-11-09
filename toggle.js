const lightBtn = document.getElementById("light-btn");
const lightDiv = document.getElementById("my-light");

// Create a function to toggle the light
function toggleLight() {
    // toggle() automatically adds "on" if it's missing, or removes it if it's there!
    lightDiv.classList.toggle("on");

    // Change the button text depending on whether the light is on or off
    if (lightDiv.classList.contains("on")) {
        lightBtn.textContent = "Turn Light Off";
    } else {
        lightBtn.textContent = "Turn Light On";
    }
}

// Connect the function to an event listener
lightBtn.addEventListener("click", toggleLight);