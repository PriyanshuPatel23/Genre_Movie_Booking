import React, { useState } from "react";
import Form from "./partials/Form";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        oldPassword: password.currentPassword,
        newPassword: password.newPassword,
      };
      const response = await axios.put("/changePassword", payload);
      localStorage.removeItem("token");
      navigate("/signin");
    } catch (error) {
      console.error("Error changing password:", error.response || error);
    }
  };

  const fields = [
    {
      type: "password",
      name: "currentPassword",
      label: "Current Password",
      placeholder: "Enter current password",
      onChange: handleChange,
    },
    {
      type: "password",
      name: "newPassword",
      label: "New Password",
      placeholder: "Enter new password",
      onChange: handleChange,
    },
  ];

  return (
    <div className="mt-[10%]">
      <Form
        title="Change Password"
        fields={fields}
        buttonText="Change Password"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ChangePassword;
