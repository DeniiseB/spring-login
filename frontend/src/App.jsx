import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  useEffect(() => {
    whoAmI()
  }, [])

  async function whoAmI() {
    let res = await fetch('/api/whoami')
    try {
      let user = await res.json()
      console.log(user);
    } catch {
      console.log('Not logged in');
    }
  }

  return (
    <Router className="App">
      <Navbar />

      <main>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </main>
    </Router>
  )
}

export default App
