import React from 'react'
import Routes from './routes'
import './modules/sass/index.scss'
import {Footer, NavBar} from './modules/components'
import {BrowserRouter as Router} from 'react-router-dom'

const App: React.FunctionComponent = () => {
  return (
    <>
      <Router>
        <nav>
          <NavBar />
        </nav>
        <main>
          <Routes />
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
