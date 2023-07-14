function sendOTP(event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value;

  // Send a POST request to the backend to generate and send OTP
  fetch("/sendOTP", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email })
  })
  .then(response => response.json())
  .then(data => {
    // OTP sent successfully
    alert("OTP has been sent to your email.");
  })
  .catch(error => {
    // Error occurred while sending OTP
    console.error("Error:", error);
    alert("Failed to send OTP. Please try again.");
  });
}
