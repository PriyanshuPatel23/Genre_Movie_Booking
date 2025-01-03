import React, { useState } from "react";
import Form from "./partials/Form";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

function RequestReset() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/requestpasswordreset", { email });
      alert("Check your email for the reset link");
      navigate("/signin");
    } catch (error) {
      console.error(error);
      alert("Failed to send reset link");
    }
  };

  const fields = [
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: email,
      onChange: handleChange,
    },
  ];
  return (
    <div className="h-full w-full">
      <Form
        title="Request Reset Link"
        fields={fields}
        buttonText="Submit"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default RequestReset;
