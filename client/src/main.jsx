import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ClerkProvider} from '@clerk/clerk-react'

const PUBLISHABLE_KEY = pk_test_cHJlY2lvdXMtc2F3ZmlzaC0wLmNsZXJrLmFjY291bnRzLmRldiQ

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>,
)
