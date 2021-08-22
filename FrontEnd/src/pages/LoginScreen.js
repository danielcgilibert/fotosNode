import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { startLoginEmailPassword } from "../actions/auth"

export const LoginScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(startLoginEmailPassword(email, password))
  }
  return (
    <div className="loginScreen">
      <form className="formLogin" onSubmit={handleSubmit} autoComplete="off">
        <h1>Log in</h1>

        <input
          type="email"
          required
          autoFocus
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="lEmail"
          placeholder="email"
        />

        <input
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="lPassword"
          placeholder="password"
        />
        <button type="submit">Iniciar</button>
        <Link to="/auth/register">
          <button type="button">Registrarte</button>
        </Link>
      </form>
    </div>
  )
}
