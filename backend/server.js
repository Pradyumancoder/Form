const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/sendOTP", (req, res) => {
  const email = req.body.email;

  // Generate a random OTP (4-digit number)
  const otp = Math.floor(1000 + Math.random() * 9000);

  // Configure your email provider
  const transporter = nodemailer.createTransport({
    service: "your-email-service-provider",
    auth: {
      user: "your-email",
      pass: "your-email-password"
    }
  });

  const mailOptions = {
    from: "your-email",
    to: email,
    subject: "OTP Verification",
    text: `Your OTP: ${otp}`
  };

  // Send the email with OTP
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Failed to send OTP." });
    } else {
      console.log("Email sent:", info.response);
      res.json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
