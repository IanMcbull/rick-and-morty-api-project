import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes'
import './index.css'
import { RouterProvider } from "react-router-dom"
import { QueryClient,QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
const query = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={query}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools position='bottom-right' initialIsOpen={false}/>
  </QueryClientProvider>,
)
