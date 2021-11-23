import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <p onClick={() => fetch('/logout')}>Logout</p>
    </nav>
  )
}

export default Navbar
