// Function to toggle light and dark mode
const toggleMode = () => {
    const body = document.body;

    // Toggle the light-mode class on the body
    body.classList.toggle("light-mode");

    // Optionally, save the current mode in localStorage to persist the mode across sessions
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("mode", "light");
    } else {
        localStorage.setItem("mode", "dark");
    }
};

// Check local storage for saved mode and apply it on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem("mode");

    if (savedMode === "light") {
        document.body.classList.add("light-mode");
    } else {
        document.body.classList.remove("light-mode");
    }
});

// Add event listener to the light/dark mode icon
const lightModeIcon = document.querySelector("#lightModeToggle");
if (lightModeIcon) {
    lightModeIcon.addEventListener("click", toggleMode);
}
