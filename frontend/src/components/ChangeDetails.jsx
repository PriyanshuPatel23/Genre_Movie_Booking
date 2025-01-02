import React, { useState } from "react";
import Form from "./partials/Form";
import axios from "../utils/axios";

function ChangeDetails() {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put("/changeData", user);
  };

  const fields = [
    {
      type: "text",
      name: "name",
      placeholder: "Name",
      onChange: handleChange,
    },
    {
      type: "email",
      name: "email",
      placeholder: "Email",
      onChange: handleChange,
    },
  ];
  return (
    <div className="mt-[10%]">
      <Form
        title="Change Details"
        fields={fields}
        buttonText="Change Details"
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default ChangeDetails;
