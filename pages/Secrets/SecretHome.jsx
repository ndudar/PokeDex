import React from "react"
import { useNavigate } from "react-router-dom";

export default function SecretHome() {
  const passwordCheck = localStorage.loggedin
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.setItem("loggedin", false)
    navigate('/login')
  };


  if (passwordCheck === 'false') {
    return (
      <>
      <h3>You didn't say the password!</h3>
      <button onClick={() => navigate('/login')}>Try again</button>
      </>
    )
  } else {
    return (
      <div>
        <h1>I'm secret stuff!</h1>
        <button onClick={() => handleLogout()}>Log Out</button>
      </div>
    )
  }
}
