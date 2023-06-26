import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from 'react-redux'
import {Store,persistor } from './Redux/store.tsx'
import { PersistGate } from 'redux-persist/integration/react'
 

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
      
    <App />
    </PersistGate> 
     </Provider>
  </React.StrictMode>,
)
