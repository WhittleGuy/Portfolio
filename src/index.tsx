import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((reg) => {
        console.log(`[Service Worker] Registered ${reg.scope}`)
      })
      .catch((err) => {
        console.log(`[Service Worker] Registration Failed ${err}`)
      })
  })
}
