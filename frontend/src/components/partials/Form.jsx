import React from "react";
import { Link } from "react-router-dom";

function Form({ title, fields, buttonText, onSubmit }) {
  return (
    <div className="flex justify-center items-center h-full">
      <form
        onSubmit={onSubmit}
        className="bg-white text-white p-8 rounded-md shadow-lg space-y-4 w-96"
      >
        <h2 className="text-2xl font-semibold text-[#6556CD]">{title}</h2>
        {fields.map((field, index) => (
          <input
            key={index}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={field.value}
            onChange={field.onChange}
            className="w-full p-2 bg-[#2A2933] text-white rounded-md"
          />
        ))}
        <button
          type="submit"
          className="w-full p-2 bg-[#6556CD] text-white rounded-md hover:bg-[#5048a5]"
        >
          {buttonText}
        </button>
        <p className="text-black">
          {title === "Signin" ? (
            <>
              Not in yet?{" "}
              <Link to={"/signup"} className="text-blue-500 cursor-pointer">
                Signup!!
              </Link>
            </>
          ) : (
            <>
              Already a user?{" "}
              <Link to={"/signin"} className="text-blue-500 cursor-pointer">
                Signin!!
              </Link>
            </>
          )}
        </p>{" "}
        <p>
          Forgot your password?{" "}
          <Link to={"/request-password-reset"} className="text-blue-500 cursor-pointer">
            Click here to reset it.
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Form;
