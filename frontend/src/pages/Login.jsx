import React, { useState } from 'react'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function login(e) {
    e.preventDefault()

    const credentials = {
      username,
      password
    }

    let response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });

    let user = await response.json()

    console.log(user);

    if(response.status == 403) {
      console.log('Wrong username/password');
    }
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={login}>
        <input 
          type="text" 
          placeholder="username" 
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <button>login</button>
      </form>
    </div>
  )
}

export default Login
