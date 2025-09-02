import React from "react";
import AdminNav from "./AdminNav";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const Add = () => {
  const { handleSubmit } = useFormik({
    initialValues: {
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <AdminNav />
      <div className="container-fluid mt-3">
        <div className="row">
          <div
            className="sider col-md-2"
            style={{
              backgroundColor: "#f8f9fa",
              padding: "20px",
              height: "88vh",
              boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
            }}
          >
            <div className="quickLinks">
              <h5 className="fw-bolder text-decoration-underline">
                Quick Links
              </h5>
              <ul>
                <li className="list-unstyled">
                  <Link
                    to="/admin"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Image
                </label>
                <input type="file" name="image" accept="image/*" />
              </div>

              <button type="submit" className="btn btn-primary">
                Post
              </button>
            </form>

            <h1
              className="text-center mt-5 fw-bold"
              style={{ fontSize: "3rem", color: "#ff6f61" }}
            >
              🚧 Under Construction 🚧
            </h1>
            <p className="text-center text-muted" style={{ fontSize: "1.2rem" }}>
              We're working hard to bring you something amazing. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
