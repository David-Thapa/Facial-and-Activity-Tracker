import React from "react";
import Duck from "../assests/images/Duck.png";
import Logo1 from "../assests/images/Logo1.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assests/style/SignIn.css";
import { useState } from 'react';

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
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

    if(!formData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(formData.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Login successfully")
    }

  }

  return (
    <section className="avian-vision1">
      <main className="main">
        <div className="flex-container">
          <div className="signin-form">
            <img src={Logo1} alt="Avian Vision logo" className="logo" />
            <h3 className="title">Welcome back</h3>

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
                className="signin-button"
              >
                Sign in
              </button>
            </form>

            <p className="signup-link">
              Don't have an account? <Link to="/SignUp">Sign up</Link>
            </p>
          </div>

          <div className="image-container">
            <img src={Duck} alt="Duck image" className="duckin-image" />
          </div>

        </div>
      </main>
    </section>
  );
};

export default SignIn;