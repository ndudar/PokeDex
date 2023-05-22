import React from "react"

import { Form, useNavigation } from "react-router-dom"

export default function Login() {
  const navigation = useNavigation()

  return (
    <div className="login-container">
      <h1>What's the secret password?</h1>
      <Form className="login-form">
        <input name="password" type="password" placeholder="Password"/>
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Super secret things happening..." : "Knock Knock"}
        </button>
      </Form>
    </div>
  )
}
