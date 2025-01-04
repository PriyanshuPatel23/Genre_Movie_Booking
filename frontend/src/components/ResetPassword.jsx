import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Form from "./partials/Form";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const resetToken = searchParams.get("token");
  const userId = searchParams.get("id");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/resetpassword", {
      userId: userId,
      newPassword: password,
      resetToken: resetToken,
    });
    localStorage.removeItem("token");
    navigate("/signin")
  };

  const fields = [
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      value: password,
      onChange: handleChange,
    },
  ];
  return (
    <div className="h-full w-full">
      <Form
        title="Reset Password"
        fields={fields}
        buttonText="Submit"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ResetPassword;
