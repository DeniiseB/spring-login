import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
  const history = useHistory()

  async function greeting() {
    let res = await fetch('/greet')
    console.log(await res.text());

    // redirect to login page if not logged in
    if(res.status == 403) {
      history.push('/login')
    }
  }

  return (
    <div>
      <h1>Home</h1>

      <button onClick={greeting}>Greeting</button>
    </div>
  )
}

export default Home
