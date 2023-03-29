import React from 'react'
import ReactDOM from 'react-dom/client'
import Signup from './pages/Signup/Signup'
import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <Signup />
  </React.StrictMode>,
)
