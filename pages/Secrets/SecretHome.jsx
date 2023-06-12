import React from "react"
import { useLoaderData, useNavigate } from "react-router-dom";

//import { requireAuth } from "../../utils";

// export async function loader({ request }) {
//   console.log('secret loader', localStorage)
//   await requireAuth(request);
//   return {}
// }

export default function SecretHome() {
  //const data = useLoaderData();
  const passwordCheck = localStorage.loggedin
  const navigate = useNavigate()

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
      </div>
    )
  }
}
