import React from "react";
import RestrictBackNavigation from "../partials/RestrictBackNavigation";

const ThankYouPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div style={{ fontSize: "100px", color: "green" }}>✔</div>
      <h1 className="text-white font-bold text-3xl">Thank you for booking!</h1>
      <p className="text-white font-bold text-3xl">
        Your ticket details have been sent to your email.
      </p>
      <RestrictBackNavigation />
    </div>
  );
};

export default ThankYouPage;
