import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@root/App'
import MainState from '@root/context/MainState'
import '@root/styles/main.scss'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainState>
      <App />
    </MainState>
  </React.StrictMode>,
)
