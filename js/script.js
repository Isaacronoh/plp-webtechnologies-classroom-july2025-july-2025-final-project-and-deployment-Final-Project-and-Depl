// Placeholder JS for future animations
document.addEventListener("DOMContentLoaded", () => {
  console.log("Landing Page Loaded");
});


document.addEventListener("DOMContentLoaded", function () {
  const payBtn = document.getElementById("payBtn");

  if (payBtn) {
    payBtn.addEventListener("click", function () {
      payBtn.disabled = true;
      payBtn.style.opacity = "0.7";
      payBtn.innerHTML = `<span class="spinner"></span> Waiting for payment...`;

      setTimeout(() => {
        payBtn.disabled = false;
        payBtn.style.opacity = "1";
        payBtn.innerHTML = "Send Payment";
      }, 10000);
    });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const validateBtn = document.getElementById("form");
  const numberInput = document.getElementById("number");
  const amountInput = document.getElementById("amount");
  const overlay = document.getElementById("overlay");

  const numberError = document.getElementById("numberError");
  const amountError = document.getElementById("amountError");

  // Live validation for phone number
  numberInput.addEventListener("input", () => {
    const number = numberInput.value.trim();
    const phoneRegex = /^(07|01)\d{8}$/;

    if (!phoneRegex.test(number)) {
      numberError.textContent = "Enter a valid M-PESA number (07xxxxxxxx or 01xxxxxxxx).";
    } else {
      numberError.textContent = "";
    }
  });

  // Live validation for amount
  amountInput.addEventListener("input", () => {
    const amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 1) {
      amountError.textContent = "Enter an amount greater than 1 shilling.";
    } else {
      amountError.textContent = "";
    }
  });

  // Submit handling
  if (validateBtn) {
    validateBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const number = numberInput.value.trim();
      const amount = parseFloat(amountInput.value);

      if (numberError.textContent || amountError.textContent) {
        return; // stop submission if errors exist
      }

      overlay.style.display = "flex";

      setTimeout(() => {
        overlay.style.display = "none";
      }, 10000);
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const response = document.getElementById("response");

      if (name && email && message) {
        response.textContent = `Thank you, ${name}! Your message has been received.`;
        response.style.color = "green";
        this.reset();
      } else {
        response.textContent = "Please fill in all fields before submitting.";
        response.style.color = "red";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const joinForm = document.getElementById("joinForm");
  if (joinForm) {
    joinForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("fullname").value.trim();
      const role = document.getElementById("role").value;
      const response = document.getElementById("joinResponse");

      if (name && role) {
        response.textContent = `🎉 Welcome, ${name}! Thank you for joining us as a ${role}. We will reach out to you soon.`;
        response.style.color = "green";
        this.reset();
      } else {
        response.textContent = "Please complete all required fields before submitting.";
        response.style.color = "red";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleBtn1");
  const extraText = document.getElementById("extraText1");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (extraText.style.display === "none" || extraText.style.display === "") {
        extraText.style.display = "block";
        toggleBtn.textContent = "Show Less";
      } else {
        extraText.style.display = "none";
        toggleBtn.textContent = "Read More";
      }
    });
  }
});
