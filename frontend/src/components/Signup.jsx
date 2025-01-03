import React, { useState } from "react";
import axios from "../utils/axios";
import Form from "./partials/Form";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup data:", formData);
    await axios.post("/signup", formData);
    navigate("/user");
  };

  const fields = [
    {
      type: "text",
      name: "name",
      placeholder: "Name",
      value: formData.name,
      onChange: handleChange,
    },
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
        title="Signup"
        fields={fields}
        buttonText="Signup"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default Signup;
