import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { StoreContext, store } from './stores/store.ts'
import App from './layout/app.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
)
