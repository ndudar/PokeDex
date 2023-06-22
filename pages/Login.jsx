import React, { useState, useEffect } from "react";

import {
  Form,
  useNavigation,
  useNavigate,
} from "react-router-dom";

import { secretPassword } from "../utils";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export default function Login() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedin");

    if (isLoggedIn === "true") {
      navigate("/secrets");
    }
  }, [navigate]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const check = secretPassword(password)
    if (check) {
      localStorage.setItem("loggedin", true);
      navigate("/secrets");
    } else {
      localStorage.setItem("loggedin", false)
      setErrorMessage("Nope! You must say the secret password!")
    }
  };

  return (
    <div className="login-container">
      <h1>What's the secret password?</h1>
      {errorMessage && <h3>{errorMessage}</h3>}
      <Form className="login-form" onSubmit={handleSubmit}>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting"
            ? "Super secret things happening..."
            : "Knock Knock"}
        </button>
      </Form>
    </div>
  );
}
