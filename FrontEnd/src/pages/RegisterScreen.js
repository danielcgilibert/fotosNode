import React from 'react'

export const RegisterScreen = () => {
    return (
        <div className="loginScreen">
        <form className="formLogin"  autocomplete="off">
          <h1>Register</h1>

          <input
            type="text"
            name=""
            required
            autofocus
            placeholder="nombre"
          />

          <input
            type="email"
            name=""
            required
            autofocus
            placeholder="email"
          />

          
  
          <input
            type="password"
            name=""
            required
            placeholder="password"
          />
          <button type="button">Registrarte</button>
        </form>
      </div>
      )
}
