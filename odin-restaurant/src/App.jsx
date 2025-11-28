import { useState } from 'react'
import Home from './Home'
import Menu from './Menu'
import Contact from './Contact'
import './App.css'

function App() {
  const [page, setPage] = useState('Home')

  const renderPage = () => {
    switch(page) {
      case 'Home':
        return <Home />
      case 'Menu':
        return <Menu />
      case 'Contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <>
    <header>
      <h1>Hylian's Restaurant</h1>
      <h5>Just throw it into the pot!</h5>
      <nav>
        <ul>
          <li onClick={() => setPage("Home")}>Home</li>
          <li onClick={() => setPage("Menu")}>Menu</li>
          <li onClick={() => setPage("Contact")}>Contact</li>
        </ul>
      </nav>
    </header>
    <main>{renderPage()}</main>
    <footer>
      <a href='https://github.com/aleksishere'>aleksishere</a>
    </footer>
    </>
  )
}

export default App
