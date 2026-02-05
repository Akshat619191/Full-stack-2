import React from "react";
import "./App.css";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

/* ---------------- VALIDATION SCHEMA ---------------- */

const schema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Minimum 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters"),

  terms: yup
    .boolean()
    .oneOf([true], "You must accept terms & conditions"),
});

/* ---------------- MAIN COMPONENT ---------------- */

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Registration Successful ✅");
    reset();
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input placeholder="Username" {...register("username")} />
          <p className="error">{errors.username?.message}</p>
        </div>

        <div className="form-group">
          <input placeholder="Email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <p className="error">{errors.password?.message}</p>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" {...register("terms")} />
          <label>I accept terms & conditions</label>
        </div>
        <p className="error">{errors.terms?.message}</p>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
