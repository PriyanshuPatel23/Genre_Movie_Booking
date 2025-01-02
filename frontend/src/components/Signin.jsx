import React, { useState } from "react";
import Form from "./partials/Form";
import axios from "../utils/axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/login", formData);
    localStorage.setItem("token", response.data.data.token);
    navigate("/user");
  };

  const fields = [
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      value: formData.email,
      onChange: handleChange,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Password",
      value: formData.password,
      onChange: handleChange,
    },
  ];

  return (
    <div className="h-full w-full">
      <Form
        title="Signin"
        fields={fields}
        buttonText="Signin"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Signin;
