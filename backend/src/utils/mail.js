const nodemailer = require("nodemailer");
const { EMAIL_ID, EMAIL_PASS } = require("../config/server-config");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: EMAIL_ID,
    pass: EMAIL_PASS,
  },
});

const sendResetPasswordEmail = async (email, resetLink) => {
  const mailOptions = {
    from: EMAIL_ID,
    to: email,
    subject: "Reset Your Password",
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password. This link is valid for 1 hour.</p>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendResetPasswordEmail };
