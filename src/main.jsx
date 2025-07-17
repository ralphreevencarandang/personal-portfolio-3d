import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeProvider.jsx'
import { BrowserRouter } from 'react-router'
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query'
import {Toaster} from 'react-hot-toast'


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
            <App />
            <Toaster/>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>

 
  </StrictMode>
)
