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

const ticketMail = async (response, ticketlink) => {
  const mailOpt = {
    from: EMAIL_ID,
    to: response.userId.email,
    subject: "Your Ticket Confirmation",
    html: `<div
  style="background-color: #FFFFFF; color: #000000; max-width: 400px; margin: 20px auto; border-radius: 15px; padding: 20px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); font-family: Arial, sans-serif; border: 1px solid #EAEAEA;"
>
  <div style="display: flex; align-items: center; margin-bottom: 20px;">
    <img
      src="${response.movieId.posterUrl || ""}"
      alt="${response.movieId.title || "Movie Poster"}"
      style="border-radius: 10px; margin-right: 15px; max-width: 100px; border: 1px solid #EAEAEA;"
    />
    <div>
      <h3 style="margin: 0; color: #000000;">${
        response.movieId.title || "N/A"
      }</h3>
      <p style="margin: 5px 0; color: #6C757D;">${
        response.movieId.genre || "N/A"
      }</p>
    </div>
  </div>

  <div
    style="border-top: 1px solid #EAEAEA; border-bottom: 1px solid #EAEAEA; padding: 10px 0; margin-bottom: 20px;"
  >
    <p style="margin: 5px 0;">Showtime: <b style="color: #6556CD;">${
      response.showtime || "N/A"
    }</b></p>
    <p style="margin: 5px 0;">Theatre: <b>${
      response.theatreId.name || "N/A"
    }</b></p>
    <p style="margin: 5px 0;">Location: <b>${
      response.theatreId.location || "N/A"
    }</b></p>
  </div>
  <div style="margin-bottom: 20px;">
    <p style="margin: 5px 0;">Seats: <b>${response.seats || "N/A"}</b></p>
    <p style="margin: 5px 0;">Booked by: <b>${
      response.userId.name || "N/A"
    }</b></p>
    <p style="margin: 5px 0;">Email: <b>${
      response.userId.email || "N/A"
    }</b></p>
  </div>

  <div style="border-top: 1px solid #EAEAEA; padding-top: 10px;">
    <p style="margin: 5px 0;">
      Total Paid: <span style="color: #6556CD; font-weight: bold;">₹${
        response.totalPrice || 0
      }</span>
    </p>
  </div>

  <div style="text-align: center; margin-top: 20px;">
    <a
      href="${ticketlink}"
      style="background: #6556CD; color: #FFFFFF; padding: 10px 20px; text-decoration: none; border-radius: 5px;"
    >
      Open Ticket
    </a>
  </div>
</div>
`,
  };
  await transporter.sendMail(mailOpt);
};

module.exports = { sendResetPasswordEmail, ticketMail };
