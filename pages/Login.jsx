import React from "react"

import { Form, redirect, useNavigation, useActionData, useLoaderData } from "react-router-dom"

import { secretPassword } from "../utils"

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message")
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
  const navigation = useNavigation()
  //const errorMessage = useActionData()
  const message = useLoaderData()

  function handleSubmit(evt) {
    evt.preventDefault()
    if (secretPassword(evt.target.value)) {
      localStorage.setItem('loggedin', true)
      return redirect('/secrets')
    }
  }

  return (
    <div className="login-container">
      <h1>What's the secret password?</h1>
      {message && <h3>{message}</h3>}
      <Form className="login-form" >
        <input name="password" type="password" placeholder="Password"/>
        <button onClick={handleSubmit} type='submit' disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Super secret things happening..." : "Knock Knock"}
        </button>
      </Form>
    </div>
  )
}
