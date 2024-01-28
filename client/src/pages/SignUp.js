import React from "react";
import Duck from "../assests/images/Duck.png";
import Logo1 from "../assests/images/Logo1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assests/style/SignUp.css";
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
        ...formData, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()) {
        validationErrors.username = "username is required"
    }

    if(!formData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
    }

  }

  return (
    <section className="avian-vision1">
      <main className="main">
        <div className="flex-container">
          <div className="signup-form">
            <img src={Logo1} alt="Avian Vision logo" className="logo" />
            <h3 className="title">Create your account</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username"></label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.username && <span className="error-message">{errors.username}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>

              <button
                type="submit"
                className="signup-button"
              >
                Sign up
              </button>
            </form>

            <p className="signin-link">
              Already have an account? <Link to="/SignIn">Sign in</Link>
            </p>
          </div>

          <div className="image-container">
            <img src={Duck} alt="Duck image" className="duck-image" />
          </div>

        </div>
      </main>
    </section>
  );
};

export default SignUp;
