import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import Provider from './Provider/Provider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const qurayClint = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' max-w-7xl mx-auto'>
      <Provider>
        <QueryClientProvider client={qurayClint}>
          <RouterProvider router={Routes}>
          </RouterProvider>
        </QueryClientProvider>
      </Provider>
    </div>
  </React.StrictMode>,
)
