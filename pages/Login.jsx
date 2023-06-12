import React, { useState } from "react";

import {
  Form,
  useNavigation,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";

import { secretPassword } from "../utils";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

// export async function action({ request }) {
//   const formData = await request.formData();
//   const password = formData.get('password');
//   const pathname = '/secrets'
//   try {
//     const data = await secretPassword(password)
//     if (data) localStorage.setItem("loggedin", true)
//     return redirect(pathname)
//   } catch (err) {
//     return err.message
//   }
// }

export default function Login() {
  const navigation = useNavigation();
  //const errorMessage = useActionData()
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const check = secretPassword(password)
    if (check) {
      localStorage.setItem("loggedin", true);
      navigate("/secrets");
    } else {
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
