import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/main.scss'

import BusState from './context/BusState.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BusState>
      <App />
    </BusState>

  </React.StrictMode>,
)
