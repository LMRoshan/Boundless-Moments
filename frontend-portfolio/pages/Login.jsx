import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaEye, FaEyeSlash, FaUserNinja, FaUnlockAlt } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../src/App.css"

const Login = () => {
  const form = {
    username: "",
    password: "",
  };

  const LoginSchema = Yup.object({
    username: Yup.string()
      .min(2, "Invalid username")
      .required("Username is required"),
    password: Yup.string().min(5, "Password must be at least 6 characters").required("Password is required"),
  });

  const { values, handleChange, handleSubmit, handleBlur, touched, errors } =
    useFormik({
      initialValues: form,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        // console.log("onSubmit called!");
        console.log(values);
        const { username, password } = values;
        try {
          const response = await fetch("https://boundless-moments.onrender.com/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
          });

          const json = await response.json();
          if (json.success) {
            localStorage.setItem("authToken", json.authToken);
            navigate("/admin");
          } else {
            alert("Invalid credentials");
            action.resetForm();
          }
        } catch (error) {
          console.log("Network Error", error);
        }
      },
    });

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="text-center mb-4">
          <h2
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
              letterSpacing: "2px",
              marginBottom: "1rem",
              textTransform: "uppercase",
              background: "linear-gradient(to right, #eee, var(--secondary-color), #eee)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Welcome Back
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-bold">
              Username
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUserNinja style={{ color: "#e74c3c" }} />
              </span>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                id="username"
                autoFocus
                required
              />
            </div>
            {errors.username && touched.username ? (
              <p className="text-danger">{errors.username}</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon2">
                <FaUnlockAlt style={{ color: "#e74c3c" }} />
              </span>
              <input
                type={passwordVisibility ? "text" : "password"}
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
                id="password"
                required
              />
              <span
                className="input-group-text"
                onClick={() => changePasswordVisibility()}
              >
                {passwordVisibility ? <FaEyeSlash style={{ color: "#e74c3c" }} /> : <FaEye style={{ color: "#e74c3c" }} />}
              </span>
            </div>
            {errors.password && touched.password ? (
              <p className="text-danger">{errors.password}</p>
            ) : null}
          </div>
          <Link className="mb-2 text-decoration-none" to="/forgot-password">
            Forgot Password
          </Link>
          <button
            type="submit"
            className="submit-btn w-100 mt-3 mb-3"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
