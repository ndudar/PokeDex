import { redirect } from "react-router-dom";

export function secretPassword(password) {
  const secret = 'CHARMANDER';
  return password === secret;
}
