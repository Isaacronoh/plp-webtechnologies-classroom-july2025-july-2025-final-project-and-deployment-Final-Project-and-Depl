// Placeholder JS for future animations
document.addEventListener("DOMContentLoaded", () => {
  console.log("Landing Page Loaded");
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    // Disable button to avoid multiple clicks
    button.disabled = true;
    button.style.opacity = "0.7";

    // Add loading spinner and text
    button.innerHTML = `<span class="spinner"></span> Waiting for payment...`;

    // (Optional) After 10s, reset button
    setTimeout(() => {
      button.disabled = false;
      button.style.opacity = "1";
      button.innerHTML = "Send";
    }, 10000); // 10 seconds
  });
});
