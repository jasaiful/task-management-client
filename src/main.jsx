import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import MainRouter from './routes/MainRouter';
import AuthProvider from './provider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <React.StrictMode>
          <RouterProvider router={MainRouter} />
        </React.StrictMode>
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
)
