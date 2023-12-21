import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import MainRouter from './routes/MainRouter';
import AuthProvider from './provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={MainRouter} />
    </React.StrictMode>,
  </AuthProvider>
)
