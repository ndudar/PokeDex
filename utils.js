import { redirect } from "react-router-dom";

export function secretPassword(password) {
  const secret = 'CHARMANDER';
  return password === secret;
}

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn  = localStorage.getItem("loggedin")

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must say the secret password first!.&redirectTo=${pathname}`
    )
  }
}
